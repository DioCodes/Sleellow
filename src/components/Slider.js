import React, { useState, useRef, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import theme from "../theme";
import { useIsFocused } from "@react-navigation/native";

export const Slider = ({ tips }) => {
  const [active, setActive] = useState(0);
  const [slide, setSlide] = useState(0);

  let isFocused = useIsFocused();

  let scrollView = useRef();
  let timeOutTips = useRef(null);

  const whp = Dimensions.get("window").width - 40;

  useEffect(() => {
    if (isFocused) {
      timeOutTips.current = setTimeout(() => {
        scrollView.current.scrollTo({
          x:
            active == 0
              ? whp
              : active == 1
              ? whp * 2
              : active == 2
              ? whp * 3
              : 0,
          y: 0,
          animated: true,
        });
      }, 5000);
    } else {
      clearTimeout(timeOutTips.current);
    }

    return () => {
      clearTimeout(timeOutTips.current);
    };
  }, [active]);

  let change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );

    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollView}
        pagingEnabled
        horizontal
        onScroll={change}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        bounces={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
      >
        {tips.map((tip, index) => (
          <View key={index} style={styles.textContainer}>
            <Text
              style={{
                ...styles.text,
                // backgroundColor: index == 1 ? "blue" : "red",
              }}
            >
              {tip}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {tips.map((i, k) => (
          <View
            key={k}
            style={k == active ? styles.pagingActiveDot : styles.pagingDot}
          ></View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 40,
  },
  textContainer: {
    width: Dimensions.get("window").width - 40,
    height: 45,

    paddingHorizontal: 3,
  },
  text: {
    color: theme.SECONDARY_COLOR,
    fontFamily: "norms-regular",
    fontSize: 16,
    textAlign: "justify",
  },
  pagination: {
    flexDirection: "row",
    bottom: 0,
    alignSelf: "center",
    // paddingTop: 5,
  },
  pagingDot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, .15)",
    margin: 5,
    marginTop: 0,
  },
  pagingActiveDot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 1)",
    margin: 5,
    marginTop: 0,
  },
});
