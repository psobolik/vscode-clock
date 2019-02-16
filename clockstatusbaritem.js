'use strict';

const
  clockService = require('./clockservice'),
  dateformat = require('dateformat'),
  vscode = require('vscode');

const DEFAULT_CLOCK_COLOR = 'statusBar.foreground';
const DEFAULT_CLOCK_INTERVAL = 1000;

class StatusBarItem {
  constructor() {
    this._statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, -100);
    this._statusBarItem.command = 'clock.insertDateTime';
    this._statusBarItem.tooltip = 'Click to insert into selection';
    this._statusBarItem.show();

    this._configurationChangeListener = vscode.workspace.onDidChangeConfiguration(((event) => {
      this.configurationChangeHandler(event);
    }).bind(this));

    this.setClockInterval();
    this.setClockColor();
    this.refreshUI();
  }

  setClockInterval() {
    clearInterval(this._interval);
    this._interval = setInterval(() => this.refreshUI(), vscode.workspace.getConfiguration('clock').clockInterval || DEFAULT_CLOCK_INTERVAL);
  }

  setClockColor() {
    this._statusBarItem.color = vscode.workspace.getConfiguration('clock').color || DEFAULT_CLOCK_COLOR;
  }

  configurationChangeHandler(event) {
    if (event.affectsConfiguration('clock.color')) {
      this.setClockColor();
    }
    if (event.affectsConfiguration('clock.clockInterval')) {
      this.setClockInterval();
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
