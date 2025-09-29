import React from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView 
        source={{ uri: 'https://example.com' }} //REPLACE THE URL WITH YOURS
        style={styles.webview}
        allowsFullscreenVideo={true}
        allowsInlineMediaPlayback={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  webview: {
    flex: 1,
  },
});
