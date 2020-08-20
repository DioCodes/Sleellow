import React from 'react'
import { Container } from './Container';
import * as StoreReview from 'expo-store-review';

export const WriteReview = () => {
  return(
    <Container icon="😍" name="Write a nice review" onPress={() => {
      if (StoreReview.isAvailableAsync()) {
        StoreReview.requestReview(); 
      }
    }} />
  )
}