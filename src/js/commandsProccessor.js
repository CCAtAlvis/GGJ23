let sshCommands = {
    "root@186.255.190.185": {
        prompt: "root@186.255.190.185 ~> ",
        path: "users.root"
    }
}
let loggedIP = "SynthOS";
let currentPath = "/.bin";
let lsCommands = {
    "SynthOS": {
        "/": {
            "users": {
                "name": {
                    "documents": {
                        "1.txt": {
                            isFile: true,
                            "text": "TODO:\n1.Watch One Piece new episode\n2.Finish office work\n3.Learn new things."
                        }
                    },
                    "office": {
                        "final.pptx": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" },
                        "id.png": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" },
                        "ssh.pem": {
                            isFile: true,
                            "text": "SSH-12345kdsonsdpodonJOSDHohDSnoD"
                        }
                    }
                }
            },
            "bin": {
                "c++": { isFile: true, text: "asxdvfdnjcBUCSBVKCvaUCviyvcyv" },
                "node": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" }
            },
            "~": {
                "file1": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" },
                "file2": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" }
            }

        }
    }
}
function processCommands(command) {
    var result = "command not found";
    if (command.name === "ssh") {
        if (command.args.length > 1) {
            throw Error('invalid arguments');
        }
        else if (!sshCommands[command.args[0]]) {
            throw Error('unable to connect the given ip');
        }
        else if (sshCommands[command.args[0]].prompt) {
            loggedIP = command.args[0];
            currentPath = sshCommands[command.args[0]].path;
            term.set_prompt(sshCommands[command.args[0]].prompt);
        }
    }
    else if (command.name === "ls") {
        let path = currentPath.split(".");
        let files = lsCommands[loggedIP];
        path.forEach(folder => {
            files = files[folder];
            if (!files) {
                throw Error("Path is wrong");
            }
            if (files.isFile == true) {
                throw Error(`cd : ${folder} is not directory`);
            }
        })
        let targetFiles = "";
        Object.keys(files).forEach(file => {
            targetFiles = targetFiles + " " + file;
        })
        term.echo(targetFiles);
    }
    else if (command.name === "pwd") {
        term.echo(currentPath.replaceAll(".", "/").replaceAll("//", "/"));
    }
    else if (command.name === "cd") {
        if (command.args.length > 1) {
            throw Error('invalid arguments');
        }
        if (!command.args[0]) {
            throw Error('invalid path');
        }
        let pathchanges = command.args[0].split("/");
        pathchanges.forEach(path => {
            if (path === ".." && currentPath.lastIndexOf(".") != -1) {
                currentPath = currentPath.replace(currentPath.substring(currentPath.lastIndexOf("."), currentPath.length), "");
            }
            else{
                let currentPathChanges = currentPath.split(".");
                let files = lsCommands[loggedIP];
                currentPathChanges.forEach(folder => {
                    files = files[folder];
                    if (!files) {
                        throw Error("Path is wrong");
                    }
                    if (files.isFile == true) {
                        throw Error(`cd : ${folder} is not directory`);
                    }
                })
                if(files[path] && !files[path].isFile){
                    currentPath = currentPath + "." + path;
                }
                else{
                    throw Error(`cd : ${path} is not directory`);
                }
            }
        })

    }
    else if (result && result instanceof $.fn.init) {
        term.echo('<#jQuery>');
    } else if (result && typeof result === 'object') {
        tree(result);
    } else if (result !== undefined) {
        term.echo(new String(result));
    }
}