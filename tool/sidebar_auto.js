/*
自动在 docsDirName 所处的目录下生成 _sidebar.md，需手动运行（类似node ./sidebar_auto.js，相对地址绝对地址都行）
注意！此脚本会覆盖同名文件
使用 .md 所在的目录名作为文档名

目录结构：
mydocs
  |-docs
    |-abc // 大分类
      |-def // 小分类，里面放一个文档和多个图片等，对每个文档分割
        |-readme.md // 这个名字不会管，只在_sidebar.md里出现
  |-script
    |-sidebar_auto
      |-sidebar_auto.js
  |-_sidebar.md

这样生成的 _sidebar.md 的内容：
- **abc**
  - [def](/docs/abc\def\readme.md)
*/

/*
sidebarTxt： 存放 _sidebar.md 内容的地方，可以预先放一些东西，比如颜文字什么的
docsDirName：文档的目录名。_sidebar.md 也会放在该目录所处的目录下
jump：       docsDirName 与脚本的相对位置
*/
var sidebarTxt = '- [**home**](readme.md)\n';
var docsDirName = '/docs';
var jump = '../../'
var path = require('path');
var curPath = path.resolve(__dirname, jump) + docsDirName;
var baseDirArr = [];
const os = require('os');

function walkSync(currentDirPath, callback) {
    var fs = require('fs'),
        path = require('path');
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory() && !filePath.includes(".git")) {
            walkSync(filePath, callback);
        }
    });
}

// 去掉序号，没有就不管
function removeSerialNumber(dirStr){
    var dotNum = dirStr.indexOf("_") // 以“_”为序号和标题的分隔符
    if (dotNum >= 0){ // 找到了
        return dirStr.substring(dotNum + 1) // 返回分隔符后面的字符串
    } else
    {
        return dirStr
    }
}

walkSync(curPath, function (filePath, stat) {
    if (".md" == path.extname(filePath).toLowerCase()
        && "_" != path.basename(filePath).substring(0, 1)
        && path.basename(filePath).includes(`.md`)) {
        var relativeFilePath = filePath.substring(curPath.length + 1);// 这里取得相对路径 直接删除'/'
        if (relativeFilePath == path.basename(filePath)) { // 这个地方直接把根目录的 .md 文件排除了
            return;
        }

        //进行字符串 / 分割
        var relativeFilePathArr = '';
        if (os.type() == 'Windows_NT')
            relativeFilePathArr = relativeFilePath.split('\\')
        else
            relativeFilePathArr = relativeFilePath.split('/')

        for (var i = 0; i < relativeFilePathArr.length - 1; i++) { // -1的原因是直接不走 README.md 节约性能，relativeFilePathArr.length 此处最低为 2，长度不可能是 1
            if (baseDirArr[i] == relativeFilePathArr[i]) { // 如果这个目录已经存在了就 直接跳过
                continue;
            }
            for (var j = 0; j < i; j++) {
                sidebarTxt += '  '
            }
            if (i == relativeFilePathArr.length - 2) { // 理论上-2 逻辑不会bug 该判断直接生成最终文件链接
                // sidebarTxt += '- [' + relativeFilePathArr[i] + '](' + docsDirName + '/' + relativeFilePath + ')\n';
                sidebarTxt += '- [**' + removeSerialNumber(relativeFilePathArr[i]) + '**](' + docsDirName + '/' + relativeFilePath + ')\n';
                continue;
            }
            // if (i == 0) {
            //     sidebarTxt += '- **' + removeSerialNumber(relativeFilePathArr[i]) + '**\n'; // 二级目录名
            // } else {
            //     sidebarTxt += '- **' + removeSerialNumber(relativeFilePathArr[i]) + '**\n'; // 三级以上的目录名
            // }
            sidebarTxt += '- **' + removeSerialNumber(relativeFilePathArr[i]) + '**\n';
            baseDirArr[i] = relativeFilePathArr[i]
            // console.log(baseDirArr);
        }
    }
});

var path = require('path');
var fs = require('fs');
// fs.copyFile(path.resolve('./')+"/_sidebar.md",path.resolve('./')+"/_sidebar.md.bak",function(err){
//     if(err) throw new Error('something wrong was happended') });

console.log(sidebarTxt);

// 生成../../_sidebar.md，也就是 docsDirName 所在的目录
fs.writeFile(path.resolve(__dirname, jump) + '/_sidebar.md', sidebarTxt, function (err) {
    if (err) {
        console.error(err);
    }
});