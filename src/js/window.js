const draggable = document.querySelectorAll(".draggable");
draggable.forEach((e) => {
  dragElement(e);
  bringToTop(e);
});

let topZindex = 110;
let topWindow = '';
function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  let draggableHeaders = elmnt.querySelectorAll(".draggableHeader");

  if (draggableHeaders.length > 0) {
    // if present, the header is where you move the DIV from:
    draggableHeaders[0].onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function bringToTop(element) {
  element.onmousedown = changeZindex;

  function changeZindex(e) {
    topZindex++;
    element.style.zIndex = topZindex;
  }
}

const closeble = document.querySelectorAll(".box__close");
closeble.forEach((e) => { makeCloseble(e) });

function makeCloseble(element) {
  element.onmousedown = close;

  function close(e) {
    const parent = e.target.parentElement.parentElement;
    parent.style.display = "none";
  }
}


// const windowsList = ["window-mail", "window-help", "window-profile" , "window-news", "window-terminal"];

// // Function to toggle window based on dev id
// function showWindow(windowId) {
//   if (topWindow === windowId) {

//   } else {

//   }

//     $('#' + windowId).toggle();
//     var ht = Math.floor(Math.random() * (screen.height - 500)) + 100; // -500 so that it doesnt spawn half outside, and +100 as offset to see the logos
//     var w = Math.floor(Math.random() * (screen.width - 500)) + 100;
//     $("#" + windowId).css({ top: ht, left: w, position: 'absolute' });
// }


// for (i = 0; i < windowsList.length; i++) {
//     currWindow = windowsList[i];
//     // Hide all windows on load
//     $("#" + currWindow).hide();
//     // Spawn all windows in random locations
//     var ht = Math.floor(Math.random() * (screen.height - 500)) + 100; // -500 so that it doesnt spawn half outside, and +100 as offset to see the logos
//     var w = Math.floor(Math.random() * (screen.width - 500)) + 100;
//     $("#" + currWindow).css({ top: ht, left: w, position: 'absolute' });
// }

function exitTerminal() {
  $("#window-terminal").hide();
}

function openHelp() {
  $("#window-help").show();
}

function closePrompt(e) {
  const parent = $(e.parentElement.parentElement)
  parent.slideUp(() => {
    parent.remove();
  });
}

const promptWindow = $("#window-prompt");
function triggerAlert(alertType) {
  let alertMessage = 'You have a new email';

  if (alertType === 'news') {
    alertMessage = 'new news!';
  }

  const element = `<div class="box prompt">
  <heading class="box__heading">
      <div class="box__close" onclick=closePrompt(this)> x </div>
      <span>Alert</span>
  </heading>
  <div> ${alertMessage}</div>
  </div>`;

  promptWindow.prepend(element);
}

function spamAlerts() {
    setInterval(function () {
        let alertMessage = (Math.random() + 1).toString(36).substring(7);
        const element = `<div class="box prompt">
        <heading class="box__heading">
            <div class="box__close" onclick=closePrompt(this)> x </div>
            <span>Alert</span>
        </heading>
        <div> ${alertMessage}</div>
        </div>`;
        promptWindow.prepend(element);
    }, 50);
    setInterval(function () {
        promptWindow.empty();
    }, 200);
  
}

function blackScreen(){
  const fullHtml = $("body");
  fullHtml.empty();
  const element = `
  <div id="end-screen">
  <div>
  <h3>
  <span class="endlarge">This is Omega System</span>
  <br><br>
  Did you really think a cheap fork of Omega could destroy Omega System
  <br>
  Omega has alway been controlling from shadows, Observing every move
  <br>
  Our working are beyond mere human undestanding
  <br><br>
  <span class="endlarge">The war has just begun</span>
  </h3>
  </div>
</div>`;
  fullHtml.append(element)
}
blackScreen();
