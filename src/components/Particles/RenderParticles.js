import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, Dimensions } from "react-native";
import Particle from "./Particle";
import { BlurView } from "expo-blur";
import theme from "../../theme";

const RenderParticles = ({ backgroundColor, particleSize, stopAnim }) => {
  const [particles, setParticles] = useState([]);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const getParticles = () => {
    const currentParticles = [];

    for (let y = 0; y < 15; y += 1) {
      currentParticles.push({
        size: particleSize,
        id: y,
      });
    }

    return setParticles(currentParticles);
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      getParticles();
    });

    {
      !stopAnim ?? console.log(stopAnim);
    }
  }, []);

  const onLayout = (e) => {
    setWidth(e.nativeEvent.layout.width);
    setHeight(e.nativeEvent.layout.height);
  };

  return (
    <View style={{ ...styles.container, backgroundColor }} onLayout={onLayout}>
      {particles.map((particle) => (
        <Particle
          parentWidth={width}
          parentHeight={height}
          size={particle.size}
          stopAnim={stopAnim}
          key={particle.id}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});

export default RenderParticles;
