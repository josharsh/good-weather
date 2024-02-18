# Good-Weather for VS Code

## Overview

The Good-Weather extension for Visual Studio Code (VS Code) offers a unique and immersive coding experience by automatically adjusting your editor's theme based on various contexts like the current weather, time of day, your mood, or even ambient sounds. It integrates seamlessly with VS Code, providing a tailored environment that can help improve focus, productivity, and overall coding enjoyment.

## Features

- **Weather-Based Themes**: Automatically switch VS Code themes to match the current weather conditions in your location.
- **Time-Based Themes**: Change themes according to the time of day, providing an appropriate ambiance for morning, afternoon, or night coding sessions.
- **Mood-Based Themes**: Select a theme based on your current mood or task, from focused coding sessions to more relaxed or creative work.
- **Immersive Sessions with Sound**: Enhance your coding experience with thematic soundscapes that complement the visual theme, ranging from nature sounds to cityscapes.
- **Customizable Sound and Theme Pairings**: Easily customize and add new sound-theme pairings for a personalized coding environment.

## Demo

<a href="https://www.loom.com/embed/d4794cd3ddf642bfba8375131483932d?sid=c16d8430-2cf7-4ee3-8963-02d5855acb06"> Watch full demo here </a>
<iframe url=""https://www.loom.com/embed/d4794cd3ddf642bfba8375131483932d?sid=c16d8430-2cf7-4ee3-8963-02d5855acb06"/>


## Installation

1. Open Visual Studio Code.
2. Navigate to the Extensions view by clicking on the square icon on the sidebar or pressing `Ctrl+Shift+X`.
3. Search for "Good-Weather" in the Extensions Marketplace.
4. Click on the Install button to add the extension to your VS Code.

## How to Use

### Weather-Based Theme

- Use the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P`), then type and select `Weather: Switch color theme on weather outside`. The extension will automatically fetch the current weather in your location and switch to a corresponding theme.

### Time-Based Theme

- Trigger the command palette and type and select `Weather: Choose color theme based on time of day`. The theme will change based on whether it's morning, afternoon, or night.

### Mood-Based Theme

- Open the command palette, type and select `Weather: Switch color theme based on your mood`. Choose your current mood from the list, and the theme will adjust accordingly.

### Immersive Sessions with Sound

- To activate an immersive session with both sound and theme, use the command palette to type and select `Weather: Choose an immersive theme`. Pick your preferred ambiance, and enjoy a themed sound alongside the visual theme.

### Sound Theme

- For sound-only sessions, type and select `Weather: Choose a sound theme` from the command palette. Choose the sound theme you wish to play in the background.

## Customizing Theme and Sound Pairings

You can customize or add new theme and sound pairings by editing the extension's source code. Add your custom themes and sounds to the respective arrays in the `immersiveSessionTheme.ts` and `soundSessionTheme.ts` files.

## Contributing

Contributions are welcome! If you'd like to add new features, improve existing ones, or report bugs, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for more details.

## Acknowledgments

- Thanks to the VS Code API for providing the extensive customization capabilities.
- Special thanks to the `play-sound` package for facilitating audio playback.
- All contributors who have helped improve this extension.