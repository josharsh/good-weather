// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import fetchWeatherAndSwitchTheme from "./themes/weatherTheme";
import moodTheme from "./themes/moodTheme";
import timeTheme from "./themes/timeTheme";
import immersiveSessionTheme from "./themes/immersiveSessionTheme"
import soundSessionTheme from "./themes/soundTheme";
export function activate(context: vscode.ExtensionContext) {

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

}

export function deactivate() {
	console.log("Deactivated extension 'weather'. Hope to see you again!");
}
