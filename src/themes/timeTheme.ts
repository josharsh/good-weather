import * as vscode from 'vscode';
async function timeTheme() {
    const hour = new Date().getHours();
    let theme;

    if (hour >= 6 && hour < 12) {
        theme = 'Default Light+';
    } else if (hour >= 12 && hour < 18) {
        theme = 'Solarized Light';
    } else if (hour >= 18 && hour < 24) {
        theme = 'Default Dark+';
    } else {
        theme = 'Default Dark+'; 
    }

    await vscode.workspace.getConfiguration().update('workbench.colorTheme', theme, true);
    vscode.window.showInformationMessage(`Good ${hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening'}, the theme has been switched to ${theme} for a better coding experience.`);
}

export default timeTheme;
