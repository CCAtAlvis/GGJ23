let sshCommands = {
    "root@186.255.190.185": {
        prompt: "root@186.255.190.185> ",
        path: "/"
    },
    "root@74.125.226.45": {
        prompt: "root@74.125.226.45> ",
        path: "/",
        password: "admin"
    },
    "gautam.uchil@example.com": {
        prompt: "root@74.125.226.38> ",
        path: "/",
        password: "password"
    },
    "krishna.namnaik@example.com": {
        prompt: "root@74.125.226.31> ",
        path: "/",
        password: "17081962"
    },
    "philip.hopkins@example.com" : {
        prompt: "root@74.125.226.13> ",
        path: "/",
        password: "admin@123"
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
                "c++": { isFile: true, text: "asxdvfdnjcBUCSBVKCvaUCviyvcyv", author: "Frank" },
                "node": { isFile: false, text: "dan svfiUSBIc uovyiqbuvy" }
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
            "var": {
                "logs": {
                    "07.04.3043.log": {
                        isFile: true, text: `
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
                    "08.04.3043.log": {
                        isFile: true, text: `
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
            ".history": { isFile: true, text: "cd ..\nmongo\nnode index.js\nclear\nclear\ngit reset --hard\nset password helloworld" }

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
            ".history": { isFile: true, text: "cd ..\nmongo\nnode index.js\nclear\nclear\ngit reset --hard\nset password helloworld" }

        }
    },
    "gautam.uchil@example.com": {
        "/": {
            "gautamuchil": {
                "name": {
                    "documents": {
                        "release_notes.txt": {
                            isFile: true,
                            "text": "The release of Version 0.1 in May, 1969 marks a significant milestone in AI development. As per the initial reports, the AI is functioning effectively and demonstrating the ability to identify criminal intentions through analyzing public sentiment. This breakthrough is a testament to the dedicated efforts of Dr. Krishna Namnaik, who led the research team. This achievement holds immense potential to positively impact humanity. Congratulations to the entire team!"
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
            ".history": { isFile: true, text: "cd ..\nmongo\nnode index.js\nclear\nclear\ngit reset --hard\nset password helloworld" }

        }
    },
    "krishna.namnaik@example.com": {
        "/": {
            "krishnanamnaik": {
                "name": {
                    "documents": {
                        "notes.txt": {
                            isFile: true,
                            text: "This invention is truly unparalleled and has the potential to eradicate issues of hunger, crime, and poverty. I am amazed at the AI's capacity to tackle contemporary problems with such ease and efficiency. It is almost unnerving to see just how intelligent this AI technology has become."
                        },
                        "security-breach.txt": {
                            isFile: true,
                            text: `I regret to inform you that there has been a security breach in our network by an unknown entity. Although no changes have been detected, it is possible that some of our confidential data may have been compromised. The following users have been identified as potentially vulnerable:\nPeter Payne(peter.payne@example.com)\nPhilip Hopkins(philip.hopkins@example.com)\nPrajna Anand(prajna.anand@example.com)\nPrathiksha Chiplunkar(prathiksha.chiplunkar@example.com)\nAs a precautionary measure, their passwords have been reset to "admin@123." I urge everyone to exercise caution and change your passwords as soon as possible.In case you need assistance, please reach out to me.\nPlease take this matter seriously and act promptly to secure your account.If you notice any suspicious activity, please report it immediately.\nRegards,\nMrs.Prisha Vernekar\nSr.DevOps Engineer`
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
            ".history": { isFile: true, text: "cd ..\nmongo\nnode index.js\nclear\nclear\ngit reset --hard\nset password helloworld" }

        }
    },
    "philip.hopkins@example.com": {
        "/": {
            "philip": {
                "name": {
                    "documents": {
                        "email.txt": {
                            isFile: true,
                            text: `To aayushi.ramesh@example.com:\nSubject:  Experimentation with AI - Concerns and progress with swayness module\nDo we want to proceed with the experiment? The AI appears to have strongly held convictions and can be difficult to sway in certain circumstances. Although this may be concerning, it is functioning well at present. I am eagerly awaiting the completion of the next module so that I can perform a comprehensive analysis.`
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
            ".history": { isFile: true, text: "cd ..\nmongo\nnode index.js\nclear\nclear\ngit reset --hard\nset password helloworld" }

        }
    },
}
function processCommands(command) {
    var result = "command not found";
    if (command.name === "ssh") {
        if (!sshCommands[command.args[0]]) {
            throw Error('unable to connect the given ip');
        }
        else if (sshCommands[command.args[0]].prompt) {
            if (sshCommands[command.args[0]].password) {
                if (command.args[1] != "-p") {
                    startEvent(13);
                    throw Error("Password is required");
                }
                if (command.args[2] != sshCommands[command.args[0]].password) {
                    startEvent(17);
                    throw Error("Password is wrong");
                }
            }
            if (command.args[0] == "root@186.255.190.185") {
                startEvent(8);
            }
            if (command.args[0] == "gautam.uchil@example.com") {
                startEvent(14);
            }
            if (command.args[0] == "krishna.namnaik@example.com") {
                startEvent(18);
            }
            loggedIP = command.args[0];
            currentPath = sshCommands[command.args[0]].path;
            term.set_prompt(sshCommands[command.args[0]].prompt);
        }
    }
    else if (command.name === "ls") {
        showAuthors = command.args[0] === "--author";
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
        Object.keys(files).forEach(fileName => {
            console.log(fileName);
            file = files[fileName];
            if (file.isFile) {
                targetFiles = targetFiles + "file\t"  + fileName;
            }
            else {
                targetFiles = targetFiles + "dir\t"  + fileName;
            }
            
            if (showAuthors) {
                targetFiles = targetFiles + "\tAuthor: " + (file.author!=undefined?file.author||"Unknown":"Unknown");
            }
            targetFiles += "\n";
        })
        
        startEvent(6);
        if (loggedIP == "root@186.255.190.185") {
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
            if (files[command.args[0]]?.isFile) {
                if (command.args[0] == "release_notes.txt") {
                    startEvent(15)
                }
                if (command.args[0] == "security-breach.txt") {
                    startEvent(19)
                }
                term.echo(files[command.args[0]].text);
            }
            else {
                throw Error("Invalid File")
            }

        }
    }
    else if (command.name == "netstat") {
        term.echo("Network Details");
        term.echo("Current IP : " + loggedIP);
        term.echo("Parent IP : 192.168");
        // current ip, subnet ips
    }
    else if (command.name == "rm") {
        term.echo("rm");
        // Shut down website
    }
    else if (command.name == "sendmail") {
        term.echo("sendmail");
        if (command.args.length < 3) {
            throw Error('invalid arguments');
        }
        else if (command.args[0] === "" && command.args[1] === "") {
            throw Error('Missing arguments to, from or text');
        }
        else {
            term.echo("Email sent successfully!");

            if(command.args[0] === "prisha.vernekar@example.com" && command.args[1] === "abhijith.bhat@example.com")
            {
                // Get mail password has been reset to default admin@123. Please reset it asap.

            }
        }
        // Send email from, to, text
    }
    else if (command.name == "wput") {
        term.echo("wput");
        // wput file to url
    }
    else if (command.name == "wget") {
        term.echo("wget");
        // wget file to our folder
    }
    else if (result && result instanceof $.fn.init) {
        term.echo('<#jQuery>');
    } else if (result && typeof result === 'object') {
        tree(result);
    } else if (result !== undefined) {
        term.echo(new String(result));
    }
}
