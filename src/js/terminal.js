const terminalGreeting = document.querySelector("#terminal-greetings");
const scanlines = $('.scanlines');
const terminalWindow = $('#terminal');

var term = terminalWindow.terminal(function(command, term) {
    var cmd = $.terminal.parse_command(command);

    if (cmd.name === 'exit') {
        exit();
    } else if (cmd.name === 'echo') {
        term.echo(cmd.rest);
    } else if (command !== '') {
        try {
            var result = "__EVAL(command)";
            if (result && result instanceof $.fn.init) {
                term.echo('<#jQuery>');
            } else if (result && typeof result === 'object') {
                tree(result);
            } else if (result !== undefined) {
                term.echo(new String(result));
            }
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
        this.echo('[[i;#fff;]the next gen synth os]');
        this.echo('Type [[b;#fff;]exit] to see turn off animation.');

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
