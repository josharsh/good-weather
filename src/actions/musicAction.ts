import * as vscode from "vscode";
import path from 'path';
import playSound from 'play-sound';
const player = playSound();

function immerse() {
 
    const audioPath = path.join(__dirname, '..', '..', 'src', 'media', 'nature.mp3');
    player.play(audioPath, function(err){
        if (err) vscode.window.showErrorMessage('Failed to play music: ' + err);
    });
}

export default immerse;