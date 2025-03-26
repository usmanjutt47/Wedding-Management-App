import { StyleProp, ViewStyle } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";

import React from "react";
import { View } from "react-native";

export default function Gradient({ style }: { style: StyleProp<ViewStyle> }) {
  return (
    <View style={style}>
      <Svg height="100" width="100">
        <Defs>
          <RadialGradient
            id="grad"
            cx="100%"
            cy="10%"
            rx="100%"
            ry="100%"
            fx="100%"
            fy="15%"
          >
            <Stop offset="100%" stopColor="#fff" stopOpacity="1" />
            <Stop offset="0%" stopColor="#00B8D9" stopOpacity="1" />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100" height="100" fill="url(#grad)" />
      </Svg>
    </View>
  );
}
