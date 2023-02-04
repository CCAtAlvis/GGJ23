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