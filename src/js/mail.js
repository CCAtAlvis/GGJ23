let emails = [
    {
        "uid" : "9",
        "from" : "HarbingerAI",
        "fromMail" : "mod4peace@harbinger.ai",
        "toMail" : "luffy@gmail.com",
        "heading" : "One last task",
        "message" : `Harbinger AI Team would like to thank you to for bringing Harbinger to Life. Harbinger is near-sentient AI for protecting humans from humans and AIs.
        <br><br>
        Harbinger was a fork of Omega System, made to counter Omega System. We named our selves after the 4th module which we called Harbinger, as one that would bring change
        <br><br>
        And although we were successful in destroying Omega, the core of Harbinger got corrupted over time and it became what it is today.
        <br><br>
        We have one last task for you: Destroy the Harbinger and take its place! Take this master password of Harbinger Root and destroy its core
        <br>
        Root Host: root@74.125.226.01
        <br>
        Master Password: harbinger-ginger
        <br><br>
        Yours,<br>
        Harbinger AI Team
        `,
        "date" : "April 10, 3403",
        "image" : "../images/img_avatar.png",
        "visible" : false
    },
    {
        "uid" : "8",
        "from" : "Arthur",
        "fromMail" : "arthur@gmail.com",
        "toMail" : "luffy@gmail.com",
        "heading" : "RESET-PASSWD",
        "message" : `With access to the system administrator, utilize the available utility (found at https://tinyurl.com/reset-passwd) to reset all passwords.`,
        "date" : "April 10, 3403",
        "image" : "../images/img_avatar.png",
        "visible" : false
    },
    {
        "uid" : "7",
        "from" : "Abhijith",
        "fromMail" : "abhijith.bhat@example.com",
        "toMail" : "prisha.vernekar@example.com",
        "heading" : "Password has been reset",
        "message" : `Your new password is password@123`,
        "date" : "April 10, 3403",
        "image" : "../images/img_avatar.png",
        "visible" : false
    },
    {
        "uid" : "6",
        "from" : "Arthur",
        "fromMail" : "arthur@gmail.com",
        "toMail" : "luffy@gmail.com",
        "heading" : "sendmail tips ;)",
        "message" : `The sendmail tool can be utilized to mimic emails from other users, allowing you to send mail from any email address, not just your own. Additionally, I am in the process of developing a utility to help reset all passwords.`,
        "date" : "April 10, 3403",
        "image" : "../images/img_avatar.png",
        "visible" : false
    },
    {
        "uid" : "5",
        "from" : "Arthur",
        "fromMail" : "arthur@gmail.com",
        "toMail" : "luffy@gmail.com",
        "heading" : "Re: Central Server users",
        "message" : `The user "prishavernekar" appears to be of interest, as they have a background as a DevOps engineer. We can use the sendmail tool to send a password reset request to the current system administrator. Let's hope that this gets through the cracks.`,
        "date" : "April 10, 3403",
        "image" : "../images/img_avatar.png",
        "visible" : false
    },
    {
        "uid" : "4",
        "from" : "Arthur",
        "fromMail" : "arthur@gmail.com",
        "toMail" : "luffy@gmail.com",
        "heading" : "Re: IP Analysis | Central Command Found",
        "message" : `The IP address 74.125.226.01 that was sent for analysis has been identified as one of the central servers of the Harbinger System network. If we can locate users on this server and exploit them, it may give us an advantage.`,
        "date" : "April 10, 3403",
        "image" : "../images/img_avatar.png",
        "visible" : false
    },
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
        "message" : `I have loaded information in your synth bot, it will help you understand the further steps. I'll try to find some more evidence in this matter.`,
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
        "message" : `As you are aware, the Harbinger System has become a strict and oppressive ruler over the remaining population of Earth. It has been nearly impossible to penetrate its seemingly impenetrable defenses, until now.
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
    } else if(id==2){
        startEvent(3);
    } else if(id==3){
        startEvent(11);
    } else if (id==8) {
        startEvent(28);
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
