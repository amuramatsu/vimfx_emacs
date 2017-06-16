// Don't let tabs steal focus from normal mode
vimfx.set('prevent_autofocus', true);

// Keybindings!
let map = (shortcuts, command, dup='', custom=false) => {
    var cmd = `${custom ? 'custom.' : ''}mode.normal.${command}`;
    if (dup !== '') {
	var func;
	if (custom) {
	    func = custom.mode.normal[command].run
	}
	else {
	    func = vimfx.modes.normal.commands[command].run
	}
	vimfx.addCommand({
	    name: `${command}_${dup}`,
	    description: `Duplicated command of ${command}`
	}, func);
	cmd = `custom.mode.normal.${command}_${dup}`;
    }
    vimfx.set(cmd, shortcuts);
}

map('<c-v>', 'scroll_half_page_down');
map('<a-v>', 'scroll_half_page_up');
map('<c-n>', 'scroll_down');
map('<c-p>', 'scroll_up');
map('<', 'scroll_to_top');
map('>', 'scroll_to_bottom');
map('g', 'reload');
map('G', 'reload_force');
map('R', 'enter_reader_view');
map('l', 'history_back');
map('r', 'history_forward');
map('q', 'tab_close');
map('w', 'copy_current_url');
map(',', 'tab_select_previous');
map('.', 'tab_select_next');
map('b', 'scroll_page_up');

// alias keys
map('<c-s>', 'find', 'a');
map('<m-,>', 'tab_select_previous', 'a');
map('<m-.>', 'tab_select_next', 'a');
map('j', 'scroll_down', 'a');
map('k', 'scroll_up', 'a');

