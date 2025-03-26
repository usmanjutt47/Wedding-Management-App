import React, { useRef } from "react";
import { WebView, WebViewMessageEvent } from "react-native-webview";

import { View } from "react-native";
import { api } from "@/utils/api";

export default function Home() {
  const { trigger } = api.createPost.useSWRMutation();
  const webViewRef = useRef<WebView>(null);

  const handleWebMessage = async (event: WebViewMessageEvent) => {
    const { title, content } = JSON.parse(event.nativeEvent.data);

    if (!title || !content) {
      console.log("Title aur Content required hai!");
      return;
    }

    try {
      const response = await trigger({ title, content });
      console.log("Mutation Response:", response);

      webViewRef.current?.injectJavaScript(`
        document.getElementById("response").innerText = ${JSON.stringify(
          JSON.stringify(response.post, null, 2)
        )};
      `);
    } catch (error) {
      console.error("Mutation Error:", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        ref={webViewRef}
        originWhitelist={["*"]}
        onMessage={handleWebMessage}
        source={{
          html: `
            <html>
              <body style="padding: 20px; font-family: Arial">
                <h2>Create New Post</h2>
                <input id="title" type="text" placeholder="Title" style="display: block; width: 100%; padding: 8px; margin-bottom: 10px;" />
                <textarea id="content" placeholder="Content" style="display: block; width: 100%; padding: 8px; margin-bottom: 10px;"></textarea>
                <button onclick="submitForm()" style="padding: 10px 20px; background: blue; color: white; border: none;">Create Post</button>
                <pre id="response" style="margin-top: 20px; font-size: 14px;"></pre>

                <script>
                  function submitForm() {
                    const title = document.getElementById('title').value;
                    const content = document.getElementById('content').value;
                    
                    if (!title || !content) {
                      alert('Title aur Content required hai!');
                      return;
                    }
                    
                    window.ReactNativeWebView.postMessage(JSON.stringify({ title, content }));
                  }
                </script>
              </body>
            </html>
          `,
        }}
      />
    </View>
  );
}
