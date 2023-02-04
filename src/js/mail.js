let emails;
$('#mail').hide();
$.getJSON("../data/mail.json", function (data) {
    emails = data;
    data.forEach(email => {
        let emailElement = `
        <div class="pointer">
            <li class="message inherit-pointer" id="${email.uid}" onclick=openMail(this.id)>
                <div class="mail-grid inherit-pointer">
                <img class="inherit-pointer" src="${email.image}" alt="Avatar">
                <div>
                    <div class="date">${email.date}</div>
                    <div class="name">${email.from}</div>
                    <div class="message-content">
                    ${email.heading}
                    </div>
                </div>
                </div>
            </li>
        </div>
    `
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
            <strong>Heading:</storng>
            <div class="name">${email.heading}</div>
            <strong>Date:</storng>
            <div class="date">${email.date}</div> 
            <strong>From:</storng>
            <div class="name">${email.fromMail}</div>
            <strong>To:</storng>
            <div class="name">${email.toMail}</div>
            </div>
            <strong>Message:</storng>
            <li class="message email-messssage">
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