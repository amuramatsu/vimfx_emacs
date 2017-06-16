// Don't let tabs steal focus from normal mode
vimfx.set('prevent_autofocus', true);

// Keybindings!
let map = (shortcuts, command, custom=false) => {
    vimfx.set(`${custom ? 'custom.' : ''}mode.normal.${command}`, shortcuts);
}

map('<c-v>', 'scroll_half_page_down');
map('<a-v>', 'scroll_half_page_up');
map('<c-n>', 'scroll_down');
map('<c-p>', 'scroll_up');
map('<', 'scroll_to_top');
map('>', 'scroll_to_bottom');
map('<c-s>', 'find');
map('g', 'reload');
map('G', 'reload_force');
map('R', 'enter_reader_view');
map('l', 'history_back');
map('r', 'history_forward');
map('q', 'tab_close');
map('w', 'copy_current_url');
