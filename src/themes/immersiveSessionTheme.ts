import * as vscode from "vscode";
import path from 'path';
import playSound from 'play-sound';
import { ChildProcess } from "child_process";
const player = playSound();


let currentPlayingAudioProcess: ChildProcess | null = null;

async function immersiveSessionTheme() {
  
  const moodOptions = [
    { label: "In the nature", theme: "Abyss", music: "nature.mp3" },
    { label: "Relax with rain", theme: "Solarized Dark", music: "relaxing-rain.mp3" },
    { label: "Sitting in office", theme: "Default Dark+", music: "sitting-in-office.mp3" },
    { label: "Noisy street", theme: "Monokai Dimmed", music: "city-traffic.mp3" },
    { label: "Flow as water", theme: "Quiet Light", music: "flowing-water.mp3" },
    { label: "A windy day", theme: "Kimbie Dark", music: "howling-wind.mp3" },
    { label: "Working from beach", theme: "Solarized Dark", music: "waves.mp3" },
  ];

  const selectedMoodOption = await vscode.window.showQuickPick(moodOptions, { placeHolder: "Choose your immersive session" });

  if (selectedMoodOption) {
    vscode.window.showInformationMessage(`Please put on your headphones for best experience`);
    await vscode.workspace.getConfiguration().update("workbench.colorTheme", selectedMoodOption.theme, true);
    const musicPath = path.join(__dirname, '..', 'media', `${selectedMoodOption.music}`);
    

    cleanUpCurrentAudioProcess()
    currentPlayingAudioProcess = player.play(musicPath, (err) => {
      if (err) { 
       vscode.window.showErrorMessage(`Could not play music: ${err}`);
      } 
    });
    
    vscode.window.showInformationMessage(`Started immersive session - ${selectedMoodOption.label}.`);
  }
}

function cleanUpCurrentAudioProcess(){
  if (currentPlayingAudioProcess) {
    currentPlayingAudioProcess.kill();
    currentPlayingAudioProcess = null;
  }
}

process.on("exit", cleanUpCurrentAudioProcess);
export default immersiveSessionTheme;