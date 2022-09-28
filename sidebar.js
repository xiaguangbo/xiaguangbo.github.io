// node sidebar.js
const markdown_directory_name = "document";
const prefix_char = '_'; // 分割前缀的字符，例如 1_abc.md，去掉“1_”
const suffix_char = '.'; // 分割后缀的字符，例如 1_abc.md，去掉“.md”
const blacklist = [ // 需要忽略的
    // '_sidebar.md',
    // 'img',
    // "CNAME", "README.md", "node_modules", 'dist', '.css', '.js'
]
const docsPath = __dirname + "/" + markdown_directory_name // 根据该文件夹内的 .md 的路径生成 _sidebar.md
const keepEmptyDir = true //是否为空文件夹生成目录

const fs = require('fs');

let sidebar_string = sidebar_generate(path_get(docsPath, "/"), "", "")
console.log(sidebar_string)
fs.writeFile(__dirname + '/_sidebar.md', sidebar_string, { encoding: 'utf8' }, err => { });

function sidebar_generate(obj, _dir, tab) {
    let temp = ""
    if (_dir) {
        temp = tab + "- " + _dir + "\n"
        tab += "  "
    }
    for (const key in obj) {
        let item = obj[key]
        if (typeof item == "string") {
            temp += tab + "- [" + key + "](" + markdown_directory_name + "/" + item + ")\n"
        } else if (typeof item == "object") {
            if (keepEmptyDir == false && Object.keys(item).length < 1) { continue }
            temp += sidebar_generate(item, key, tab)
        }
    }
    return temp
}

function path_get(_path, _dir = "/") {
    let fsResult = (fs.readdirSync(_path)).filter(item => !((/^\.+.*/).test(item)))
    fsResult = fsResult.filter(item => blacklist.indexOf(item) < 0)

    let result = {}

    for (const i in fsResult) {
        let item = fsResult[i]
        let title = title_get(_path + "/" + item, item)
        if (fs.lstatSync(_path + "/" + item).isDirectory()) {
            result[title] = (path_get(_path + "/" + item, item))
        } else if (/.*\.md$/.test(item)) {
            let mdPath = (_path.replace(docsPath, "") + "/" + item)
                .replace(/\s/g, '%20')
                .replace(/\?/g, '%3F')
                .replace(/\)/g, '%29')
                .replace(/#/g, '%23')
            if (mdPath.indexOf('/') == 0) {
                mdPath = mdPath.slice(1)
            }
            result[title] = mdPath
        }
    }
    return result
}

function title_get(path, md) {
    //默认用文件名做标题
    let title = md.substr(0, md.length - 3)
    if (md.toLowerCase() == "readme.md") {
        title = "README" // readme文件用根目录表示
    } else if (md.indexOf('.md') < 1) {
        title = md // 非md文件
    } else {
        let data = fs.readFileSync(path, 'utf8').split("\n")
        for (const i in data) {
            if (/^(\s*#){1}\s+.*/.test(data[i]))
                title = data[i].replace(/^(\s*#){1}\s+/, "")
            else {
                var path_l = require('path')
                title = remove_prefix_suffix(path_l.basename(path)) // 取路径最后的字符串并去除前后缀
            }

            break
        }
    }
    return title
}

// 去掉前缀和后缀
function remove_prefix_suffix(string) {
    
    var prefix_number
    if (string[0] >= '0' && string[0] <= '9') // 如果第一个字符是数字
        prefix_number = string.indexOf(prefix_char) // 前缀的位置
    else
        prefix_number = -1

    var suffix_number = string.lastIndexOf(suffix_char) // 后缀的位置

    // 去掉序号和后缀
    if (prefix_number >= 0 && suffix_number >= 0) // 前后缀都有
        return string.substring(prefix_number + 1, suffix_number)
    else if (prefix_number >= 0 && suffix_number == -1) // 只有前缀
        return string.substring(prefix_number + 1)
    else if (prefix_number == -1 && suffix_number >= 0) // 只有后缀
        return string.substring(0, suffix_number)
    else // 没有前后缀
        return string
}