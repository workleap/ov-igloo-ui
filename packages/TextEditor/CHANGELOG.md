# @igloo-ui/text-editor

## 0.10.1

### Patch Changes

- 3e2d9f0: Restore CSS variables accidentally removed during cleanup
- Updated dependencies [3e2d9f0]
  - @igloo-ui/button@0.11.1

## 0.10.0

### Minor Changes

- 85a8ac9: Clean up non-Workleap rebranded styles for components Q-Z.
  All consumers should now be using the Workleap branded versions of the components. This will happen automatically, and consumers can stop setting `data-brand="workleap"` for these components.

### Patch Changes

- Updated dependencies [da47695]
- Updated dependencies [08f9a05]
- Updated dependencies [85a8ac9]
  - @igloo-ui/button@0.11.0
  - @igloo-ui/icon-button@2.0.0
  - @igloo-ui/input@3.0.0
  - @igloo-ui/tooltip@4.0.0

## 0.9.3

### Patch Changes

- 3c22922: Prevent hover/focus conflicts

## 0.9.2

### Patch Changes

- 35e2ada: Update input
- Updated dependencies [35e2ada]
  - @igloo-ui/input@2.3.3

## 0.9.1

### Patch Changes

- bcb9f75: - Updated @floating-ui/react to latest to fix issues with FloatingPortal
  - Updated Dropdown, Popover, FloatingLinkEditorPlugin, and Tooltip to render portals only when open
- Updated dependencies [bcb9f75]
  - @igloo-ui/tooltip@3.5.7

## 0.9.0

### Minor Changes

- a7761cd: Updated typings

### Patch Changes

- Updated dependencies [a7761cd]
  - @igloo-ui/button@0.10.0
  - @igloo-ui/icon-button@1.4.0

## 0.8.4

### Patch Changes

- 2afe0d0: Updated to latest icons and tokens
- Updated dependencies [2afe0d0]
  - @igloo-ui/button@0.9.4
  - @igloo-ui/icon-button@1.3.4
  - @igloo-ui/input@2.3.2
  - @igloo-ui/provider@0.1.5
  - @igloo-ui/tooltip@3.5.6

## 0.8.3

### Patch Changes

- d8dc4ea: Updated Hopper-UI tokens dependencies
- Updated dependencies [d8dc4ea]
  - @igloo-ui/button@0.9.3
  - @igloo-ui/icon-button@1.3.3
  - @igloo-ui/input@2.3.1
  - @igloo-ui/provider@0.1.4
  - @igloo-ui/tooltip@3.5.5

## 0.8.2

### Patch Changes

- 9b2c48b: UI sync with Hopper
- Updated dependencies [9b2c48b]
  - @igloo-ui/button@0.9.2
  - @igloo-ui/icon-button@1.3.2

## 0.8.1

### Patch Changes

- 20d9170: Fixed disabled press state appearance / fixed active state in workleap theme for button
- Updated dependencies [20d9170]
  - @igloo-ui/button@0.9.1
  - @igloo-ui/icon-button@1.3.1

## 0.8.0

### Minor Changes

- 7c83d3d: Added pressed state to components that needed it / fixed focus style for fields

### Patch Changes

- Updated dependencies [7c83d3d]
  - @igloo-ui/button@0.9.0
  - @igloo-ui/icon-button@1.3.0
  - @igloo-ui/input@2.3.0

## 0.7.14

### Patch Changes

- 81723d0: Updated Hopper depedency
- Updated dependencies [81723d0]
  - @igloo-ui/button@0.8.7
  - @igloo-ui/icon-button@1.2.9
  - @igloo-ui/input@2.2.6
  - @igloo-ui/provider@0.1.3
  - @igloo-ui/tooltip@3.5.4

## 0.7.13

### Patch Changes

- e934837: UI fix for focused state
- Updated dependencies [e934837]
  - @igloo-ui/input@2.2.5

## 0.7.12

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package
- Updated dependencies [1613653]
  - @igloo-ui/button@0.8.6
  - @igloo-ui/icon-button@1.2.8
  - @igloo-ui/input@2.2.4
  - @igloo-ui/provider@0.1.2
  - @igloo-ui/tooltip@3.5.3

## 0.7.11

### Patch Changes

- f2f6d49: Version bump to acknowledge button patch version
- Updated dependencies [f2f6d49]
  - @igloo-ui/icon-button@1.2.7

## 0.7.10

### Patch Changes

- 2beb214: - Spacing in Button with Icon is now always shown even with non Hopper icons.
- Updated dependencies [2beb214]
  - @igloo-ui/button@0.8.5
  - @igloo-ui/icon-button@1.2.6

## 0.7.9

### Patch Changes

- a00a83f: Added and fixed the active styles for the buttons.
- Updated dependencies [a00a83f]
  - @igloo-ui/button@0.8.4
  - @igloo-ui/icon-button@1.2.5

## 0.7.8

### Patch Changes

- 4a2812e: Added locale support using Igloo's provider.
- Updated dependencies [4a2812e]
  - @igloo-ui/provider@0.1.1

## 0.7.7

### Patch Changes

- a91a24d: Updated the ghost secondary color of the icon button since it differs from the ghost secondary button color.
- Updated dependencies [a91a24d]
  - @igloo-ui/icon-button@1.2.4

## 0.7.6

### Patch Changes

- 97edb0e: The button is now square when there's only an icon showing on mobile.
- Updated dependencies [97edb0e]
  - @igloo-ui/button@0.8.3
  - @igloo-ui/icon-button@1.2.3

## 0.7.5

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper
- Updated dependencies [6ea531f]
  - @igloo-ui/button@0.8.2
  - @igloo-ui/icon-button@1.2.2
  - @igloo-ui/input@2.2.2
  - @igloo-ui/tooltip@3.5.1

## 0.7.4

### Patch Changes

- 8bf2e79: Version bump to acknowledge button patch version
- Updated dependencies [8bf2e79]
  - @igloo-ui/icon-button@1.2.1

## 0.7.3

### Patch Changes

- 4c70af0: Fix border color for input and texteditor on active and hovered
- Updated dependencies [4c70af0]
  - @igloo-ui/input@2.2.1

## 0.7.2

### Patch Changes

- 37822b2: Fixed a badly written import in the TextEditor.

## 0.7.1

### Patch Changes

- e31f263: Upgrade Lexical

## 0.7.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

### Patch Changes

- Updated dependencies [4846c59]
  - @igloo-ui/button@0.8.0
  - @igloo-ui/icon-button@1.2.0
  - @igloo-ui/input@2.2.0
  - @igloo-ui/tooltip@3.5.0

## 0.6.4

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.
- Updated dependencies [cfb5619]
- Updated dependencies [cfb5619]
  - @igloo-ui/button@0.7.7
  - @igloo-ui/icon-button@1.1.7
  - @igloo-ui/input@2.1.8
  - @igloo-ui/tooltip@3.4.4

## 0.6.3

### Patch Changes

- 7d36815: Updated input icon and character count colors.
- Updated dependencies [7d36815]
- Updated dependencies [7d36815]
  - @igloo-ui/button@0.7.4
  - @igloo-ui/icon-button@1.1.6
  - @igloo-ui/tooltip@3.4.3
  - @igloo-ui/input@2.1.7

## 0.6.2

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency
- Updated dependencies [a2df55d]
  - @igloo-ui/button@0.7.3
  - @igloo-ui/icon-button@1.1.5
  - @igloo-ui/input@2.1.5
  - @igloo-ui/tooltip@3.4.2

## 0.6.1

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.
- Updated dependencies [9739155]
  - @igloo-ui/tooltip@3.4.0
  - @igloo-ui/button@0.7.1
  - @igloo-ui/icon-button@1.1.4
  - @igloo-ui/input@2.1.4

## 0.6.0

### Minor Changes

- a82d788: Gave the TextEditor component the new Brand

## 0.5.1

### Patch Changes

- Updated dependencies [8eeac98]
  - @igloo-ui/button@0.7.0
  - @igloo-ui/icon-button@1.1.3

## 0.5.0

### Minor Changes

- 33795d3: Fix overflow url link editor

### Patch Changes

- 8a48bd2: Fix issue with the toolbar that wouldn't display in safari
- Updated dependencies [c226be8]
  - @igloo-ui/input@2.1.3

## 0.4.1

### Patch Changes

- Updated dependencies [5402bcc]
  - @igloo-ui/button@0.6.0
  - @igloo-ui/icon-button@1.1.0

## 0.4.0

### Minor Changes

- d9986bc: Add possibility to open link in a new tab

## 0.3.7

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.
- Updated dependencies [bf4ddef]
  - @igloo-ui/button@0.5.2
  - @igloo-ui/icon-button@1.0.4
  - @igloo-ui/input@2.1.2
  - @igloo-ui/tooltip@3.1.6

## 0.3.6

### Patch Changes

- 8baa499: Updated floating-ui version and also updated tooltip's onOpenChange function so that it does not use the event.
- Updated dependencies [8baa499]
  - @igloo-ui/tooltip@3.1.5

## 0.3.5

### Patch Changes

- 99c9d26: Updated everything Lexical to the latest version to make sure there was nothing conflicting and this allowed the link editor to function again.

## 0.3.4

### Patch Changes

- c3efaf5: Fixed tests and snapshots since react-aria generated ids changed and viewBox was added to icons.
- Updated dependencies [c3efaf5]
  - @igloo-ui/button@0.5.1
  - @igloo-ui/icon-button@1.0.3
  - @igloo-ui/input@2.1.1

## 0.3.3

### Patch Changes

- 9d9d72a: Updated floating-ui so that each component uses the same version.
- Updated dependencies [9d9d72a]
  - @igloo-ui/tooltip@3.1.4

## 0.3.2

### Patch Changes

- Updated dependencies [357133d]
  - @igloo-ui/button@0.5.0
  - @igloo-ui/icon-button@1.0.2

## 0.3.1

### Patch Changes

- a570d38: Fix linting on textEditor
- 917fdc2: Fixed a bug where onBlur would be called multiple times (once for each render since last call).

## 0.3.0

### Minor Changes

- 58a790e: Added a read-only mode to the text editor to allow a way to display the text entered in the text editor.

## 0.2.0

### Minor Changes

- 5abc4f4: Adding new props called `onContentIsEmpty` to indicate whether the content is empty or not.

## 0.1.1

### Patch Changes

- 21c8e42: Added the missing description to the text editor
- Updated dependencies [949db42]
  - @igloo-ui/button@0.4.2

## 0.1.0

### Minor Changes

- eadc879: Initial release of the rich text editor plugin
