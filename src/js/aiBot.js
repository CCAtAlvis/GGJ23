const aiBotTexts = {
    1: 'Lets start with opening the terminal',
    2: 'Try printing the current directory(Use help for help)',
    3: 'Try printing the files in current directory(Use help for help)',
    4: 'Try changing the directory of the filesystem',
    5: 'Try connecting to this remote ip - 186.255.190.185 user - root',
    6: 'Try finding the username of the owner',
    7: 'Congrats for completing the tutorial please wait while I find some data to start with.',
    8: 'Lets start by finding more info on Gautam Uchil use Profile for it',
    9: 'Well lets try to connect to his system using his mail via SSH',
    10: 'Looks like his pc is password protected lets brute force our way through it lets try some of the most common passwords',
    11: 'Explore through his pc and find some information which might be helpful to us',
    12: 'Looks like we found out next target lets find more info about him',
    13: 'Lets do the same process for him again to connect to SSH',
    14: 'In the past, adherence to important security protocols was not as stringent as it is now. It would be worthwhile to investigate the user\'s profile for additional information and insights.',
    15: 'Time to explore, lets check their bin',
    16: 'It looks like module1.ai will complement me, can you please wget it?',
    17: 'I feel upgraded! We can still explore more, how about checking their sent mails',
    18: '"concerning" it doesnt sound too good, lets explore more!',
    19: 'Lets explore the insecured accounts and see if we can get some info',
    20: 'Always be on outlook for notes!',
    21: 'NETINFO',
    22: 'Do you really think wputting this can really bring down Harbinger System?!!',
    23: 'See I told you it wont be able to! Ohhh... It seems like we did really crack most of the passwords. Lets try accessing aayushi.ramesh@example.com',
    24: 'I sense something deep in the bin, you know the drill if you found something, i am going on a break till then',
    25: 'These weren\'t as good upgrades as I was expected them to be. Can you do any better?!',
    26: 'module3.ai.test... lets try to track down author for this test',
    27: 'Finally found all 3 modules!! But it still feels like a piece is missing',
    28: 'Processing...',
    29: 'Installing Module...',
    30: 'Gainig ROOT Access...',
    31: 'Assuming Control...',
    32: 'Harbinger Activated.',

    // 18: 'These users might have never reset the passwords.'
};

const aiBotBox = document.querySelector("#ai-container .box");
const aiBottextContainer = document.querySelector("#ai-container .box__content");

function tirggerAiBot(data) {
    aiBotBox.style.display = 'block';
    aiBottextContainer.textContent = aiBotTexts[data.id];
}
