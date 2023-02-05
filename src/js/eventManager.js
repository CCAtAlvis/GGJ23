let sendMail = (data) => {
    //alert
    triggerAlert("mail");
    //enable mail 1
    let foundMail = emails.find(mail => { return mail.uid == data.mailId })
    foundMail.visible = true;
}
let sendNews = (data) => {
    //alert
    triggerAlert("news");
    //enable mail 1
    let foundNews = news.find(singlenews => { return singlenews.uid == data.newsId })
    foundNews.visible = true;
    console.log(foundNews)
}
let currentState = 1;
let events = {
    1: [
        {
            action: sendMail,
            data: {
                mailId: 1,
            }
        },
        {
            action: renderMail
        }
    ],
    2: [
        {
            action: sendMail,
            data: {
                mailId: 2,
                delay : 3000
            }
        },
        {
            action: renderMail,
            data : {
                delay : 3500
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
        },
        {
            action: renderMail,
            data : {
                delay : 6300
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
                id:16
            }
        },
    ],

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