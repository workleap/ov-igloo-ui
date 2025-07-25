# @igloo-ui/popover

## 0.8.0

### Minor Changes

- 08f9a05: Clean up non-Workleap rebranded styles for components E-P.
  All consumers should now be using the Workleap branded versions of the components. This will happen automatically, and consumers can stop setting `data-brand="workleap"` for these components.

### Patch Changes

- Updated dependencies [08f9a05]
  - @igloo-ui/icon-button@2.0.0

## 0.7.1

### Patch Changes

- bcb9f75: - Updated @floating-ui/react to latest to fix issues with FloatingPortal
  - Updated Dropdown, Popover, FloatingLinkEditorPlugin, and Tooltip to render portals only when open

## 0.7.0

### Minor Changes

- a7761cd: Updated typings

### Patch Changes

- Updated dependencies [a7761cd]
  - @igloo-ui/icon-button@1.4.0

## 0.6.2

### Patch Changes

- 2afe0d0: Updated to latest icons and tokens
- Updated dependencies [2afe0d0]
  - @igloo-ui/icon-button@1.3.4
  - @igloo-ui/provider@0.1.5

## 0.6.1

### Patch Changes

- d8dc4ea: Updated Hopper-UI tokens dependencies
- Updated dependencies [d8dc4ea]
  - @igloo-ui/icon-button@1.3.3
  - @igloo-ui/provider@0.1.4

## 0.6.0

### Minor Changes

- 7c83d3d: Added pressed state to components that needed it / fixed focus style for fields

### Patch Changes

- Updated dependencies [7c83d3d]
  - @igloo-ui/icon-button@1.3.0

## 0.5.11

### Patch Changes

- 81723d0: Updated Hopper depedency
- Updated dependencies [81723d0]
  - @igloo-ui/icon-button@1.2.9
  - @igloo-ui/provider@0.1.3

## 0.5.10

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package
- Updated dependencies [1613653]
  - @igloo-ui/icon-button@1.2.8
  - @igloo-ui/provider@0.1.2

## 0.5.9

### Patch Changes

- 8281f80: Bumped dependency

## 0.5.8

### Patch Changes

- f2f6d49: Version bump to acknowledge button patch version
- f2f6d49: Version bump for button 0.8.5
- Updated dependencies [f2f6d49]
  - @igloo-ui/icon-button@1.2.7

## 0.5.7

### Patch Changes

- a00a83f: Added and fixed the active styles for the buttons.
- Updated dependencies [a00a83f]
  - @igloo-ui/icon-button@1.2.5

## 0.5.6

### Patch Changes

- 4a2812e: Added locale support using Igloo's provider.
- Updated dependencies [4a2812e]
  - @igloo-ui/provider@0.1.1

## 0.5.5

### Patch Changes

- a91a24d: Updated the ghost secondary color of the icon button since it differs from the ghost secondary button color.
- Updated dependencies [a91a24d]
  - @igloo-ui/icon-button@1.2.4

## 0.5.4

### Patch Changes

- 97edb0e: The button is now square when there's only an icon showing on mobile.
- Updated dependencies [97edb0e]
  - @igloo-ui/icon-button@1.2.3

## 0.5.3

### Patch Changes

- ae1e944: ## Popover

  - Removed padding on title when no close button is present.
  - Removed padding on content.
  - Adjusted close button position in Workleap theme.

## 0.5.2

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper
- Updated dependencies [6ea531f]
  - @igloo-ui/icon-button@1.2.2

## 0.5.1

### Patch Changes

- 8bf2e79: Version bump to acknowledge button patch version
- Updated dependencies [8bf2e79]
  - @igloo-ui/icon-button@1.2.1

## 0.5.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

### Patch Changes

- Updated dependencies [4846c59]
  - @igloo-ui/icon-button@1.2.0

## 0.4.4

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.
- Updated dependencies [cfb5619]
  - @igloo-ui/icon-button@1.1.7

## 0.4.3

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.
- Updated dependencies [7d36815]
  - @igloo-ui/icon-button@1.1.6

## 0.4.2

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency
- Updated dependencies [a2df55d]
  - @igloo-ui/icon-button@1.1.5

## 0.4.1

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.
- Updated dependencies [9739155]
  - @igloo-ui/icon-button@1.1.4

## 0.4.0

### Minor Changes

- 4096378: Added the rebrand. Added disabled prop to Popover to work with StackedBar.

### Patch Changes

- Updated dependencies [4096378]
  - @igloo-ui/icon-button@1.1.2

## 0.3.4

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.
- Updated dependencies [bf4ddef]
  - @igloo-ui/icon-button@1.0.4
  - @igloo-ui/tooltip@3.1.6

## 0.3.3

### Patch Changes

- 8baa499: Updated floating-ui version and also updated tooltip's onOpenChange function so that it does not use the event.
- Updated dependencies [8baa499]
  - @igloo-ui/tooltip@3.1.5

## 0.3.2

### Patch Changes

- c3efaf5: Fixed tests and snapshots since react-aria generated ids changed and viewBox was added to icons.
- Updated dependencies [c3efaf5]
  - @igloo-ui/icon-button@1.0.3

## 0.3.1

### Patch Changes

- 9d9d72a: Updated floating-ui so that each component uses the same version.
- Updated dependencies [9d9d72a]
  - @igloo-ui/tooltip@3.1.4

## 0.3.0

### Minor Changes

- da2c3dd: Added two new props: triggerEvent and interactive. This is to allow the popover to show on hover.

## 0.2.2

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
- Updated dependencies [a41e1d4]
  - @igloo-ui/icon-button@1.0.1
  - @igloo-ui/tooltip@3.1.3

## 0.2.1

### Patch Changes

- bf478b5: Added missing tests. Fixed missing code in stories when clicking 'Show code'. Updated Dropdown mock. Added new optional prop highlightToday to help with test snapshots.
- Updated dependencies [bf478b5]
  - @igloo-ui/tooltip@3.1.2

## 0.2.0

### Minor Changes

- bf0342e: Refactor: Replaced react spring and react popper with framer motion and/or floating-ui

### Patch Changes

- 9ed10b2: Updated jest and updated snapshots for popover and tooltip components
- Updated dependencies [bf0342e]
- Updated dependencies [9ed10b2]
  - @igloo-ui/tooltip@3.1.0

## 0.1.6

### Patch Changes

- 4230499: Fix: updated components to use the IconButton with appearance ghost, variant secondary so that they are grey like they used to be.
- Updated dependencies [4230499]
  - @igloo-ui/tooltip@3.0.3

## 0.1.5

### Patch Changes

- Updated dependencies [e47ae88]
  - @igloo-ui/icon-button@1.0.0

## 0.1.4

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console
- Updated dependencies [6ee9c45]
  - @igloo-ui/icon-button@0.2.13
  - @igloo-ui/tooltip@3.0.1

## 0.1.3

### Patch Changes

- Updated dependencies [ff6db5c]
  - @igloo-ui/tooltip@3.0.0

## 0.1.2

### Patch Changes

- 0640409: Update @igloo-ui/icons to 1.6.0
- 0640409: udpate classnames to 2.3.2
- Updated dependencies [0640409]
- Updated dependencies [0640409]
  - @igloo-ui/icon-button@0.2.12
  - @igloo-ui/tooltip@2.0.2

## 0.1.1

### Patch Changes

- Updated dependencies [17def56]
  - @igloo-ui/tooltip@2.0.0

## 0.1.0

### Minor Changes

- 1a3322f: Initial release

### Patch Changes

- 1a3322f: fix issues with css and package
