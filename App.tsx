import React, { useState, useRef } from 'react'
import WebView from 'react-native-webview'

const MyWebView = () => {
  return (
      <WebView
        source={{ uri: 'https://chat.pawan.krd' }}
      />
  );
};

export default MyWebView