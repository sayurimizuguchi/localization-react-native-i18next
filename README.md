# localization-react-native-i18next

React Native Multi Language Starter kit - Support multiple languages for mobiles apps using only JS Code. This starter kit support both Android and iOS. You will centralize the entire logic for localization using React native only.

- No need for native implementation for each platform (iOS and Android)
- Centralize your entire localization multi-language logic using React Native & i18next

<img src="https://drive.google.com//uc?export=view&id=1eENjeFWMByQpjBBTrrpd0TkDWKf3HXqF" width="250">

## Requirements: 
- Node installed
- Android Studio or Xcode

## Steps:
1. Clone the repository
2. cd localization-react-native-i18next
3. `npm install`
4. react-native run-android or react-native run-ios

## Troubleshotting:

### 1. Unable to run react-native run-android, gradle error: 
- Create a emulator using Android version Pie (9.0)
- Make sure you have the Module pointing to SDK 28; steps:
   - right click the App directory
   - choose the "module setting" option
   - change the ADK Platform as what you need
   - Click Apply

### 2. Emulator not found:
- You can create going to Android Studio -> Tools -> Virtual Device Manager
