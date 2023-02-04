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
                mailId: 1
            }
        },
        {
            action: renderMail
        }
    ],
    2: [
        {
            action: sendNews,
            data: {
                newsId: 1
            }
        },
        {
            action: renderNews
        }
    ]

}
function startEvent(id) {
    let eventToBeTriggered = events[id];
    
    eventToBeTriggered.forEach(event=>{
        event.action(event.data);
    })
    
}