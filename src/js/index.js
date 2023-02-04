windowsList = ["window-mail", "window-help", "window-profile" , "window-news"]

// Function to toggle window based on dev id
function showWindow(windowId) {
    $('#' + windowId).toggle();
    var ht = Math.floor(Math.random() * (screen.height - 500)) + 100; // -500 so that it doesnt spawn half outside, and +100 as offset to see the logos
    var w = Math.floor(Math.random() * (screen.width - 500)) + 100;
    $("#" + windowId).css({ top: ht, left: w, position: 'absolute' });
}


for (i = 0; i < windowsList.length; i++) {
    currWindow = windowsList[i];
    // Hide all windows on load
    $("#" + currWindow).hide();
    // Spawn all windows in random locations
    var ht = Math.floor(Math.random() * (screen.height - 500)) + 100; // -500 so that it doesnt spawn half outside, and +100 as offset to see the logos
    var w = Math.floor(Math.random() * (screen.width - 500)) + 100;
    $("#" + currWindow).css({ top: ht, left: w, position: 'absolute' });
}
