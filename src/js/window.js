const draggable = document.querySelectorAll(".draggable");
draggable.forEach((e) => { 
  dragElement(e);
  bringToTop(e);
});

let topZindex = 110;
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

function exitTerminal(){
  $("#window-terminal").hide();
}