const terminalGreeting = document.querySelector("#terminal-greetings");
const scanlines = $('.scanlines');
const terminalWindow = $('#terminal');

var term = terminalWindow.terminal(function(command, term) {
    var cmd = $.terminal.parse_command(command);
    if (cmd.name === 'exit') {
        console.log(term.get_prompt()=="SynthOS> ",term.get_prompt(),"SynthOS> ")
       if(term.get_prompt()=="SynthOS> "){
            exitTerminal();
       }else{
            term.set_prompt("SynthOS> ");
       }
       
    } else if (cmd.name === 'echo') {
        term.echo(cmd.rest);
    } else if (command !== '') {
        try {
            processCommands(cmd);
        } catch(e) {
            term.error(new String(e));
        }
    }
}, {
    greetings: terminalGreeting.innerHTML,
    name: 'js_demo',
    exit: false,
    // detect iframe codepen preview
    enabled: $('body').attr('onload') === undefined,
    onInit: function() {
        this.echo('Type [[b;#fff;]exit] to see turn off animation.');

        console.log( terminalWindow.height());
        console.log( terminalWindow.width());

        scanlines[0].style.setProperty("height", terminalWindow.height());
        scanlines[0].style.setProperty("width", terminalWindow.width());
    },
    onClear: function() {
    },
    prompt: 'SynthOS> '
});

// for codepen preview
if (!term.enabled()) {
    term.find('.cursor').addClass('blink');
}

function tree(obj) {
    term.echo(treeify.asTree(obj, true, true));
}

function clear() {
    term.clear();
}