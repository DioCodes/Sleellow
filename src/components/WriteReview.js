import React from 'react'
import { Container } from './Container';
import * as StoreReview from 'expo-store-review';

export const WriteReview = () => {
  return(
    <Container icon="😍" name="Review Sleellow" onPress={() => {
      if (StoreReview.isAvailableAsync()) {
        StoreReview.requestReview(); 
      }
    }} />
  )
}