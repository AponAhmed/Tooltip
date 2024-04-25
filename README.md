# Tooltip Class

The Tooltip class is designed to create and display tooltips on HTML elements.

## Installation

```bash
      npm i @aponahmed/tooltip --save-dev
```

## Usage

1. Import the Tooltip class and its associated styles:
2. 
   ```javascript
   import Tooltip from "./Tooltip";

   ```

3. Create an instance of the Tooltip class:

   ```javascript
   const tooltip = new Tooltip({
       item: document.getElementById('tooltip-trigger'), // HTML element triggering the tooltip
       position: 'right', // Tooltip position (optional, default is 'right')
       text: 'Tooltip Content', // Tooltip text content (optional, default is false)
       bg: '#1a1f30', // Tooltip background color (optional, default is '#1a1f30')
       color: '#fff' // Tooltip text color (optional, default is '#fff')
   });
   ```

   Alternatively, you can use the `all` method to apply tooltips to multiple elements with a common class:

   ```javascript
   tooltip.all(".tooltip");
   ```

## Properties

- `item`: HTML element triggering the tooltip.
- `position`: Position of the tooltip relative to the triggering element ('right', 'left', 'top', 'bottom').
- `text`: Tooltip content text.
- `bg`: Background color of the tooltip.
- `color`: Text color of the tooltip.
- `extraMargin`: Extra margin applied to the tooltip position.

## Methods

- `init()`: Initializes the tooltip and sets up event listeners.
- `removeTooltip()`: Removes the tooltip from the DOM.
- `positionSet(item)`: Sets the position of the tooltip based on the specified or default position.
- `colorSet(item)`: Sets the background color of the tooltip based on the specified or default color.
- `showTooltip(item, e)`: Displays the tooltip for the specified item and event.
