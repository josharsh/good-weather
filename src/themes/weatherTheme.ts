import { loadavg } from 'os';
import * as vscode from 'vscode';


async function fetchLocation() {
    const token = 'a04ea896b7ba5b'; // Your IPInfo token
    const url = `https://ipinfo.io?token=${token}`;
    try {
        const response = await fetch(url);
        const data: any = await response.json();
        return data.city;
    } catch (error) {
        console.error('Failed to fetch location:', error);
        vscode.window.showErrorMessage('Failed to fetch location.');
        return null;
    }
}
async function fetchWeatherAndSwitchTheme() {
    // Placeholder for the API key and the user's location
    const apiKey = 'a7738f1cf1c74cdabf7141043241202';
    const location = await fetchLocation();
    
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    try {
        const response = await fetch(url);
        const data: any = await response.json();
        
        let theme;
        switch (data.current.condition.text) {
            case 'Sunny':
                theme = 'Monokai Bright';
                break;
            case 'Clear':
                theme = 'Solarized Light';
                break;
            case 'Partly cloudy':
            case 'Cloudy':
                theme = 'Quiet Light';
                break;
            case 'Rain':
            case 'Light rain':
                theme = "Tomorrow Night Blue";
                break;
            case 'Heavy rain':
                theme = 'Abyss';
                break;
            case 'Snow':
                theme = 'Monokai Bright';
                break;
            default:
                theme = 'Default Light+';
                break;
        }

        await vscode.workspace.getConfiguration().update('workbench.colorTheme', theme, true);
        vscode.window.showInformationMessage(`Weather condition in ${location} is ${data.current.condition.text}. Switched to ${theme}.`);
    } catch (error) {
        console.error('Failed to fetch weather or switch theme:', error);
        vscode.window.showErrorMessage('Failed to fetch weather information.');
    }
}

export default fetchWeatherAndSwitchTheme;