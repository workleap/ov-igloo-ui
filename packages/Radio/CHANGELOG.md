# @igloo-ui/radio

## 0.4.0

### Minor Changes

- 85a8ac9: Clean up non-Workleap rebranded styles for components Q-Z.
  All consumers should now be using the Workleap branded versions of the components. This will happen automatically, and consumers can stop setting `data-brand="workleap"` for these components.

## 0.3.2

### Patch Changes

- 2afe0d0: Updated to latest icons and tokens

## 0.3.1

### Patch Changes

- d8dc4ea: Updated Hopper-UI tokens dependencies

## 0.3.0

### Minor Changes

- 7c83d3d: Added pressed state to components that needed it / fixed focus style for fields

## 0.2.5

### Patch Changes

- 81723d0: Updated Hopper depedency

## 0.2.4

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package

## 0.2.3

### Patch Changes

- 7ffde7b: Fixed conflicting css between checkbox and radio. Also fixed cursor styles for checkbox and radio.

## 0.2.2

### Patch Changes

- 72417d0: Small Radio font-size was not being applied

## 0.2.1

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper

## 0.2.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

## 0.1.17

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.

## 0.1.16

### Patch Changes

- 736a1b5: Fixed checkbox and radio by ensuring the box-sizing is set on the container and all its children. Also fixed line-height and positioning.

## 0.1.15

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.

## 0.1.14

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency

## 0.1.13

### Patch Changes

- 812546b: fix the problem of displaying the hover of a selected radio

## 0.1.12

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.

## 0.1.11

### Patch Changes

- c226be8: Applied the new style to the component.

## 0.1.10

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.

## 0.1.9

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 0.1.8

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console

## 0.1.7

### Patch Changes

- 0640409: udpate classnames to 2.3.2

## 0.1.6

### Patch Changes

- d971143: All tests were updated to use testing library and not enzyme

## 0.1.5

### Patch Changes

- 0a86f13: Update content of README

## 0.1.4

### Patch Changes

- 3d10593: fix position of radio button with long content and the size in small space

## 0.1.3

### Patch Changes

- 8c8686e: Change @import of font.css file for a @use in SASS files

## 0.1.2

### Patch Changes

- dd88c10: fix error of onChange not working

## 0.1.1

### Patch Changes

- b08048d: change disabled status color

## 0.1.0

### Minor Changes

- dd1d3c3: Initial release
