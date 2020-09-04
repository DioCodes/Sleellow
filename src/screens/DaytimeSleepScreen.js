import React, {useState, useLayoutEffect} from 'react';
import { View, StyleSheet, Picker } from 'react-native';
import theme from '../theme';
import { HeaderModal } from '../components/HeaderModal';
import { t } from '../../assets/lang';
import { StyledButton } from '../components/StyledButton';
import { CircleMoveAnimation } from '../components/CircleMoveAnimations';

export const DaytimeSleepScreen = ({navigation}) => {
  const [napTime, setNapTime] = useState("20");
  const [paused, setPaused] = useState(true)

  useLayoutEffect(() => {
    navigation.setOptions(
      HeaderModal(navigation, t("daytime_sleep"))
    )
  }, []);

  return (
    <View style={styles.main}>
      <View style={styles.pickerContainer}>
        <CircleMoveAnimation paused={paused} />
        {/* <View style={styles.hideVerticalLinesWrapper}></View> */}

        <Picker
          selectedValue={napTime}
          itemStyle={{ 
            color: "#fff",
            width: 75
          }}
          style={{
            // backgroundColor: 'blue',
            position: "absolute", 
            zIndex: 9
          }}
          onValueChange={(itemValue, itemIndex) => {
            setNapTime(itemValue);
          }}
        >
          <Picker.Item label={`5 ${t("mins")}`} value="5" />
          <Picker.Item label={`10 ${t("mins")}`} value="10" />
          <Picker.Item label={`15 ${t("mins")}`} value="15" />
          <Picker.Item label={`20 ${t("mins")}`} value="20" />
          <Picker.Item label={`25 ${t("mins")}`} value="25" />
          <Picker.Item label={`30 ${t("mins")}`} value="30" />
        </Picker>
      </View>
      
      <View style={styles.buttonContainer}>
        <StyledButton 
          name={paused ? "Старт" : "Стоп"} 
          alignSelf="center" 
          onPress={() => {
            setPaused(paused ? false : true)
          }} 
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.MODAL_BGC_COLOR,
    paddingTop: 30,
    paddingHorizontal: 20,
    // alignItems: 'center',
  },
  pickerContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  hideVerticalLinesWrapper: {
    borderBottomColor: theme.MODAL_BGC_COLOR,
    borderBottomWidth: 1,
    borderTopColor: theme.MODAL_BGC_COLOR,
    borderTopWidth: 1,
    height: 44,
    width: 75,
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    marginTop: 30
  },
  circle: {
    position: 'absolute',
    zIndex: 0,
    height: 230,
    width: 230,
    // backgroundColor: 'blue',
    borderRadius: 150,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, .05)"
  }
})