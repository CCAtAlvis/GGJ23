const aiModules = ['module1.ai','module2.ai','module3.ai','module4.ai'];
let adminPods = ["root@74.125.226.01"];
let sshCommands = {
    "root@186.255.190.185": {
        prompt: "root@186.255.190.185> ",
        path: "/",
        parentIp : "74.125.226.01",
        users : ["ananthanand","root"]
    },
    "root@74.125.226.45": {
        prompt: "root@74.125.226.45> ",
        path: "/",
        password: "admin",
        users : ["ananthanand","root"]
    },
    "gautam.uchil@example.com": {
        prompt: "gautamuchil@74.125.226.38> ",
        path: "/.usr.gautamuchil",
        password: "password",
        users : ["gautamuchil","root"]
    },
    "krishna.namnaik@example.com": {
        prompt: "krishna.namnaik@74.125.226.31> ",
        path: "/.usr.krishnanamnaik",
        password: "17081962",
        users : ["krishnanamnaik","root"]
    },
    "aayushi.ramesh@example.com": {
        prompt: "aayushiramesh@74.125.226.31> ",
        path: "/.usr.aayushiramesh",
        password: "kfhskfsdlfksd",
        users : ["aayushiramesh","root"]
    },
    "philip.hopkins@example.com" : {
        prompt: "philiphopkins@74.125.226.13> ",
        path: "/.usr.philiphopkins",
        password: "password",
        parentIp : "74.125.226.01",
        users : ["philip","root"]
    },
    "reginald.wagner@example.com" : {
        prompt: "reginaldwagner@74.125.226.13> ",
        path: "/.usr.reginaldwagner",
        password: "kfjsfvbscawj",
        parentIp : "74.125.226.01",
        users : ["reginaldwagner","root"]
    },
    "root@74.125.226.01" :{
        prompt: "root@74.125.226.01> ",
        path: "/",
        password: "kcsulhnfuhuiadyq98h",
        parentIp : "74.125.226.01",
        users : ["abhijithbhat", "adahshroff", "prishavernekar", "root",]
    }
}
let loggedIP = "SynthOS";
let currentPath = "/.bin";

let lsCommands = {
    "SynthOS": {
        "/": {
            "users": {
                "synth": {
                    "downloads" : {
                        "module1.ai" : {isFile : true , text : "Never gonna give you up, Never gonna let you down" , "isHidden" : true},
                        "module2.ai" : {isFile : true , text : "Never gonna give you up, Never gonna let you down" , "isHidden" : true},
                        "module3.ai" : {isFile : true , text : "Never gonna give you up, Never gonna let you down" , "isHidden" : true},
                        "module4.ai" : {isFile : true , text : "Never gonna give you up, Never gonna let you down" , "isHidden" : true}
                    },
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
            "usr": {
                "gautamuchil": {
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
            "usr": {
                "krishnanamnaik": {
                    "documents": {
                        "notes.txt": {
                            isFile: true,
                            text: "This invention is truly unparalleled and has the potential to eradicate issues of hunger, crime, and poverty. I am amazed at the AI's capacity to tackle contemporary problems with such ease and efficiency. It is almost unnerving to see just how intelligent this AI technology has become."
                        }
                    },
                    "office": {
                        "final.pptx": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" },
                        "id.png": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" },
                        "ssh.pem": {
                            isFile: true,
                            "text": "SSH-12345kdsonsdpodonJOSDHohDSnoD"
                        }
                    },
                    "mails": {
                        "sent": {
                            "Subject:Experimentation_With_AI": {
                                isFile: true,
                                "text": `To: aayushi.ramesh@example.com\nSubject: Experimentation with AI - Concerns and progress with swayness module\n\nMessage: Do we want to proceed with the experiment? The AI appears to have strongly held convictions and can be difficult to sway in certain circumstances. Although this may be concerning, it is functioning well at present. I am eagerly awaiting the completion of the next module so that I can perform a comprehensive analysis.`
                            }    
                        },
                        "inbox": {
                            "Subject:Security_Breach": {
                                isFile: true,
                                text: `From: Mrs.Prisha Vernekar\nSubject: Security Breach\n\n I regret to inform you that there has been a security breach in our network by an unknown entity. Although no changes have been detected, it is possible that some of our confidential data may have been compromised. The following users have been identified as potentially vulnerable:\nPeter Payne(peter.payne@example.com)\nPhilip Hopkins(philip.hopkins@example.com)\nPrajna Anand(prajna.anand@example.com)\nPrathiksha Chiplunkar(prathiksha.chiplunkar@example.com)\nAs a precautionary measure, their passwords have been reset to default password. I urge everyone to exercise caution and change your passwords as soon as possible.In case you need assistance, please reach out to me.\nPlease take this matter seriously and act promptly to secure your account.If you notice any suspicious activity, please report it immediately.\nRegards,\nMrs.Prisha Vernekar\nSr.DevOps Engineer`
                            }
                        }
                    }
                }
            },
            "bin": {
                "c++": { isFile: true, text: "asxdvfdnjcBUCSBVKCvaUCviyvcyv" },
                "node": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" },
                "module1.ai" : {isFile : true , text : "Never gonna give you up, Never gonna let you down"}
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
            "usr": {
                "philiphopkins": {
                    "documents": {
                        "notes.txt": {
                            isFile: true,
                            text: `To aayushi.ramesh@example.com:\nSubject: Experimentation with AI - Concerns and progress with swayness module\nDo we want to proceed with the experiment? The AI appears to have strongly held convictions and can be difficult to sway in certain circumstances. Although this may be concerning, it is functioning well at present. I am eagerly awaiting the completion of the next module so that I can perform a comprehensive analysis.`
                        },
                        "netinfo": {
                            "help": {
                                isFile: true,
                                text: 'netinfo: netinfo is used get network info of a machine\nUsage: netinfo'    
                            }
                        }
                    },
                    "office": {
                        "final.pptx": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" },
                        "id.png": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" },
                        "ssh.pem": {
                            isFile: true,
                            "text": "SSH-Never gonna give you up, Never gonna let you down"
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
    "aayushi.ramesh@example.com": {
        "/": {
            "usr": {
                "aayushiramesh": {
                    "documents": {
                        "notes.txt": {
                            isFile: true,
                            text: "This invention is truly unparalleled and has the potential to eradicate issues of hunger, crime, and poverty. I am amazed at the AI's capacity to tackle contemporary problems with such ease and efficiency. It is almost unnerving to see just how intelligent this AI technology has become."
                        }
                    },
                    "office": {
                        "final.pptx": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" },
                        "id.png": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" },
                        "ssh.pem": {
                            isFile: true,
                            "text": "SSH-12345kdsonsdpodonJOSDHohDSnoD"
                        }
                    },
                    "mails": {
                        "sent": { 
                        },
                        "inbox": {
                            "Subject:Experimentation_With_AI": {
                                isFile: true,
                                "text": `From: krishna.namnaik@example.com\nSubject: Experimentation with AI - Concerns and progress with swayness module\n\nMessage: Do we want to proceed with the experiment? The AI appears to have strongly held convictions and can be difficult to sway in certain circumstances. Although this may be concerning, it is functioning well at present. I am eagerly awaiting the completion of the next module so that I can perform a comprehensive analysis.`
                            },
                            "Subject:Security_Breach": {
                                isFile: true,
                                text: `From: Mrs.Prisha Vernekar\nSubject: Security Breach\n\n I regret to inform you that there has been a security breach in our network by an unknown entity. Although no changes have been detected, it is possible that some of our confidential data may have been compromised. The following users have been identified as potentially vulnerable:\nPeter Payne(peter.payne@example.com)\nPhilip Hopkins(philip.hopkins@example.com)\nPrajna Anand(prajna.anand@example.com)\nPrathiksha Chiplunkar(prathiksha.chiplunkar@example.com)\nAs a precautionary measure, their passwords have been reset to default password. I urge everyone to exercise caution and change your passwords as soon as possible.In case you need assistance, please reach out to me.\nPlease take this matter seriously and act promptly to secure your account.If you notice any suspicious activity, please report it immediately.\nRegards,\nMrs.Prisha Vernekar\nSr.DevOps Engineer`
                            }
                        }
                    }
                }
            },
            "bin": {
                "c++": { isFile: true, text: "asxdvfdnjcBUCSBVKCvaUCviyvcyv" },
                "node": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" },
                "module2.ai" : {isFile : true , text : "Never gonna give you up, Never gonna let you down"},
                "module3.ai.test" : {isFile : true , text : "Authored by: $@($%@))\nThe File Is Corrupted", author: "Reginald Wagner"},
            },
            "var": {
                "file1": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" },
                "file2": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" }
            },
            ".history": { isFile: true, text: "cd ..\nmongo\nnode index.js\nclear\nclear\ngit reset --hard\nset password helloworld" }

        }
    },
    "reginald.wagner@example.com": {
        "/": {
            "usr": {
                "reginaldwagner": {
                    "documents": {
                        "notes.txt": {
                            isFile: true,
                            text: "This invention is truly unparalleled and has the potential to eradicate issues of hunger, crime, and poverty. I am amazed at the AI's capacity to tackle contemporary problems with such ease and efficiency. It is almost unnerving to see just how intelligent this AI technology has become."
                        }
                    },
                    "office": {
                        "final.pptx": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" },
                        "id.png": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" },
                        "ssh.pem": {
                            isFile: true,
                            "text": "SSH-12345kdsonsdpodonJOSDHohDSnoD"
                        }
                    },
                    "mails": {
                        "sent": { 
                        },
                        "inbox": {
                            "Subject:Experimentation_With_AI": {
                                isFile: true,
                                "text": `From: krishna.namnaik@example.com\nSubject: Experimentation with AI - Concerns and progress with swayness module\n\nMessage: Do we want to proceed with the experiment? The AI appears to have strongly held convictions and can be difficult to sway in certain circumstances. Although this may be concerning, it is functioning well at present. I am eagerly awaiting the completion of the next module so that I can perform a comprehensive analysis.`
                            },
                            "Subject:Security_Breach": {
                                isFile: true,
                                text: `From: Mrs.Prisha Vernekar\nSubject: Security Breach\n\n I regret to inform you that there has been a security breach in our network by an unknown entity. Although no changes have been detected, it is possible that some of our confidential data may have been compromised. The following users have been identified as potentially vulnerable:\nPeter Payne(peter.payne@example.com)\nPhilip Hopkins(philip.hopkins@example.com)\nPrajna Anand(prajna.anand@example.com)\nPrathiksha Chiplunkar(prathiksha.chiplunkar@example.com)\nAs a precautionary measure, their passwords have been reset to default password. I urge everyone to exercise caution and change your passwords as soon as possible.In case you need assistance, please reach out to me.\nPlease take this matter seriously and act promptly to secure your account.If you notice any suspicious activity, please report it immediately.\nRegards,\nMrs.Prisha Vernekar\nSr.DevOps Engineer`
                            }
                        }
                    }
                }
            },
            "bin": {
                "c++": { isFile: true, text: "asxdvfdnjcBUCSBVKCvaUCviyvcyv" },
                "node": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" },
                "module3.ai" : {isFile : true , text : "Never gonna give you up, Never gonna let you down"},
            },
            "var": {
                "file1": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" },
                "file2": { isFile: true, text: "dan svfiUSBIc uovyiqbuvy" }
            },
            ".history": { isFile: true, text: "cd ..\nmongo\nnode index.js\nclear\nclear\ngit reset --hard\nset password helloworld" }

        }
    },
    "root@74.125.226.01": {}
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
            } else if (command.args[0] == "gautam.uchil@example.com") {
                startEvent(14);
            } else if (command.args[0] == "krishna.namnaik@example.com") {
                startEvent(18);
            } else if (command.args[0] == "philip.hopkins@example.com") {
                startEvent(23);
            } else if (command.args[0] == "aayushi.ramesh@example.com") {
                startEvent(30);
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
            file = files[fileName];
            if(file.isHidden)return;
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
        } else if (path.includes("bin") && loggedIP == "krishna.namnaik@example.com") {
            startEvent(19);
        } else if (path.includes("netinfo") && loggedIP == "philip.hopkins@example.com") {
            startEvent(24);
        } else if (path.includes("bin") && loggedIP == "aayushi.ramesh@example.com") {
            startEvent(32);
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
                    if(command.args[0].endsWith("bin") && loggedIP == "krishna.namnaik@example.com"){
                        // startEvent(19);
                    }
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
                if (command.args[0] === "release_notes.txt") {
                    startEvent(15);
                } else if (command.args[0] === "Subject:Security_Breach") {
                    startEvent(22);
                } else if (command.args[0] === "Subject:Experimentation_With_AI") {
                    startEvent(21);
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
        if(sshCommands[loggedIP]?.parentIp){
             term.echo("Parent IP : "+ sshCommands[loggedIP].parentIp );
        }

        if (loggedIP === "philip.hopkins@example.com") {
            startEvent(25);
        }
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

            if(command.args[0] === "prisha.vernekar@example.com" && command.args[1] === "abhijith.bhat@example.com") {
                startEvent(27);
            }
        }
        // Send email from, to, text
    }
    else if(command.name == "users"){
        if(!command.args[0]){
            throw Error("Please provide Ip address");
        }
        let users = sshCommands["root@"+command.args[0]]?.users;
        if(users){
            users.forEach(user=>{
                term.echo(user);
            })
        }
    }
    else if (command.name == "wput") {
        if(command.args[0] === "https://tinyurl.com/reset-passwd" && command.args[1]==="prisha.vernekar@example.com") {
            for(let pods in sshCommands){
                if(!adminPods.includes(pods)){
                    delete sshCommands[pods].password;
                }
            }

            term.echo('[RESET-PASSWD] Gaining Access.');
            term.echo('[RESET-PASSWD] Gaining Access..');
            term.echo('[RESET-PASSWD] Gaining Access...');
            term.echo('[RESET-PASSWD] Gained Access!');
            term.echo('[RESET-PASSWD] Reseting User Passwords (1/10)');
            term.echo('[RESET-PASSWD] Reseting User Passwords (2/10)');
            term.echo('[RESET-PASSWD] Reseting User Passwords (3/10)');
            term.echo('[RESET-PASSWD] Reseting User Passwords (5/10)');
            term.echo('[RESET-PASSWD] Reseting User Passwords (6/10)');
            term.echo('[RESET-PASSWD] Reseting User Passwords (6/10)');
            term.echo('[RESET-PASSWD] Reseting User Passwords (8/10)');
            term.echo('[RESET-PASSWD] Reseting User Passwords (9/10)');
            term.echo('[RESET-PASSWD] Reseting User Passwords (9/10)');
            term.echo('[RESET-PASSWD] Reseting User Passwords (9/10)');
            term.echo('[RESET-PASSWD] Reseting User Passwords (9/10)');
            term.echo('[RESET-PASSWD] Reseting User Passwords (9/10)');
            term.echo('[RESET-PASSWD] Reseting User Passwords: Failed, couldn\'t gain access to Harbinger System root');
            term.echo('[RESET-PASSWD] All other passwords have been reset except for root system');

            startEvent(29);
        } else {
            throw Error("Unable to upload the file to given location");
        }
        // wput file to url
    }
    else if (command.name == "wget") {
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

            const filename = command.args[0];
            if (files[filename]?.isFile) {
                if (!aiModules.includes(filename)) {
                    throw Error("Network Error: download failed");
                }

                lsCommands.SynthOS["/"].users.synth.downloads[filename].isHidden = false;

                if (filename === "module1.ai") {
                    startEvent(20);
                } else if (filename === "module2.ai") {
                    startEvent(31);
                } else if (filename === "module3.ai") {
                    startEvent(33);
                } else if (filename === "module4.ai") {
                    // startEvent(33);
                }


                term.echo("Download Completed");
            }
            else {
                throw Error("Invalid File")
            }

        }
        
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
