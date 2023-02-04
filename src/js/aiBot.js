const aiBotTexts = {
    1: 'some random text',
    2: 'some more text goes here'
};

const aiBotBox = document.querySelector("#ai-container .box");
const aiBottextContainer = document.querySelector("#ai-container .box__content");

function tirggerAiBot(index) {
    aiBotBox.style.display = 'block';
    aiBottextContainer.textContent = aiBotTexts[index];
}
