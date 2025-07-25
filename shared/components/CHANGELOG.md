# @shared/components

## 0.7.0

### Minor Changes

- 85a8ac9: Clean up non-Workleap rebranded styles for components Q-Z.
  All consumers should now be using the Workleap branded versions of the components. This will happen automatically, and consumers can stop setting `data-brand="workleap"` for these components.

### Patch Changes

- Updated dependencies [da47695]
  - @igloo-ui/avatar@0.5.0
  - @igloo-ui/color@0.6.0

## 0.6.0

### Minor Changes

- 2b61fe2: Added data-private to the avatar component because it is needed for LogRocket.

### Patch Changes

- Updated dependencies [2b61fe2]
  - @igloo-ui/avatar@0.4.0

## 0.5.0

### Minor Changes

- 538873b: Added the appearance option to indicate whether or not the Color should be square or circular for the new brand.

### Patch Changes

- Updated dependencies [538873b]
  - @igloo-ui/color@0.5.0

## 0.4.0

### Minor Changes

- bea2c50: Updated the Avatar size in VisualIdentifier to match the sizing for Color.

## 0.3.1

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper
- Updated dependencies [6ea531f]
  - @igloo-ui/avatar@0.3.1
  - @igloo-ui/color@0.4.1

## 0.3.0

### Minor Changes

- e2cc8b8: Updated the Avatar size in VisualIdentifier to match the sizing for Color.

## 0.2.1

### Patch Changes

- 42efe0b: Fix issue where classNames were not passed to children when cloned

## 0.2.0

### Minor Changes

- 5402bcc: Created a "brand" toggle in the Toolbar and applied the new Workleap brand to some components. Also deprecated the Tag's appearance values and added new ones.

### Patch Changes

- Updated dependencies [5402bcc]
  - @igloo-ui/avatar@0.2.0
  - @igloo-ui/color@0.2.0

## 0.1.2

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.

## 0.1.1

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 0.1.0

### Minor Changes

- 7dcba93: Updated VisualIdentifier so that the size is customizable. Default is still size small.

## 0.0.1

### Patch Changes

- fec4bb0: initial release of `Shared/components`
- Updated dependencies [2a6d8e5]
  - @igloo-ui/avatar@0.1.0
  - @igloo-ui/color@0.1.0
