import * as vscode from "vscode";
async function moodTheme() {
  const moodOptions = [
    { label: "AI assisted session", theme: "Monokai Dimmed" },
    { label: "Focussed Coding", theme: "Default Dark+" },
    { label: "Feeling Blue", theme: "Solarized Dark"},
    { label: "Bloody hands", theme: "Red"},
    { label: "High speed session", theme: "Dark High Contrast"},
    { label: "Creative", theme: "Abyss"},
    { label: "Caffeniated", theme: "Kimbie Dark"},
    { label: "Ocean Blues", theme: "Tomorrow Night Blue"},
    { label: "Relaxed", theme: "Quiet Light" },
    { label: "Energetic", theme: "Monokai Bright" },
    { label: "Dark", theme: "Default Dark+" },
    { label: "Light", theme: "Light" },
  ];

  const selectedMood = await vscode.window.showQuickPick(
    moodOptions.map((option) => option.label),
    {
      placeHolder: "How do you feel?",
    }
  );

  const moodTheme = moodOptions.find((option) => option.label === selectedMood)?.theme;
  if (moodTheme) {
    await vscode.workspace.getConfiguration().update("workbench.colorTheme", moodTheme, true);
    vscode.window.showInformationMessage(
      `Feeling ${selectedMood}? Let's switch to the ${moodTheme} theme.`
    );
  }
}

export default moodTheme;
