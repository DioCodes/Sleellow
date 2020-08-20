import React from 'react'
import {View, Share} from 'react-native'
import { Container } from './Container';

export const ShareTheApp = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Hey, check out Sleellow, great sleep app. Download it today while it's free for a limited time! Link here: https://www.itunes.apple.com/app",
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
      <Container icon="🥳" name="Share the app" onPress={onShare} />
    </View>
  )
}