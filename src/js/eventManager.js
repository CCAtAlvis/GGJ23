let sendMail = (data) => {
    //alert
    triggerAlert("mail");
    //enable mail 1
    let foundMail = emails.find(mail => { return mail.uid == data.mailId })
    foundMail.visible = true;
    renderMail();
}
let sendNews = (data) => {
    //alert
    triggerAlert("news");
    //enable mail 1
    let foundNews = news.find(singlenews => { return singlenews.uid == data.newsId })
    foundNews.visible = true;
    console.log(foundNews)
}
let currentState = 34;
let events = {
    1: [
        {
            action: sendMail,
            data: {
                mailId: 1,
            }
        }
    ],
    2: [
        {
            action: sendMail,
            data: {
                mailId: 2,
                delay : 3000
            }
        }
    ],
    3: [
        {
            action: tirggerAiBot,
            data: {
                id: 1,
                delay: 3000
            }
        },
    ],
    4 : [
        {
            action: tirggerAiBot,
            data: {
                id: 2
            }
        },
    ],
    5: [
        {
            action: tirggerAiBot,
            data: {
                id: 3
            }
        },
    ],
    6: [
        {
            action: tirggerAiBot,
            data: {
                id: 4
            }
        },
    ],
    7: [
        {
            action: tirggerAiBot,
            data: {
                id: 5
            }
        },
    ],
    8: [
        {
            action: tirggerAiBot,
            data: {
                id: 6
            }
        },
    ],
    9 : [
        {
            action: tirggerAiBot,
            data: {
                id: 7
            }
        },
    ],
    10 : [
        {
            action: sendMail,
            data: {
                mailId: 3,
                delay : 6000
            }
        }
    ],
    11 : [
        {
            action: tirggerAiBot,
            data: {
                id:8
            }
        },
    ],
    12 : [
        {
            action: tirggerAiBot,
            data: {
                id:9
            }
        },
    ],
    13 : [
        {
            action: tirggerAiBot,
            data: {
                id:10
            }
        },
    ],
    14 : [
        {
            action: tirggerAiBot,
            data: {
                id:11
            }
        },
    ],
    15 : [
        {
            action: tirggerAiBot,
            data: {
                id:12
            }
        },
    ],
    16 : [
        {
            action: tirggerAiBot,
            data: {
                id:13
            }
        },
    ],
    17 : [
        {
            action: tirggerAiBot,
            data: {
                id:14
            }
        },
    ],
    18 : [
        {
            action: tirggerAiBot,
            data: {
                id:15
            }
        },
    ],
    19 : [
        {
            action: tirggerAiBot,
            data: {
                id:16,
                delay: 1000
            }
        }
    ],
    20: [{
            action: tirggerAiBot,
            data: {
                id: 17,
                delay: 1000
            }
        }
    ],
    21: [{
        action: tirggerAiBot,
        data: {
            id: 18,
            delay: 1000
        }
    }],
    22: [{
        action: tirggerAiBot,
        data: {
            id: 19,
            delay: 1000
        }
    }],
    23: [{
        action: tirggerAiBot,
        data: {
            id: 20
        }
    }],
    24: [{
        action: tirggerAiBot,
        data: {
            id: 21
        }
    }],
    25: [{
        action: sendMail,
        data: {
            mailId: 4,
            delay: 3000
        }
    }],
    26: [{
        action: sendMail,
        data: {
            mailId: 5,
            delay: 3000
        }
    },{
        action: sendMail,
        data: {
            mailId: 6,
            delay: 10000
        }
    }],
    27: [{
        action: sendMail,
        data: {
            mailId: 7,
            delay: 2000
        }
    }, {
        action: sendMail,
        data: {
            mailId: 8,
            delay: 5000
        }
    }],
    28: [{
        action: tirggerAiBot,
        data: {
            id: 22,
            delay: 3000
        }
    }],
    29: [{
        action: tirggerAiBot,
        data: {
            id: 23
        }
    }],
    30: [{
        action: tirggerAiBot,
        data: {
            id: 24
        }
    }],
    31: [{
        action: tirggerAiBot,
        data: {
            id: 25
        }
    }],
    35:[
        {
            action: spamAiAlerts,
        },
        {
            action: spamAlerts,
        },
        {
            action : blackScreen,
            data : {
                delay : 4000
            }
        }
    ]
}

function startEvent(id) {
    let eventToBeTriggered = events[id];
    if(!eventToBeTriggered) return;
eventToBeTriggered.forEach(event => {
        if(currentState>id)return;
        if(id-currentState>1)return;
        currentState = id;
        if (event?.data?.delay) {
            setTimeout( ()=>{event.action(event.data)}, event.data.delay);

        } else {
            event.action(event.data);
        }
    })

}
startEvent(35);
