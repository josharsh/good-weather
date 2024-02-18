// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import fetchWeatherAndSwitchTheme from "./themes/weatherTheme";
import moodTheme from "./themes/moodTheme";
import timeTheme from "./themes/timeTheme";
import immersiveSessionTheme from "./themes/immersiveSessionTheme"
import soundSessionTheme from "./themes/soundTheme";
import fs from "fs";


async function activateCustomTheme(context: vscode.ExtensionContext) {
    try {
        // Construct the path to the custom theme JSON file
        const themeFilePath = vscode.Uri.joinPath(context.extensionUri, 'src', 'customThemes', 'theme.json');

        // Read the contents of the theme file
        const themeFileContent = fs.readFileSync(themeFilePath.fsPath, 'utf-8');

        // Parse the JSON content of the theme file
        const themeSettings = JSON.parse(themeFileContent);

        // Update VS Code settings to activate the custom theme
        await vscode.workspace.getConfiguration().update('workbench.colorTheme', themeSettings.theme, true);
        await vscode.workspace.getConfiguration().update('workbench.colorCustomizations', themeSettings.colors, true);
        await vscode.workspace.getConfiguration().update('editor.tokenColorCustomizations', themeSettings.tokenColors, true);

        // Inform the user that the custom theme has been activated
        vscode.window.showInformationMessage('Custom theme activated successfully!');
    } catch (error) {
        // Handle any errors that occur during the activation process
        vscode.window.showErrorMessage(`Failed to activate custom theme: ${error}`);
    }
}

export function activate(context: vscode.ExtensionContext) {

	let activateCustomThemeDisposable = vscode.commands.registerCommand('extension.activateCustomTheme', () => {
        activateCustomTheme(context);
    });


	console.log('Congratulations, extension "weather" is now active!');

	let moodThemeDisposable = vscode.commands.registerCommand('extension.moodTheme', moodTheme);
	
	let weatherThemeDisposable = vscode.commands.registerCommand('extension.weatherTheme', fetchWeatherAndSwitchTheme);
   
	let timeThemeDisposable = vscode.commands.registerCommand('extension.timeTheme', timeTheme);

	let immersiveTheme = vscode.commands.registerCommand("extension.immersive", immersiveSessionTheme);

	let soundTheme = vscode.commands.registerCommand("extension.soundTheme", soundSessionTheme);

	
	context.subscriptions.push(moodThemeDisposable);
	context.subscriptions.push(timeThemeDisposable);
	context.subscriptions.push(weatherThemeDisposable);
	context.subscriptions.push(immersiveTheme);
	context.subscriptions.push(soundTheme);
	context.subscriptions.push(activateCustomThemeDisposable);

}

export function deactivate() {
	console.log("Deactivated extension 'weather'. Hope to see you again!");
}
