# @igloo-ui/filter

## 0.6.0

### Minor Changes

- 08f9a05: Clean up non-Workleap rebranded styles for components E-P.
  All consumers should now be using the Workleap branded versions of the components. This will happen automatically, and consumers can stop setting `data-brand="workleap"` for these components.

## 0.5.0

### Minor Changes

- a7761cd: Updated typings

## 0.4.3

### Patch Changes

- 2afe0d0: Updated to latest icons and tokens

## 0.4.2

### Patch Changes

- d8dc4ea: Updated Hopper-UI tokens dependencies

## 0.4.1

### Patch Changes

- 5f7e49c: Fixed the hover state of selected filter.

## 0.4.0

### Minor Changes

- 7c83d3d: Added pressed states

## 0.3.4

### Patch Changes

- 81723d0: Updated Hopper depedency

## 0.3.3

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package

## 0.3.2

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper

## 0.3.1

### Patch Changes

- 5c4c95e: Fix of filter border color when disabled

## 0.3.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

## 0.2.3

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.

## 0.2.2

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.

## 0.2.1

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency

## 0.2.0

### Minor Changes

- 9739155: Updated storybook and recharts. Applied the new brand look for filter.

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.

## 0.1.4

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.

## 0.1.3

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 0.1.2

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console

## 0.1.1

### Patch Changes

- 0640409: udpate classnames to 2.3.2

## 0.1.0

### Minor Changes

- 2f042c6: Feat: initial release of the filter component
