let emails = [
    {
        "uid" : "1",
        "from" : "Unknown",
        "fromMail" : "unknown@xyz.com",
        "toMail" : "synthai@gmail.com",
        "heading" : "Don't click on this mail....",
        "message" : "As Expected you have clicked on this mail. Well as you have clicked on this mail let me help you with your goal.I came across this IP address - 186.255.190.185 try to find out the owner of the IP by doing this you will be one step closer to your target.",
        "date" : "Mar 5",
        "image" : "../images/img_avatar.png",
        "visible" : true
    }
]
;
$('#mail').hide();
function openMail(id) {
    let email = emails.find(el => el.uid === id);
    $('#inbox').hide();
    $('#mail').show();
    let emailElement = `
    <div id="mail-body">
        <h1 id="mailbox-header" >
            <a class="back-button pointer" onclick=gobackMail()><</a>
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
}

function gobackMail() {
    $("#mail-body").remove();
    $('#inbox').show();
    $('#mail').hide();
}

function renderMail(){
    $("#mails-inbox").empty();
    emails.forEach(email => {
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
}
renderMail();