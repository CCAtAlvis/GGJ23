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
    ]

}

function startEvent(id) {
    let eventToBeTriggered = events[id];

    eventToBeTriggered.forEach(event => {
        if(event.isDone)return;
        event.isDone = true;
        if (event?.data?.delay) {
            setTimeout( ()=>{event.action(event.data)}, event.data.delay);

        } else {
            event.action(event.data);
        }
    })

}