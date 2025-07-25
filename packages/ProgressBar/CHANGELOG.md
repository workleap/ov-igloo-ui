# @igloo-ui/progress-bar

## 2.0.0

### Major Changes

- 08f9a05: Clean up non-Workleap rebranded styles for components E-P.
  All consumers should now be using the Workleap branded versions of the components. This will happen automatically, and consumers can stop setting `data-brand="workleap"` for these components.

## 1.1.5

### Patch Changes

- 2afe0d0: Updated to latest icons and tokens

## 1.1.4

### Patch Changes

- d8dc4ea: Updated Hopper-UI tokens dependencies

## 1.1.3

### Patch Changes

- 81723d0: Updated Hopper depedency

## 1.1.2

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package

## 1.1.1

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper

## 1.1.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

## 1.0.4

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.

## 1.0.3

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.

## 1.0.2

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency

## 1.0.1

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.

## 1.0.0

### Major Changes

- eea3a8c: Gave the ProgressBar component the new Brand

  ### BREAKING CHANGE

  isLowContrast as been removed from the ProgressBar component

## 0.1.2

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 0.1.1

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console

## 0.1.0

### Minor Changes

- 74ce3e3: initial release of ProgressBar
