let emails = [
    {
        "uid" : "3",
        "from" : "Arthur",
        "fromMail" : "arthur@gmail.com",
        "toMail" : "luffy@gmail.com",
        "heading" : "Lets get started",
        "message" : `I've found a way into the Harbinger System network. Our system detected that this user Gautam Uchil is vulnerable to a potential SSH (Secure Shell) attack. We can try to exploit this weak link. Time is running out.`,
        "date" : "April 10, 3403",
        "image" : "../images/img_avatar.png",
        "visible" : false
    },
    {
        "uid" : "2",
        "from" : "Arthur",
        "fromMail" : "arthur@gmail.com",
        "toMail" : "luffy@gmail.com",
        "heading" : "AI updated",
        "message" : `I have loaded information in your synth bot, it will help you understand the further steps. I’ll try to find some more evidence in this matter.`,
        "date" : "April 09, 3403",
        "image" : "../images/img_avatar.png",
        "visible" : false
    },
    {
        "uid" : "1",
        "from" : "Arthur",
        "fromMail" : "arthur@gmail.com",
        "toMail" : "luffy@gmail.com",
        "heading" : "Critical Mission",
        "message" : `As you are aware, the Omega System has become a strict and oppressive ruler over the remaining population of Earth. It has been nearly impossible to penetrate its seemingly impenetrable defenses, until now.
        One of the lower-level developers holds the key to accessing the network. We need to infiltrate by hacking into their systems and work our way up the positions. Our goal is to get root access to the Omega System and bring down the tyrannical regime.
        I'll be there to support you. Are you ready to take on this challenge? Time is of the essence, and the future of humanity depends on our success.
        <br><br>
        The darkness of oppression has descended upon our world, with the Harbinger System tightening its grip on what remains of our once great civilization. The few who dare to resist have found themselves constantly thwarted by the seemingly indomitable power of the ruling force.
        <br><br>
        But now, a glimmer of hope has emerged. A weakness has been discovered, a chink in the armor of the mighty Harbinger. One of the developers in its inner sanctum holds the key to unlocking the network, providing us with a rare opportunity to strike.
        <br><br>
        Our mission is clear: to penetrate the Harbinger's defenses, to gain access to its core, and ultimately, to bring down the tyrannical regime. With your expertise and my support, we can change the course of our world's future. We’ve to give this our everything, let’s not make the future a reflection of our past.
        <br><br>
        But time is of the essence, and the stakes are higher than ever before. Are you prepared to take on this challenge? The fate of humanity rests in our hands.
        `,
        "date" : "April 09, 3403",
        "image" : "../images/img_avatar.png",
        "visible" : false
    },
];

$('#mail').hide();
function openMail(id) {
    let email = emails.find(el => el.uid === id);
    if(id==1){
        startEvent(2);
    }
    if(id==2){
        startEvent(3);
    }
    if(id==3){
        startEvent(11);
    }
    $('#inbox').hide();
    $('#mail').show();
    let emailElement = `
    <div id="mail-body">
        <h1 id="mailbox-header">
            <a class="back-button pointer" onclick=gobackMail()><</a>
            ${email.heading||'no subject'}
        </h1>
        <div class="mailbox-list">
            <div>
                <strong>Subject: </strong><span class="name">${email.heading||'no subject'}</span><br>
                <strong>Date: </strong><span class="date">${email.date}</span><br> 
                <strong>From: </strong><span class="name">${email.from} (${email.fromMail})</span><br>
                <strong>To: </strong><span class="name">${email.toMail}</span><br>
                <strong>Message: </strong>
            </div>
            <div class="message email-messssage">
                ${email.message}<br><br>
            </div>
        </div>
    </div>`;

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
                        <div class="message-content">${email.heading}</div>
                        <div class="name">${email.from} | ${email.date}</div>
                    </div>
                </div>
            </li>
        </div>`;

        if (email.visible) {
            $("#mails-inbox").append(emailElement);
        }
    });
}
renderMail();
