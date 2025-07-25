# @igloo-ui/disclosure

## 2.0.1

### Patch Changes

- 3e2d9f0: Restore CSS variables accidentally removed during cleanup

## 2.0.0

### Major Changes

- da47695: Clean up non-Workleap rebranded styles for components A-D.
  All consumers should now be using the Workleap branded versions of the components. This will happen automatically, and consumers can stop setting `data-brand="workleap"` for these components.

## 1.2.3

### Patch Changes

- 2afe0d0: Updated to latest icons and tokens

## 1.2.2

### Patch Changes

- d8dc4ea: Updated Hopper-UI tokens dependencies

## 1.2.1

### Patch Changes

- a7e0d52: adjusted the header font size / adjusted the alignment of the arrow

## 1.2.0

### Minor Changes

- 7c83d3d: Added pressed states

## 1.1.4

### Patch Changes

- 81723d0: Updated Hopper depedency

## 1.1.3

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package

## 1.1.2

### Patch Changes

- f2f6d49: Version bump for button 0.8.5

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

- 3944b5f: Fixed Disclosure styles including font sizes, aligment and focus styles.

## 1.0.2

### Patch Changes

- 7d36815: Fixed the disclosure icon alignment.

## 1.0.1

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency

## 1.0.0

### Major Changes

- c981a8b: Separated the controlled and uncontrolled expanded props.

  ## BREAKING CHANGE

  The defaultExpanded prop was added, which means isExpanded may need to be exchanged for this new prop.
  If you use isExpanded to make the disclosure expanded by default, rename it to defaultExpanded.
  If you use isExpanded to open/close the disclosure programmatically, keep isExpanded.
  Rule of thumb: If isExpanded was used without onOpen and onClose, it most likely has to be renamed to defaultExpanded.

## 0.3.1

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.

## 0.3.0

### Minor Changes

- a66541c: Gave the Disclosure component the new Brand

## 0.2.3

### Patch Changes

- 08de993: Updated react-aria packages

## 0.2.2

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.

## 0.2.1

### Patch Changes

- c3efaf5: Fixed tests and snapshots since react-aria generated ids changed and viewBox was added to icons.

## 0.2.0

### Minor Changes

- 210d1a8: Added isLowContrast, onClose and onOpen props. isExpended will now update the open and close state whenever updated.

## 0.1.1

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 0.1.0

### Minor Changes

- d6f1db8: Initial release of disclosure component
