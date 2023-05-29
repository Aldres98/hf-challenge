# Challenge

## Custom Checkbox Challenge

Features:

- Styled custom checkbox with provided SVG check mark.
- Synchronization between the native and custom checkbox, i.e., when one is checked/unchecked, the other follows.
- Keyboard navigation, including focus via tab and selection with spacebar.
- Synchronization between focused state (when native checkbox is focused -> custom gets a "focused" appearance as well) .

To view the result, open `checkbox/index.html` in chrome (haven't tested other browsers that much, and for input elements it can be a whole different story).

## JSON Explorer Challenge

Features:

- Renders JSON data with proper formatting and styling.
- Keys are interactive and highlighted on mouse over.
- Clicking a key returns its path in the JSON data.
- Clicking a key, or typing it yourself into the input field, returns a value of the property at this path (e.g. fields.0.test.someNumber -> 123)
- Works with nested JSON data, including arrays and objects.

### How to start it
- Go to jsonExplorer directory and:

### `npm install`

### `npm run dev`
