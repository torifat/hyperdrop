# HyperDrop

Drop-down support for [HyperTerm](https://hyperterm.org/).

## Installation

Add `'hyperdrop'` to the `plugins` field in `~/.hyperterm.js`.

## Usage

Default shortcut is `Alt + Down`.

To change it add a `config.hyperdrop.shortcut` field in your `~/.hyperterm.js` file. e.g.-

```js
modules.exports = {
  config: {
    // other config...
    hyperdrop: {
      shortcut: 'CommandOrControl+Down'
    },
  },
  // ...
};
```

Follow [Electron Accelerator](https://github.com/electron/electron/blob/master/docs/api/accelerator.md) docs for `shortcut` value.

## Known Issues

- Multiple window scenario
