# @igloo-ui/select

## 2.0.1

### Patch Changes

- 3e2d9f0: Restore CSS variables accidentally removed during cleanup
- Updated dependencies [3e2d9f0]
  - @igloo-ui/dropdown@2.0.1

## 2.0.0

### Major Changes

- 85a8ac9: Clean up non-Workleap rebranded styles for components Q-Z.
  All consumers should now be using the Workleap branded versions of the components. This will happen automatically, and consumers can stop setting `data-brand="workleap"` for these components.

### Patch Changes

- Updated dependencies [da47695]
- Updated dependencies [08f9a05]
  - @igloo-ui/dropdown@2.0.0
  - @igloo-ui/icon-button@2.0.0
  - @igloo-ui/input@3.0.0
  - @igloo-ui/list@0.11.0

## 1.9.3

### Patch Changes

- 3c22922: Prevent hover/focus conflicts

## 1.9.2

### Patch Changes

- 35e2ada: Update input
- Updated dependencies [35e2ada]
  - @igloo-ui/input@2.3.3

## 1.9.1

### Patch Changes

- bcb9f75: - Updated @floating-ui/react to latest to fix issues with FloatingPortal
  - Updated Dropdown, Popover, FloatingLinkEditorPlugin, and Tooltip to render portals only when open
- Updated dependencies [bcb9f75]
  - @igloo-ui/dropdown@1.9.3

## 1.9.0

### Minor Changes

- 93ad1e2: Added the `disablePortal` prop to disable dropdown portal, positioning options absolutely instead

## 1.8.0

### Minor Changes

- a7761cd: Updated typings

### Patch Changes

- Updated dependencies [a7761cd]
  - @igloo-ui/icon-button@1.4.0
  - @igloo-ui/list@0.10.0

## 1.7.1

### Patch Changes

- 2afe0d0: Updated to latest icons and tokens
- Updated dependencies [2afe0d0]
  - @igloo-ui/icon-button@1.3.4
  - @igloo-ui/input@2.3.2

## 1.7.0

### Minor Changes

- 2b61fe2: Added data-private to the avatar component because it is needed for LogRocket.

### Patch Changes

- Updated dependencies [2b61fe2]
  - @igloo-ui/list@0.9.0

## 1.6.1

### Patch Changes

- d8dc4ea: Updated Hopper-UI tokens dependencies
- Updated dependencies [d8dc4ea]
  - @igloo-ui/dropdown@1.9.1
  - @igloo-ui/icon-button@1.3.3
  - @igloo-ui/input@2.3.1
  - @igloo-ui/list@0.8.1

## 1.6.0

### Minor Changes

- 7c83d3d: Added pressed state to components that needed it / fixed focus style for fields

### Patch Changes

- Updated dependencies [7c83d3d]
  - @igloo-ui/dropdown@1.9.0
  - @igloo-ui/icon-button@1.3.0
  - @igloo-ui/input@2.3.0
  - @igloo-ui/list@0.8.0

## 1.5.7

### Patch Changes

- 81723d0: Updated Hopper depedency
- Updated dependencies [81723d0]
  - @igloo-ui/dropdown@1.8.3
  - @igloo-ui/icon-button@1.2.9
  - @igloo-ui/input@2.2.6
  - @igloo-ui/list@0.7.4

## 1.5.6

### Patch Changes

- e934837: UI fix for focused state
- Updated dependencies [e934837]
  - @igloo-ui/input@2.2.5

## 1.5.5

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package
- Updated dependencies [1613653]
  - @igloo-ui/dropdown@1.8.2
  - @igloo-ui/icon-button@1.2.8
  - @igloo-ui/input@2.2.4
  - @igloo-ui/list@0.7.3

## 1.5.4

### Patch Changes

- 8281f80: Dependency of dependency
- 8281f80: Bumped dependency
- Updated dependencies [8281f80]
  - @igloo-ui/list@0.7.2

## 1.5.3

### Patch Changes

- f2f6d49: Version bump to acknowledge button patch version
- f2f6d49: Version bump for button 0.8.5
- Updated dependencies [f2f6d49]
- Updated dependencies [f2f6d49]
  - @igloo-ui/icon-button@1.2.7
  - @igloo-ui/list@0.7.1

## 1.5.2

### Patch Changes

- a00a83f: Added and fixed the active styles for the buttons.
- Updated dependencies [a00a83f]
  - @igloo-ui/icon-button@1.2.5

## 1.5.1

### Patch Changes

- a91a24d: Updated the ghost secondary color of the icon button since it differs from the ghost secondary button color.
- Updated dependencies [a91a24d]
  - @igloo-ui/icon-button@1.2.4

## 1.5.0

### Minor Changes

- 538873b: Added the listSize option to indicate whether the list should be size small or medium (compact or not).

### Patch Changes

- Updated dependencies [538873b]
  - @igloo-ui/list@0.7.0

## 1.4.9

### Patch Changes

- e83ee46: Stopped icons from shrinking when in a list component
- Updated dependencies [e83ee46]
  - @igloo-ui/list@0.6.7

## 1.4.8

### Patch Changes

- 97edb0e: The button is now square when there's only an icon showing on mobile.
- Updated dependencies [97edb0e]
  - @igloo-ui/icon-button@1.2.3

## 1.4.7

### Patch Changes

- bea2c50: Fixed the height of Combobox and Select to be 42px and not 40px and made adjustments for the visualIdentifier update.
- Updated dependencies [bea2c50]
  - @igloo-ui/list@0.6.6

## 1.4.6

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper
- Updated dependencies [6ea531f]
  - @igloo-ui/dropdown@1.8.1
  - @igloo-ui/icon-button@1.2.2
  - @igloo-ui/input@2.2.2
  - @igloo-ui/list@0.6.4

## 1.4.5

### Patch Changes

- e2cc8b8: Fixed the height of Combobox and Select to be 42px and not 40px and made adjustments for the visualIdentifier update.
- Updated dependencies [e2cc8b8]
  - @igloo-ui/list@0.6.3

## 1.4.4

### Patch Changes

- 8bf2e79: Version bump to acknowledge button patch version
- Updated dependencies [8bf2e79]
  - @igloo-ui/icon-button@1.2.1

## 1.4.3

### Patch Changes

- 29430f9: Alert Border radius was not right this has been fixed / Color of icon and chevron in a Select was not right

## 1.4.2

### Patch Changes

- 0c419dc: Fix an issue where classNames were not passed to children when cloned
- Updated dependencies [0c419dc]
  - @igloo-ui/list@0.6.1

## 1.4.1

### Patch Changes

- 289cad2: Update the chevron icon for Select and Combobox. Updated the clear icon as well and adjusted spacing.

## 1.4.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

### Patch Changes

- Updated dependencies [4846c59]
  - @igloo-ui/dropdown@1.8.0
  - @igloo-ui/icon-button@1.2.0
  - @igloo-ui/input@2.2.0
  - @igloo-ui/list@0.6.0

## 1.3.13

### Patch Changes

- 1f6d0b3: Added a border to the dropdown component and removed the outline from the date picker since it was no longer needed.
- Updated dependencies [1f6d0b3]
  - @igloo-ui/dropdown@1.7.1

## 1.3.12

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.
- Updated dependencies [cfb5619]
  - @igloo-ui/dropdown@1.6.6
  - @igloo-ui/icon-button@1.1.7
  - @igloo-ui/input@2.1.8
  - @igloo-ui/list@0.5.5

## 1.3.11

### Patch Changes

- f61b367: Cleaned up and fixed the way select options are used. Made sure it would update properly when the user passes options to the select.

## 1.3.10

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.
- Updated dependencies [7d36815]
- Updated dependencies [7d36815]
  - @igloo-ui/dropdown@1.6.5
  - @igloo-ui/icon-button@1.1.6
  - @igloo-ui/list@0.5.4
  - @igloo-ui/input@2.1.7

## 1.3.9

### Patch Changes

- 39a1d18: Fix for focus disabled look
- Updated dependencies [39a1d18]
  - @igloo-ui/input@2.1.6

## 1.3.8

### Patch Changes

- 5a9444f: Fix for focus state made to be on par with Orbiter/Hopper

## 1.3.7

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency
- Updated dependencies [a2df55d]
  - @igloo-ui/dropdown@1.6.4
  - @igloo-ui/icon-button@1.1.5
  - @igloo-ui/input@2.1.5
  - @igloo-ui/list@0.5.2

## 1.3.6

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.
- Updated dependencies [9739155]
  - @igloo-ui/dropdown@1.6.3
  - @igloo-ui/icon-button@1.1.4
  - @igloo-ui/input@2.1.4
  - @igloo-ui/list@0.5.1

## 1.3.5

### Patch Changes

- 7cd05f5: restores alignment between icon and text in a compact select.

## 1.3.4

### Patch Changes

- 8f2ab36: Gave the Select component the new Brand.
- d9f9f12: fixed style problem with the new brand
  - @igloo-ui/icon-button@1.1.3

## 1.3.3

### Patch Changes

- Updated dependencies [5402bcc]
  - @igloo-ui/icon-button@1.1.0
  - @igloo-ui/list@0.5.0

## 1.3.2

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.
- Updated dependencies [bf4ddef]
  - @igloo-ui/dropdown@1.6.1
  - @igloo-ui/icon-button@1.0.4
  - @igloo-ui/input@2.1.2
  - @igloo-ui/list@0.4.3

## 1.3.1

### Patch Changes

- c3efaf5: Fixed tests and snapshots since react-aria generated ids changed and viewBox was added to icons.
- Updated dependencies [c3efaf5]
  - @igloo-ui/icon-button@1.0.3
  - @igloo-ui/input@2.1.1
  - @igloo-ui/list@0.4.1

## 1.3.0

### Minor Changes

- 9d9d72a: Allow Combobox, Select, TagPicker and Dropdown components to scroll if it's too long and runs out of room in the viewport. New properties added to Dropdown are: isReferenceWidth, isScrollable and footer. The display of the footer was moved to the dropdown instead of leaving it in combobox because the dropdown handles the scroll styles and the footer is sticky.

### Patch Changes

- Updated dependencies [9d9d72a]
  - @igloo-ui/dropdown@1.4.0

## 1.2.0

### Minor Changes

- 9b707d1: Added a loading feature to List, Combobox, Select and Tagpicker components.

### Patch Changes

- Updated dependencies [9b707d1]
  - @igloo-ui/list@0.4.0

## 1.1.2

### Patch Changes

- Updated dependencies [0482ec6]
  - @igloo-ui/list@0.3.0

## 1.1.1

### Patch Changes

- 08a062e: update packages
- Updated dependencies [6e2e96a]
- Updated dependencies [08a062e]
- Updated dependencies [6e2e96a]
- Updated dependencies [08a062e]
  - @igloo-ui/dropdown@1.3.0
  - @igloo-ui/list@0.2.1

## 1.1.0

### Minor Changes

- 4ff1942: Added new optional props to List called 'disableTabbing' and 'onOptionBlur'. Also fixed some styling for the List component.

### Patch Changes

- Updated dependencies [4ff1942]
- Updated dependencies [0b8a62f]
  - @igloo-ui/list@0.2.0
  - @igloo-ui/dropdown@1.2.0

## 1.0.7

### Patch Changes

- 84e2d78: Adding a hover effect
- Updated dependencies [84e2d78]
  - @igloo-ui/input@2.0.5

## 1.0.6

### Patch Changes

- 412dbd5: Added the missing onClose event for the Dropdown component inside the Select.

## 1.0.5

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
- Updated dependencies [a41e1d4]
  - @igloo-ui/dropdown@1.1.4
  - @igloo-ui/icon-button@1.0.1
  - @igloo-ui/input@2.0.4
  - @igloo-ui/list@0.1.3

## 1.0.4

### Patch Changes

- bf478b5: Added missing tests. Fixed missing code in stories when clicking 'Show code'. Updated Dropdown mock. Added new optional prop highlightToday to help with test snapshots.
- Updated dependencies [bf478b5]
  - @igloo-ui/dropdown@1.1.3

## 1.0.3

### Patch Changes

- 55d12e3: fix error with empty package @shared/components
- Updated dependencies [55d12e3]
  - @igloo-ui/list@0.1.2

## 1.0.2

### Patch Changes

- 3f50827: Made dropdown portal to the end of the document so that it works in Modals. Removed unused line in Modal.
- Updated dependencies [3f50827]
  - @igloo-ui/dropdown@1.1.2

## 1.0.1

### Patch Changes

- d5c91f5: link shared components with aliases
- Updated dependencies [e47ae88]
- Updated dependencies [d5c91f5]
  - @igloo-ui/icon-button@1.0.0
  - @igloo-ui/list@0.1.1

## 1.0.0

### Major Changes

- 7dcba93: Initial release of List and Combobox components. Select was updated to use the Dropdown component that was created previously as well as the new List component.

  ## BREAKING CHANGE

  Select types were updated. List component is used inside Select so SelectOption.tsx was removed. Some functionality was changed. When selecting an element in the select using the keyboard, it now just focuses the element, you need to actually hit enter to select it.

### Patch Changes

- Updated dependencies [7dcba93]
  - @igloo-ui/list@0.1.0
  - @igloo-ui/dropdown@1.1.1

## 0.1.4

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console

## 0.1.3

### Patch Changes

- 0640409: Update @igloo-ui/icons to 1.6.0
- 0640409: udpate classnames to 2.3.2

## 0.1.2

### Patch Changes

- d971143: All tests were updated to use testing library and not enzyme

## 0.1.1

### Patch Changes

- 9842a0d: Add dataTest for the Dropdown

## 0.1.0

### Minor Changes

- 39bc518: Feat: Initial release of the select component
