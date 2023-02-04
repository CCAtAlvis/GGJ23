windowsList = ["window-mail", "window-help", "window-profile"]

// Function to show window based on dev id
function showWindow(windowId) {
    $('#' + windowId).show();
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
