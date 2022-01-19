// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders
const fs = require("fs");
const path = require("path");

let input = process.argv.slice(2)
let command = input[0]

switch (command) {
    case 'tree':
        console.log("Tree Implemented")
        break
    case 'organise':
        organisefn(input[1])
        break
    case 'help':
        helpfn()
        break
    default:
        console.log("Please Enter valid Command")
}

function helpfn() {
    console.log(`List of all the commands
                                        1)Tree - node FO.js tree <dirPth>
                                        2)Orangize - node FO.js orangize <dirPath>
                                        3)Help - node FO.js help `)
}

function organisefn(dirPath) {
    let destPath
    if (dirPath == undefined) {
        console.log('Please enter a valid Directory  Path')
        return
    }
    let doesExist = fs.existsSync(dirPath)

    if (doesExist == true) {
        destPath = path.join(dirPath, 'organized_Files')
        if (fs.existsSync(destPath) == false) {
            fs.mkdirSync(destPath)
        } else {
            console.log("Folder Already exist")
        }

    } else {
        console.log('Please enter a valid Directory  Path')
    }

}