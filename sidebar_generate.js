/*
自动在 docsDirName 所处的目录下生成 _sidebar.md，需手动运行（类似node ./sidebar_auto.js，相对地址绝对地址都行）
注意！此脚本会覆盖同名文件
*/

var sidebarTxt = ''; // _sidebar.md 的内容，可以预先放一些东西，比如颜文字什么的
var docsDirName = '/book'; // 文档的目录名
var jump = ''; // docsDirName 与脚本的相对位置。放到根目录下就不需要了
var prefix_char = '_'; // 分割前缀的字符，例如 1_xxx.md
var suffix_char = '.'; // 分割后缀的字符，例如 1_xxx.md

var path = require('path');
var curPath = path.resolve(__dirname, jump) + docsDirName;
var baseDirArr = [];
const os = require('os');
var flod_flag = 1; // 指示是文件夹还是文件

function walkSync(currentDirPath, callback) {
    var fs = require('fs'),
        path = require('path');
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory() && !filePath.includes(".git")) {
            flod_flag = 1;
            walkSync(filePath, callback);
        }
    });
}

// 去掉序号和后缀
function remove_prefix_suffix(dirStr) {
    var prefix_number = dirStr.indexOf(prefix_char) // “_”为前缀
    var suffix_number = dirStr.lastIndexOf(suffix_char) // “.”为后缀

    // 去掉序号和后缀
    if (prefix_number >= 0 && suffix_number >= 0) // 前后缀都有
        return dirStr.substring(prefix_number + 1, suffix_number);
    else if (prefix_number >= 0 && suffix_number == -1) // 只有前缀
        return dirStr.substring(prefix_number + 1);
    else if (prefix_number == -1 && suffix_number >= 0) // 只有后缀
        return dirStr.substring(0, suffix_number);
    else // 没有前后缀
        return dirStr;
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

        // var flod_flag = 1; // 指示是文件夹还是文件

        for (var i = 0; i < relativeFilePathArr.length - 1; i++) { // -1的原因是直接不走 README.md 节约性能，relativeFilePathArr.length 此处最低为 2，长度不可能是 1

            if (baseDirArr[i] == relativeFilePathArr[i]) { // 如果这个目录已经存在了就直接跳过
                continue;
            }

            if (flod_flag == 1) {
                for (var j = 0; j < i; j++) {
                    sidebarTxt += '  '
                }
            }

            if (flod_flag == 1) {
                sidebarTxt += '- **' + remove_prefix_suffix(relativeFilePathArr[i]) + '**\n';
            }

            if (i == relativeFilePathArr.length - 2) { // 理论上-2 逻辑不会bug 该判断直接生成最终文件链接
                sidebarTxt += '    - [**' + remove_prefix_suffix(relativeFilePathArr[i + 1]) + '**](' + docsDirName + '/' + relativeFilePath + ')\n';
                flod_flag = 0;
                continue;
            }

            baseDirArr[i] = relativeFilePathArr[i];
        }
    }
});

var path = require('path');
var fs = require('fs');

console.log(sidebarTxt);

// 生成 _sidebar.md，也就是 docsDirName 所在的目录
fs.writeFile(path.resolve(__dirname, jump) + '/_sidebar.md', sidebarTxt, function (err) {
    if (err) {
        console.error(err);
    }
});