const aiBotTexts = {
    1: 'Lets start with opening the terminal',
    2: 'Try printing the current directory(Use help for help)',
    3: 'Try printing the files in current directory(Use help for help)',
    4: 'Try changing the directory of the filesystem',
    5: 'Try connecting to this remote ip - 186.255.190.185 user - root',
    6: 'Try finding the username of the owner'
};

const aiBotBox = document.querySelector("#ai-container .box");
const aiBottextContainer = document.querySelector("#ai-container .box__content");

function tirggerAiBot(data) {
    aiBotBox.style.display = 'block';
    aiBottextContainer.textContent = aiBotTexts[data.id];
<<<<<<< HEAD
}
=======
}
>>>>>>> 51b912a45551f2785f18a126a0b9e6f096feb830
