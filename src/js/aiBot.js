const aiBotTexts = {
    1: 'Well lets try to connect to the ip present in the mail seems like a solid lead',
    2: 'some more text goes here'
};

const aiBotBox = document.querySelector("#ai-container .box");
const aiBottextContainer = document.querySelector("#ai-container .box__content");

function tirggerAiBot(data) {
    aiBotBox.style.display = 'block';
    aiBottextContainer.textContent = aiBotTexts[data.id];
}
tirggerAiBot(1);