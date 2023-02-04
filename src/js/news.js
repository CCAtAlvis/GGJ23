let news;
$('#news').hide();
$.getJSON("../data/mail.json", function (data) {
    news = data;
    data.forEach(email => {
        let emailElement = `
        <div class="pointer">
            <li class="message inherit-pointer" id="${email.uid}" onclick=openMail(this.id)>
               
                <div>
                    <div>${email.heading}</div>
                    <div class="date">${email.date}</div>
                    <div class="name">${email.from}</div>
                  </div>
            </li>
        </div>
    `
        if (email.visible) {
            $("#news-listing").append(emailElement);
        }
    });

});

function openMail(id) {
    let singleNews = news.find(el => el.uid === id);
    $('#news-container').hide();
    $('#news').show();
    let newsElement = `
    <div id="news-body">
        <h1 id="mailbox-header" >
            <a class="back-button" onclick=goback()><</a>
            ${singleNews.heading}
        </h1>
        <div class="mailbox-list">
            <div>
            <strong>Heading:</storng>
            <div class="name">${singleNews.heading}</div>
            <strong>Date:</storng>
            <div class="date">${singleNews.date}</div> 
            <strong>From:</storng>
            <div class="name">${singleNews.fromMail}</div>
            <strong>To:</storng>
            <div class="name">${singleNews.toMail}</div>
            </div>
            <strong>Message:</storng>
            <li class="message email-messssage">
                ${singleNews.message}
            </li>
        </div>
    </div>
    `

    $("#news").append(newsElement);
}

function goback() {
    $("#news-body").remove();
    $('#news-container').show();
    $('#news').hide();
}
