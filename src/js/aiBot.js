const aiBotTexts = {
    1: 'Lets start with opening the terminal',
    2: 'Try printing the current directory(Use help for help)',
    3: 'Try printing the files in current directory(Use help for help)',
    4: 'Try changing the directory of the filesystem',
    5: 'Try connecting to this remote ip - 186.255.190.185 user - root',
    6: 'Try finding the username of the owner',
    7: 'Congrats for completing the tutorial please wait while I find some data to start with.',
    8: 'Lets start by finding more info on Gautam Uchil use Profile for it',
    9: 'Well lets try to connect to his system using his mail via ssh',
    10: 'Looks like his pc is password protected lets brute force our way through it lets try someoff the most common passwords',
    11: 'Explore through his pc and find some infomation which might be helpful to us',
    12: 'Looks like we found out next target lets find more info about him'
};

const aiBotBox = document.querySelector("#ai-container .box");
const aiBottextContainer = document.querySelector("#ai-container .box__content");

function tirggerAiBot(data) {
    aiBotBox.style.display = 'block';
    aiBottextContainer.textContent = aiBotTexts[data.id];
}
