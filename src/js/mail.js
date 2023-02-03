let emails;
$.getJSON("../data/mail.json", function (data) {
    $('#mail').hide();
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
        $("#mails-inbox").append(emailElement);
        console.log("hello")
    });

});

function openMail(id) {
    let email = emails.find(el => el.uid === id);
    $('#inbox').hide();
    $('#mail').show();
    let emailElement = `
    <h1 id="mailbox-header" >${email.heading}</h1>
                    <div class="mailbox-list">
                        <div>
                            <div class="date">${email.date}</div>
                            <div class="name">${email.from}</div>
                        </div>
                        <li class="message">
                            ${email.message}
                        </li>
                    </div>`
    $("#mail").append(emailElement);
    console.log(email);
}