'use strict';

const electron = require('electron');
const { globalShortcut } = electron;

const DEFAULT_SHORTCUT = 'Alt+Down';

let _app, _window, _shortcut,
    _visible = true;

function resizeWindow () {
  const { width } = electron.screen.getPrimaryDisplay().workAreaSize;
  _window.setBounds({
    x: 0, y: 0,
    width, height: 400
  });
}

function onHotkeyActivation () {
  resizeWindow();
  if (_visible) {
    _window.hide();
    _visible = false;
  }
  else {
    _window.show();
    _app.focus();
    _visible = true;
  }
}

exports.onApp = app => {
  _app = app;
};

exports.decorateConfig = (config) => {
  // Unregister the current shortcut
  if (_shortcut && globalShortcut.isRegistered(_shortcut)) {
    globalShortcut.unregister(_shortcut);
  }
  // Update the shortcut from config
  _shortcut = (config.hyperdrop && config.hyperdrop.shortcut) || DEFAULT_SHORTCUT;
  // Register a shortcut listener.
  if (!globalShortcut.register(_shortcut, onHotkeyActivation)) {
    console.log('registration failed');
  }
  return config;
};

exports.onWindow = window => {
  _window = window;
  window.setAlwaysOnTop(true);
  resizeWindow();
};

exports.onUnload = app => {
  // Unregister the shortcut.
  globalShortcut.unregister(_shortcut);
};
