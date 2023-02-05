let sshCommands = {
    "root@186.255.190.185": {
        prompt: "root@186.255.190.185> ",
        path: "/"
    },
    "root@74.125.226.45": {
        prompt: "root@74.125.226.45> ",
        path: "/",
        password : "admin"
    },
    "gautam.uchil@example.com": {
        prompt: "root@74.125.226.38> ",
        path: "/",
        password : "password"
    },
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
    },
    "root@186.255.190.185": {
        "/": {
            "ananthanand": {
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
            },
            "var" :{
                "logs" : {
                    "07.04.3043.log" : {isFile : true , text : `
                    8.8.8.8 - 10 MB transferred at 11:00:01 AM
                    8.8.4.4 - 20 MB transferred at 11:05:01 AM
                    74.125.226.36 - 30 MB transferred at 11:10:01 AM
                    74.125.226.39 - 40 MB transferred at 11:15:01 AM
                    74.125.226.37 - 30 MB transferred at 11:10:01 AM
                    74.125.226.34 - 30 MB transferred at 11:10:01 AM
                    74.125.226.33 - 30 MB transferred at 11:09:01 AM
                    74.125.226.21 - 30 MB transferred at 11:08:01 AM
                    74.125.226.45 - 30 MB transferred at 11:06:01 AM
                    ...
                    `},
                    "08.04.3043.log" : {isFile : true , text :  `
                    8.8.8.8 - 10 MB transferred at 11:00:01 AM
                    8.8.4.4 - 20 MB transferred at 11:05:01 AM
                    74.125.226.36 - 30 MB transferred at 11:10:01 AM
                    74.125.226.39 - 40 MB transferred at 11:15:01 AM
                    74.125.226.37 - 30 MB transferred at 11:10:01 AM
                    74.125.226.34 - 30 MB transferred at 11:10:01 AM
                    74.125.226.33 - 30 MB transferred at 11:09:01 AM
                    74.125.226.21 - 30 MB transferred at 11:08:01 AM
                    74.125.226.45 - 30 MB transferred at 11:06:01 AM
                    ...
                    `},
                }
            },
            ".history" :{isFile : true , text : "cd ..\nmongo\nnode index.js\nclear\nclear\ngit reset --hard\nset password helloworld" }

        }
    },
    "root@74.125.226.45": {
        "/": {
            "ananthanand": {
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
            },
            ".history" :{isFile : true , text : "cd ..\nmongo\nnode index.js\nclear\nclear\ngit reset --hard\nset password helloworld" }

        }
    },
    "gautam.uchil@example.com": {
        "/": {
            "gautamuchil": {
                "name": {
                    "documents": {
                        "release_notes.txt": {
                            isFile: true,
                            "text": "The release of Version 0.1 in May, 1969 marks a significant milestone in AI development. As per the initial reports, the AI is functioning effectively and demonstrating the ability to identify criminal intentions through analyzing public sentiment. This breakthrough is a testament to the dedicated efforts of Dr. Krishna Kouser, who led the research team. This achievement holds immense potential to positively impact humanity. Congratulations to the entire team!"
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
            "var": {
                "file1": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" },
                "file2": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" }
            },
            ".history" :{isFile : true , text : "cd ..\nmongo\nnode index.js\nclear\nclear\ngit reset --hard\nset password helloworld" }

        }
    }
}
function processCommands(command) {
    var result = "command not found";
    if (command.name === "ssh") {
        if (!sshCommands[command.args[0]]) {
            throw Error('unable to connect the given ip');
        }
        else if (sshCommands[command.args[0]].prompt) {
            if(sshCommands[command.args[0]].password){
                if(command.args[1]!="-p"){
                    startEvent(13);
                    throw Error("Password is required");
                }
                if(command.args[2]!=sshCommands[command.args[0]].password){
                    throw Error("Password is wrong");
                }
            }
            if(command.args[0] == "root@186.255.190.185"){
                startEvent(8);
            }
            if(command.args[0] == "gautam.uchil@example.com"){
                startEvent(14);
            }
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
        startEvent(6);
        if(loggedIP == "root@186.255.190.185"){
            startEvent(9);
            startEvent(10);
        }
        term.echo(targetFiles);
    }
    else if (command.name === "pwd") {
        startEvent(5);
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
            else if (path === ".") { }
            else {
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
                if (files[path] && !files[path].isFile) {
                    currentPath = currentPath + "." + path;
                }
                else {
                    throw Error(`cd : ${path} is not directory`);
                }
            }
        })
        startEvent(7);
    }
    else if (command.name === "cat") {
        if (command.args.length > 1) {
            throw Error('invalid arguments');
        }
        else if (!command.args[0]) {
            throw Error('please provide valid file name');
        }
        else {
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
            if(files[command.args[0]].isFile){
                if(command.args[0]== "release_notes.txt"){
                    startEvent(15)
                }
                term.echo(files[command.args[0]].text);
            }    
            else{
                throw Error("Invalid File")
            }

        }
    }
    else if (result && result instanceof $.fn.init) {
        term.echo('<#jQuery>');
    } else if (result && typeof result === 'object') {
        tree(result);
    } else if (result !== undefined) {
        term.echo(new String(result));
    }
}