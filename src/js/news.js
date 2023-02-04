let news = [
    {
        "uid" : "1",
        "timeToRead" : "5m",
        "heading" : "Long Time No See Long Time No See Long Time No See",
        "message" : "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        "date" : "Mar 5",
        "image" : "../images/money.jpg",
        "visible" : false
    }
];

$('#news').hide();

news.forEach(article => {
    let newsElement = `
    <div class="pointer">
        <li class="message inherit-pointer" id="${article.uid}" onclick=openNews(this.id)>
           
            <div>
                <div>${article.heading}</div>
                <div class="date">${article.timeToRead}</div>
                <div class="date">${article.date}</div>
              </div>
        </li>
    </div>`;

    if (article.visible) {
        $("#news-listing").append(newsElement);
    }
});

function openNews(id) {
    let singleNews = news.find(el => el.uid === id);
    $('#news-container').hide();
    $('#news').show();
    let newsElement = `
    <div id="news-body">
        <h1 id="mailbox-header" >
            <a class="back-button" onclick=gobackNews()><</a>
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

function gobackNews() {
    $("#news-body").remove();
    $('#news-container').show();
    $('#news').hide();
}


function renderNews(){
    $("#news-listing").empty();
    news.forEach(email => {
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
}
renderNews();