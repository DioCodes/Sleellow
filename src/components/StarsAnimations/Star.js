import React, { useRef, useEffect, useState } from 'react'
import { View, StyleSheet, Animated, Easing, Dimensions } from 'react-native'
import Constants from "expo-constants"
import theme from '../../theme';
import { Ionicons } from '@expo/vector-icons';


export const Star = ({ height, paused}) => {
  let trueFalse = [false, true];
  let rNum = [0.5, 1];
  var randomBool = Math.floor(Math.random() * trueFalse.length);
  var randomNum = Math.floor(Math.random() * rNum.length);
  // const [isStop, setIsStop] = useState(trueFalse[randomBool]);
  const [isStop, setIsStop] = useState(false);
  let reversed = false;

  const startHeight = Constants.statusBarHeight;
  const deviceWidth = Dimensions.get("window").width;
  const parentHeight = trueFalse[randomBool] ? height : height;
  const starMaxSize = 2;
  
  const randomIntFromInterval = (min, max) => {
    return Number(Math.floor(Math.random() * (max - min + 1) + min));
  };

  let rotateTwo = useRef(new Animated.Value(0)).current;
  let opacity = useRef(new Animated.Value(0)).current;

  const randomStarSize = useRef(new Animated.Value(
    randomIntFromInterval(0.5, starMaxSize)
  )).current;


  let valXY = useRef(new Animated.ValueXY({
    x: randomIntFromInterval(0, deviceWidth - startHeight), 
    y: randomIntFromInterval(0, parentHeight) * -1
  })).current;

  let spin = rotateTwo.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  });


  
  let loopStarAnimation = () => {
    const time = 1000 * randomIntFromInterval(10, 15);
    let easing = Easing.linear;
    reversed = !reversed;


  //   Animated.parallel([
  //     (!isStop ? (
  //       Animated.sequence([
  //         Animated.timing(valXY.x, {
  //           toValue: randomIntFromInterval(startHeight, deviceWidth - startHeight) * rNum[randomNum],
  //           duration: time / 2,
  //           useNativeDriver: true,
  //           easing,
  //         }),
  //         Animated.timing(valXY.x, {
  //           toValue: randomIntFromInterval(startHeight, deviceWidth - startHeight) * rNum[randomNum],
  //           duration: time / 2,
  //           useNativeDriver: true,
  //           easing,
  //         })
  //       ])
  //     ) : Animated.delay(time)),
        
  //     (!isStop ? (
  //         Animated.timing(valXY.y, {
  //           toValue: 
  //           randomIntFromInterval(0, parentHeight) * -1,
  //           duration: time ,
  //           useNativeDriver: true,
  //           easing,
  //         })
  //     ) : Animated.delay(time)),

  //     Animated.timing(opacity, {
  //       toValue: reversed ? randomIntFromInterval(0.5, 1) : randomIntFromInterval(0.5, 1),
  //       duration: time / 2,
  //       useNativeDriver: true,
  //       easing,
  //     }),
  //     Animated.timing(randomStarSize, {
  //       toValue: reversed ? randomIntFromInterval(1, starMaxSize) : randomIntFromInterval(1, starMaxSize),
  //       duration: time,
  //       useNativeDriver: true,
  //       easing,
  //     }),
  //   ]).start((e) => {
  //     if (e.finished) {
  //       loopStarAnimation();
  //       let random = randomIntFromInterval(0, 1)
  //       setIsStop(random === 1 ? true : false)
  //     }
  //   })
  // }

    Animated.parallel([
      Animated.timing(valXY.x, {
        toValue: randomIntFromInterval(startHeight, deviceWidth - startHeight),
        duration: time,
        useNativeDriver: true,
        easing,
      }),
      Animated.timing(valXY.y, {
        toValue: 
        randomIntFromInterval(0, parentHeight) * -1,
        duration: time,
        useNativeDriver: true,
        easing,
      }),
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: .5,
          duration: time / 1.5,
          useNativeDriver: true,
          easing,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: time / 3,
          useNativeDriver: true,
          easing,
        }),
      ]),
      Animated.timing(randomStarSize, {
        toValue: 0,
        duration: time,
        useNativeDriver: true,
        easing,
      }),

    ]).start((e) => {
      if (e.finished) {
        opacity.setValue(0)
        valXY.setValue({
          x: randomIntFromInterval(0, deviceWidth - startHeight),
          y: randomIntFromInterval(0, parentHeight) * -1
        })
        randomStarSize.setValue(randomIntFromInterval(0.5, starMaxSize))
        // console.log(randomStarSize._value)

        loopStarAnimation();
        // let random = randomIntFromInterval(0, 1)
        // setIsStop(random === 1 ? true : false)
      }
    })
  }

  const stopAnimation = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 2500,
      easing: Easing.linear,
      useNativeDriver: true
    }).start((e) => {
      if (e.finished) {
        valXY.setValue({
          x: randomIntFromInterval(0, deviceWidth - startHeight),
          y: randomIntFromInterval(0, parentHeight) * -1
        })
        randomStarSize.setValue(randomIntFromInterval(1, starMaxSize))
      }
    })
  }

  useEffect(() => {
    if (paused) {
      // opacity.setValue(0)
      // valXY.setValue({
      //   x: randomIntFromInterval(0, deviceWidth - startHeight),
      //   y: randomIntFromInterval(0, parentHeight) * -1
      // })
      // randomStarSize.setValue(randomIntFromInterval(1, starMaxSize))
      
    } else if (!paused) {
      requestAnimationFrame(() => {
        loopStarAnimation()
      })
    }
  }, [paused])


  return (
      <Animated.View style={{
        ...styles.starPart,
        ...styles.star,
        transform: [
          { translateX: valXY.x },
          { translateY: valXY.y },
          { scale: randomStarSize },
        ],
        opacity: opacity,
        // backgroundColor: color
      }}>
        {/* <Ionicons name="ios-planet" size={15} color="white" /> */}
        {/* <View style={{...styles.starPart, ...styles.starPartFirst}} />
        <View style={{...styles.starPart, ...styles.starPartSec}} /> */}
      </Animated.View>
  )
}

const styles = StyleSheet.create({
  star: {
    position: "absolute",
    bottom: 0,
    shadowColor: theme.SECONDARY_COLOR,
    shadowOpacity: 1,
    shadowOffset: 
      {width: 0, height: 0},
    shadowRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starPart: {
    width: 5,
    height: 5,
    borderRadius: 5,
    position: 'absolute',
    backgroundColor: theme.SECONDARY_COLOR,
  },
  starPartFirst: {
    transform: [
      { scaleX: 1.25 },
      { scaleY: .25 }
    ]
  },
  starPartSec: {
    transform: [
      { scaleX: .25 },
      { scaleY: 1.25 }
    ]
  }
})