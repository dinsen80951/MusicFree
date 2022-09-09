import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useConfig} from '@/core/localConfigManager';
import {useTheme} from 'react-native-paper';
import {ImgAsset} from '@/constants/assetsConst';
import Image from './image';

export default function PageBackground() {
  const themeConfig = useConfig('setting.theme');
  const theme = useTheme();

  return (
    <>
      <View
        style={[
          style.wrapper,
          {
            backgroundColor:
              theme.colors?.pageBackground ?? theme.colors.background,
          },
        ]}></View>
      <Image
        uri={themeConfig?.background}
        fallback={ImgAsset.backgroundDefault}
        style={[
          style.wrapper,
          {
            opacity: themeConfig?.backgroundOpacity ?? 0.7,
          },
        ]}
        blurRadius={themeConfig?.backgroundBlur ?? 20}></Image>
    </>
  );
}

const style = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});
