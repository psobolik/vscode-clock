# Clock for Visual Studio Code
Shows clock in status bar in Visual Studio Code, even in full screen mode.

![Demo showing clock in status bar](https://raw.githubusercontent.com/compulim/vscode-clock/master/demo.png)

## Usage
When this extension is installed, Visual Studio Code will display a clock in the lower right hand corner of the status bar.

## Settings
The following settings are supported by this extension. (`File > Preferences > Settings`)
  *	`"clock.dateFormat": "<format string>"`
    * Where `<format string>` describes how the date is formatted for display.
    See https://github.com/felixge/node-dateformat for details.
    * Default: `"hh:MM TT"`
  *	`"clock.dateInterval": <interval>`
    * Where `<interval>` indicates how often the clock is updated, in milliseconds.
    * Default: ```1000``` (one second)
  *	```"clock.color": "<color string>"```
    * Where `<color string>` specifies the foreground color for the clock. May be an HTML color code (`"#ffff00"`) or name (`"Yellow"`), or a Visual Studio Code "ThemeColor" (`"statusBar.foreground"`).
    * Default: `"statusBar.foreground"`

To insert the clock into the selection, you can either click on the clock on status bar, or use the Command Palette.
* Bring up Command Palette (`F1`, or `Ctrl+Shift+P` on Windows and Linux, or `Shift+CMD+P` on OSX)
* Type or select "Clock: Insert date and time"

You can also modify keyboard shortcut with JSON below.
```
{
  "key": "ctrl+shift+f5",
  "command": "clock.insertDateTime",
  "when": "editorTextFocus"
}
```

## Change log
* 0.0.1 (2016-02-24): First public release
* 0.1.0 (2019-02-16): Made color and interval configurable

## Contributions
Love this extension? [Star](https://github.com/compulim/vscode-clock/stargazers) us!

Want to make this extension even more awesome? [Send us your wish](https://github.com/compulim/vscode-clock/issues/new/).

Hate how it is working? [File an issue](https://github.com/compulim/vscode-clock/issues/new/) to us.
