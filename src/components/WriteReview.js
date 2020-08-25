import React from 'react'
import { Container } from './Container';
import { Ionicons } from '@expo/vector-icons';
import * as StoreReview from 'expo-store-review';

export const WriteReview = () => {
  return(
    <Container icon={<Ionicons name="ios-star" size={30} color="white" />} name="Review Sleellow" onPress={() => {
      if (StoreReview.isAvailableAsync()) {
        StoreReview.requestReview(); 
      }
    }} />
  )
}