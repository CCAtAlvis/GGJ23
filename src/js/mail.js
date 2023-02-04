let emails = [
    {
        "uid" : "1",
        "from" : "Arthur",
        "fromMail" : "arthur@gmail.com",
        "toMail" : "lufi@gmail.com",
        "heading" : "Critical Mission",
        "message" : `As you are aware, the Omega System has become a strict and oppressive ruler over the remaining population of Earth. It has been nearly impossible to penetrate its seemingly impenetrable defenses, until now.
        One of the lower-level developers holds the key to accessing the network. We need to infiltrate by hacking into their systems and work our way up the positions. Our goal is to get root access to the Omega System and bring down the tyrannical regime.
        I'll be there to support you. Are you ready to take on this challenge? Time is of the essence, and the future of humanity depends on our success.
        
        The darkness of oppression has descended upon our world, with the Harbinger System tightening its grip on what remains of our once great civilization. The few who dare to resist have found themselves constantly thwarted by the seemingly indomitable power of the ruling force.
        
        But now, a glimmer of hope has emerged. A weakness has been discovered, a chink in the armor of the mighty Harbinger. One of the developers in its inner sanctum holds the key to unlocking the network, providing us with a rare opportunity to strike.
        
        Our mission is clear: to penetrate the Harbinger's defenses, to gain access to its core, and ultimately, to bring down the tyrannical regime. With your expertise and my support, we can change the course of our world's future. We’ve to give this our everything, let’s not make the future a reflection of our past.
        
        But time is of the essence, and the stakes are higher than ever before. Are you prepared to take on this challenge? The fate of humanity rests in our hands.
        `,
        "date" : "April 09, 3403",
        "image" : "../images/img_avatar.png",
        "visible" : false
    },
    {
        "uid" : "2",
        "from" : "Arthur",
        "fromMail" : "arthur@gmail.com",
        "toMail" : "lufi@gmail.com",
        "heading" : "Weak link",
        "message" : `I've found a way into the Omega System network. The IP 186.255.190.185 is vulnerable and can be accessed without a password. Time is running out.`,
        "date" : "April 09, 3403",
        "image" : "../images/img_avatar.png",
        "visible" : false
    },
]
;
$('#mail').hide();
function openMail(id) {
    let email = emails.find(el => el.uid === id);
    if(id==1){
        startEvent(2);
    }
    if(id==2){
        startEvent(3);
    }
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
