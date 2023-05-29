-- user conf

-- settings
local settings = require "settings"
-- settings.webview.zoom_level = 150

-- editor
local editor = require "editor"
editor.editor_cmd = "urxvt -e emacsclient +{line} {file} +{line}"

-- downloads
local downloads = require("downloads")
downloads.default_dir = os.getenv("HOME") .. "/Downloads"

-- follow
local follow = require("follow")
local select = require("select")
-- hint label
select.label_maker = function ()
   local chars = charset("SADFJKLEWCMPGH")
   return trim(sort(reverse(chars)))
end
follow.ignore_case = true

-- key binds (some Emacs like)
local modes = require("modes")
local completion = require("completion")
modes.add_binds(
  "completion", {
    {"<Control-g>", "Stop completion and restore original command.",
     completion.exit_completion },
})
modes.add_binds(
  "insert", {
    {"<Control-q>", "Enter `passthrough` mode, ignores all luakit keybindings.",
     function (w) w:set_mode("passthrough") end },
})
modes.add_binds(
  "passthrough", {
    {"<Control-g>", "Return to `normal` mode.",
     function (w) w:set_prompt(); w:set_mode() end },
})

-- with firefox
function open_ext_browser (w)
  local cmd = 'firefox'
  local uri = w.view.uri or ""
  luakit.spawn(string.format("%s %q", cmd, uri))
end

