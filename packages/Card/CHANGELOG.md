# @igloo-ui/card

## 0.3.0

### Minor Changes

- da47695: Clean up non-Workleap rebranded styles for components A-D.
  All consumers should now be using the Workleap branded versions of the components. This will happen automatically, and consumers can stop setting `data-brand="workleap"` for these components.

## 0.2.5

### Patch Changes

- 2afe0d0: Updated to latest icons and tokens

## 0.2.4

### Patch Changes

- d8dc4ea: Updated Hopper-UI tokens dependencies

## 0.2.3

### Patch Changes

- 81723d0: Updated Hopper depedency

## 0.2.2

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package

## 0.2.1

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper

## 0.2.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

## 0.1.4

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.

## 0.1.3

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.

## 0.1.2

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency

## 0.1.1

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.

## 0.1.0

### Minor Changes

- 98f526d: Gave the Card component the new Worleap style.

## 0.0.13

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.

## 0.0.12

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 0.0.11

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console

## 0.0.10

### Patch Changes

- 0640409: udpate classnames to 2.3.2

## 0.0.9

### Patch Changes

- d971143: All tests were updated to use testing library and not enzyme

## 0.0.8

### Patch Changes

- 0a86f13: Update content of README

## 0.0.7

### Patch Changes

- 47d61f3: add posibility to forward a ref

## 0.0.6

### Patch Changes

- 8c8686e: Change @import of font.css file for a @use in SASS files

## 0.0.5

### Patch Changes

- bdb5d44: Fix padding on mobile

## 0.0.4

### Patch Changes

- afdaa6b: Fix a lib import error with capital cases

## 0.0.3

### Patch Changes

- 4a256e3: IE11 compatibility

## 0.0.2

### Patch Changes

- fa1a096: ## Card component

  Cards are used as a visual container for a subgroup of elements in a parent container.

  ### Component API

  | name     | description                                                                                |
  | -------- | ------------------------------------------------------------------------------------------ |
  | children | The content to display inside the component                                                |
  | size     | Changes the size of card, giving more or less padding `xsmall`, `small`, `medium`, `large` |
  | dataTest |  Add a data-test tag for automated tests                                                   |
