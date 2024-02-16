import * as vscode from "vscode";
import path from 'path';
import playSound from 'play-sound';
import { ChildProcess } from "child_process";
const player = playSound();


let currentPlayingAudioProcess: ChildProcess | null = null;

async function soundSessionTheme() {
  
  const moodOptions = [
    { label: "Sounds of Nature", music: "nature.mp3" },
    { label: "Rainfall", music: "relaxing-rain.mp3" },
    { label: "Keyboard Strokes", music: "sitting-in-office.mp3" },
    { label: "Traffic", music: "city-traffic.mp3" },
    { label: "Flowing water", music: "flowing-water.mp3" },
    { label: "Howling Winds", music: "howling-wind.mp3" },
    { label: "Waves", music: "waves.mp3" },
  ];

  const selectedMoodOption = await vscode.window.showQuickPick(moodOptions, { placeHolder: "Choose your sound session" });

  if (selectedMoodOption) {
    vscode.window.showInformationMessage(`Please put on your headphones for best experience`);
    const musicPath = path.join(__dirname, '..', '..', 'src', 'media', `${selectedMoodOption.music}`);

    if (currentPlayingAudioProcess) {
      currentPlayingAudioProcess.kill();
      currentPlayingAudioProcess = null;
    }
    currentPlayingAudioProcess = player.play(musicPath, (err) => {
      if (err) { 
       vscode.window.showErrorMessage(`Could not play music: ${err}`);
      } 
    });
    
    vscode.window.showInformationMessage(`Enjoy your sound theme - ${selectedMoodOption.label}.`);
  }
}

export default soundSessionTheme;
