# Complete Guide: Website to APK (2025)
### Author: Yumkhaibam Johnson Singh 

## Prerequisites
- Node.js (v16 or v18 recommended)
- npm or yarn
- Windows, Mac, or Linux

### Step 1: Install Required Tools
```bash
npm install -g expo-cli eas-cli
```

### Step 2: Create New Project
```bash
expo init my-website-app
cd my-website-app
# Choose "blank" template
```

### Step 3: Install Dependencies
```bash
expo install react-native-webview
```
### Step 4: Configure App (App.js)
Replace contents of `App.js`: 'https://github.com/floristechnis-git/Velox-Vis/blob/main/Web2App/App.js'

### Step 5: Configure App (app.json)
Update `app.json`: 'https://github.com/floristechnis-git/Velox-Vis/blob/main/Web2App/app.json'


### Step 6: Login to Expo
```bash
eas login
# Follow authentication steps
```

### Step 7: Configure Build
```bash
set EAS_NO_VCS=1
eas build:configure
# Select Android only
```

### Step 8: Build APK
```bash
eas build --platform android --profile preview
# Press "Y" when asked about keystore
```

### Step 9: Download APK
- Wait for build completion (15-30 min)
- Check email or expo.dev dashboard for download link
- Download and install APK
