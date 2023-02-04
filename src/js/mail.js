let emails;
$('#mail').hide();
$.getJSON("../data/mail.json", function (data) {
    emails = data;
    data.forEach(email => {
        let emailElement = `<li class="message" id="${email.uid}" onclick=openMail(this.id)>
    <div class="mail-grid">
        <img src="${email.image}" alt="Avatar">
        <div>
            <div class="date">${email.date}</div>
            <div class="name">${email.from}</div>
            <div class="message-content">
               ${email.heading}
            </div>
        </div>
    </div>
    </li>`
        if (email.visible) {
            $("#mails-inbox").append(emailElement);
        }
    });

});

function openMail(id) {
    let email = emails.find(el => el.uid === id);
    $('#inbox').hide();
    $('#mail').show();
    let emailElement = `
    <div id="mail-body">
    <h1 id="mailbox-header" >
    <a class="back-button" onclick=goback()><</a>
    ${email.heading}
    </h1>
        <div class="mailbox-list">
            <div>
                <div class="date">${email.date}</div>
                <div class="name">${email.from}</div>
            </div>
            <li class="message">
                ${email.message}
            </li>
        </div>
    </div>
    `

    $("#mail").append(emailElement);
    console.log(email);
}

function goback() {
    $("#mail-body").remove();
    $('#inbox').show();
    $('#mail').hide();
}