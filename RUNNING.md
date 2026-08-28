
# RUNNING.md — How to Run Bverse

This file explains how to run the Bverse React Native app using:

- Windows
- VS Code
- Expo
- Expo Go
- Huawei Y6p
- USB Debugging
- ADB
- scrcpy

---

# 1. Connect the Huawei Phone

Connect the Huawei Y6p to the laptop using USB.

Make sure:

```text
Developer Options
→ USB Debugging
→ ON
````

If the phone asks:

```text
Allow USB debugging?
```

tap:

```text
Allow
```

---

# 2. Open the Project in VS Code

Open:

```text
C:\xampp\htdocs\JB CODING\React Native\bverse
```

or from PowerShell:

```powershell
cd "C:\xampp\htdocs\JB CODING\React Native\bverse"
code .
```

---

# 3. Start scrcpy

Open a terminal in VS Code.

Run:

```powershell
scrcpy
```

This mirrors the Huawei screen on Windows.

Keep this terminal running.

---

# 4. Start Expo

Open another terminal.

Run:

```powershell
npx expo start --go
```

Keep this terminal running.

Expo should show:

```text
Metro: exp://127.0.0.1:8081
Using Expo Go
```

Do not close this terminal while developing.

---

# 5. Set the ADB Variable

Open another terminal.

Run:

```powershell
$adb = "C:\Users\JB VILLE\AppData\Local\Microsoft\WinGet\Packages\Genymobile.scrcpy_Microsoft.Winget.Source_8wekyb3d8bbwe\scrcpy-win64-v4.1\adb.exe"
```

This tells PowerShell where the ADB executable is located.

---

# 6. Check if the Phone is Connected

Run:

```powershell
& $adb devices
```

Expected result:

```text
List of devices attached
PEVBB20A16201974    device
```

If it says:

```text
unauthorized
```

check the phone and tap:

```text
Allow USB debugging
```

---

# 7. Connect Metro Through USB

Run:

```powershell
& $adb reverse tcp:8081 tcp:8081
```

Then verify:

```powershell
& $adb reverse --list
```

Expected result:

```text
(reverse) tcp:8081 tcp:8081
```

This connects:

```text
Huawei localhost:8081
        ↓
USB
        ↓
Laptop Metro:8081
```

---

# 8. Open Bverse in Expo Go

Usually Expo Go may reconnect automatically.

If it does not, run:

```powershell
& $adb shell am start -a android.intent.action.VIEW -d "exp://127.0.0.1:8081"
```

This opens the Expo development URL directly on the Huawei.

---

# 9. If Expo Go is Stuck

If Expo Go shows:

```text
Something went wrong
```

or does not reload properly, force-stop it:

```powershell
& $adb shell am force-stop host.exp.exponent
```

Then reopen the project:

```powershell
& $adb shell am start -a android.intent.action.VIEW -d "exp://127.0.0.1:8081"
```

---

# 10. Normal Development Workflow

Once everything is connected:

```text
Edit React Native code
        ↓
Ctrl + S
        ↓
Metro detects the change
        ↓
Expo Go updates
        ↓
See the result through scrcpy
```

The main file for the starter screen is:

```text
src/app/index.tsx
```

---

# Daily Running Routine

For normal development, use this:

## Terminal 1

```powershell
scrcpy
```

## Terminal 2

```powershell
npx expo start --go
```

## Terminal 3

```powershell
$adb = "C:\Users\JB VILLE\AppData\Local\Microsoft\WinGet\Packages\Genymobile.scrcpy_Microsoft.Winget.Source_8wekyb3d8bbwe\scrcpy-win64-v4.1\adb.exe"
```

Then:

```powershell
& $adb reverse tcp:8081 tcp:8081
```

If Expo Go does not open the project:

```powershell
& $adb shell am start -a android.intent.action.VIEW -d "exp://127.0.0.1:8081"
```

---

# Commands I Usually Need

## Start phone mirroring

```powershell
scrcpy
```

## Start Expo

```powershell
npx expo start --go
```

## Find connected Android device

```powershell
& $adb devices
```

## Connect Metro through USB

```powershell
& $adb reverse tcp:8081 tcp:8081
```

## Check USB port forwarding

```powershell
& $adb reverse --list
```

## Open Bverse

```powershell
& $adb shell am start -a android.intent.action.VIEW -d "exp://127.0.0.1:8081"
```

## Restart Expo Go

```powershell
& $adb shell am force-stop host.exp.exponent
```

Then:

```powershell
& $adb shell am start -a android.intent.action.VIEW -d "exp://127.0.0.1:8081"
```

---

# Commands I Do NOT Normally Need

Do not use these every time:

```powershell
npx expo start --tunnel
```

Tunnel mode is not required because the phone is connected through USB.

Do not normally use:

```powershell
npx expo start --go --clear
```

Use `--clear` only if Metro has cache problems.

Do not press:

```text
a
```

inside Expo.

The `a` command tries to use the Android SDK.

Android Studio / Android SDK is currently not installed.

---

# If Metro Has Cache Problems

Stop Expo using:

```text
Ctrl + C
```

Then run:

```powershell
npx expo start --go --clear
```

Use this only when needed.

---

# If USB Connection Stops Working

Check:

```powershell
& $adb devices
```

If the device is missing:

1. unplug the USB cable
2. reconnect it
3. make sure USB Debugging is enabled
4. accept the USB Debugging prompt
5. run:

```powershell
& $adb devices
```

Then reconnect Metro:

```powershell
& $adb reverse tcp:8081 tcp:8081
```

---

# If scrcpy Does Not Work

Check:

```powershell
Get-Command scrcpy
```

Then try:

```powershell
scrcpy
```

If Windows cannot find it, restart VS Code or PowerShell so the updated PATH is loaded.

---

# Current Development Setup

```text
VS Code
   │
   │ React Native Code
   ▼
Expo
   │
   ▼
Metro :8081
   │
   │ ADB Reverse
   │ USB
   ▼
Huawei Y6p
   │
   ▼
Expo Go
   │
   ▼
Bverse


Huawei Y6p
   │
   │ USB
   ▼
scrcpy
   │
   ▼
Live Phone Screen on Windows
```

---

# Quick Start

If everything is already configured:

```powershell
scrcpy
```

Then:

```powershell
npx expo start --go
```

Then:

```powershell
$adb = "C:\Users\JB VILLE\AppData\Local\Microsoft\WinGet\Packages\Genymobile.scrcpy_Microsoft.Winget.Source_8wekyb3d8bbwe\scrcpy-win64-v4.1\adb.exe"
```

Then:

```powershell
& $adb reverse tcp:8081 tcp:8081
```

If needed:

```powershell
& $adb shell am start -a android.intent.action.VIEW -d "exp://127.0.0.1:8081"
```

Then start coding.

```
```
