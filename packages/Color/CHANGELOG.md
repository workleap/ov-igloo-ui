# @igloo-ui/color

## 0.6.0

### Minor Changes

- da47695: Clean up non-Workleap rebranded styles for components A-D.
  All consumers should now be using the Workleap branded versions of the components. This will happen automatically, and consumers can stop setting `data-brand="workleap"` for these components.

## 0.5.4

### Patch Changes

- 2afe0d0: Updated to latest icons and tokens

## 0.5.3

### Patch Changes

- d8dc4ea: Updated Hopper-UI tokens dependencies

## 0.5.2

### Patch Changes

- 81723d0: Updated Hopper depedency

## 0.5.1

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package

## 0.5.0

### Minor Changes

- 538873b: Added the appearance option to indicate whether or not the Color should be square or circular for the new brand.

## 0.4.1

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper

## 0.4.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

## 0.3.3

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.

## 0.3.2

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.

## 0.3.1

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency

## 0.3.0

### Minor Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.

## 0.2.0

### Minor Changes

- 5402bcc: Created a "brand" toggle in the Toolbar and applied the new Workleap brand to some components. Also deprecated the Tag's appearance values and added new ones.

## 0.1.1

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console

## 0.1.0

### Minor Changes

- 2a6d8e5: Extracted the Color and Avatar components from the Tag component

  ## BREAKING CHANGE

  Restructuring HTML in the tag component as well as renaming onClose to OnRemove since it made more sense. onRemove also gains an id as a parameter.
