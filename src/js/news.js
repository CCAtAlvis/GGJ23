let news;
$('#news').hide();
$.getJSON("../data/news.json", function (data) {
    news = data;
    data.forEach(email => {
        let emailElement = `
        <div class="pointer">
            <li class="message inherit-pointer" id="${email.uid}" onclick=openNews(this.id)>
               
                <div>
                    <div>${email.heading}</div>
                    <div class="date">${email.timeToRead}</div>
                    <div class="date">${email.date}</div>
                  </div>
            </li>
        </div>
    `
        if (email.visible) {
            $("#news-listing").append(emailElement);
        }
    });

});

function openNews(id) {
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
            <img src="${singleNews.image}" class="news-img" width="500" height="800"> 
            </div>
            <li class="message news-messssage">
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
