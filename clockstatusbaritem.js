'use strict';

const
  clockService = require('./clockservice'),
  dateformat = require('dateformat'),
  vscode = require('vscode');

const DEFAULT_DATE_FORMAT = 'hh:MM TT';
const DEFAULT_CLOCK_COLOR = 'statusBar.foreground';

class StatusBarItem {
  constructor() {
    this._statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, -100);
    this._statusBarItem.command = 'clock.insertDateTime';
    this._statusBarItem.tooltip = 'Click to insert into selection';
    this._statusBarItem.show();

    this._interval = setInterval(() => this.refreshUI(), 1000);

    this._configurationChangeListener = vscode.workspace.onDidChangeConfiguration(((event) => {
      this.configurationChangeHandler(event);
    }).bind(this));

    this.setClockColor();
    this.refreshUI();
  }

  setClockColor() {
    this._statusBarItem.color = vscode.workspace.getConfiguration('clock').color || DEFAULT_CLOCK_COLOR;
  }

  configurationChangeHandler(event) {
    if (event.affectsConfiguration('clock.color')) {
      this.setClockColor();
    }
  }

  dispose() {
    this._configurationChangeListener.dispose();
    this._statusBarItem.dispose();
    clearInterval(this._interval);
  }

  refreshUI() {
    this._statusBarItem.text = clockService();
  }
}

module.exports = StatusBarItem;
