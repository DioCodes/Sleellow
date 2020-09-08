import React, { useRef, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'

export const HoldButton = ({duration, row = false}) => {
  const [progress, setProgress] = useState(0)
  const pressAction = useRef(new Animated.Value(0)).current;
  let anim = useRef(new Animated.Value(progress)).current;
  const ACTION_TIMER = 400;
  let prog = useRef(null);
  
  const widthInterpolated = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
    extrapolate: 'clamp'
  })

  const defaultProps = {
    height: 10,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 8,
    barColor: "white",
    fillColor: "rgba(255, 255, 255, 0.5)",
    duration: duration,
    row
  }
  
  useEffect(() => {
    Animated.timing(anim, {
      toValue: progress,
      duration: defaultProps.duration,
      useNativeDriver: false
    }).start()
  }, [progress])

  const handlePressIn = () => {
    Animated.timing(pressAction, {
      toValue: 1,
      duration: ACTION_TIMER,
      useNativeDriver: true
    }).start();
  }
  const handleLongPress = () => {
    prog.current = setInterval(() => {
      setProgress((p) => p + .025 )
    }, 100);
  }
  const handlePressOut = () => {
    clearInterval(prog.current)
    setProgress(0)
  }

  return (
    <View style = {styles.main}>
      <View style={[{flexDirection: 'row', height: defaultProps.height}, row ? {flex: 1} : undefined]}>
        <View style={{
          flex: 1,
        }}>
          <View style={{
            ...StyleSheet.absoluteFill,
            borderColor: defaultProps.borderColor,
            borderWidth: defaultProps.borderWidth,
            borderRadius: defaultProps.borderRadius,
            backgroundColor: defaultProps.fillColor,
          }} />
          <Animated.View style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: widthInterpolated,
            backgroundColor: defaultProps.barColor,
            borderRadius: defaultProps.borderRadius,
            borderWidth: 1,
            borderColor: defaultProps.borderColor
          }} />
        </View>
      </View>

      <TouchableWithoutFeedback
         onPressIn={handlePressIn}
         onPressOut={handlePressOut}
         onLongPress={handleLongPress}
      >
        <View 
          style={styles.btn}
        />
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    // justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    marginTop: 30,
    // backgroundColor: 'pink',
    // flexDirection: 'row'
  },
  btn: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    marginTop: 30,
  },
})