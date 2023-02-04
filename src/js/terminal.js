$(function() {
    const term = $('#terminal').terminal(function (cmd) {
        console.log(cmd);
    });
});

var term = $('#terminal').terminal(function(command, term) {
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
    name: 'js_demo',
    exit: false,
    // detect iframe codepen preview
    enabled: $('body').attr('onload') === undefined,
    onInit: function() {
        this.clear();
        this.echo('Type [[b;#fff;]exit] to see turn off animation.');
    },
    onClear: function() {
    },
    prompt: 'js> '
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
