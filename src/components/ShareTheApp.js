import React from 'react'
import {View, Share} from 'react-native'
import { Container } from './Container';
import { Ionicons } from '@expo/vector-icons';
import { t } from '../../assets/lang';

export const ShareTheApp = () => {
  // Link here: https://www.itunes.apple.com/
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Hey, check out Sleellow, great sleep app.",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View>
      <Container icon={<Ionicons name="ios-share-alt" size={30} color="white" />} name={t("share_the_app")} onPress={onShare} />
    </View>
  )
}