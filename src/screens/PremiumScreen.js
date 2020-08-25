import React from "react";
import { StyleSheet, View, Text, Dimensions, AsyncStorage } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import theme from "../theme";

import { BreathImage } from "../../assets/images/BreathImage";
import { AppIcon } from "../../assets/images/AppIcon";
import { DizzinessIcon } from "../../assets/images/DizzinessIcon";
import { Leaves } from "../../assets/images/Leaves";
import { CoolSleellow } from "../../assets/images/CoolSleellow";
import { SleepBackIcon } from "../../assets/images/SleepBackIcon";
import { NoContentManIcon } from "../../assets/images/NoContentManIcon";
import { StyledButton } from "../components/StyledButton";



export const PremiumScreen = () => {
  const slides = [
    {
      key: "s1",
      // image: <CoolSleellow height={250} width={275} />,
      image: <AppIcon height={250} width={250} />,
      header: "Привет!\nМеня зовут Sleellow",
      text: "Я - твой помощник в улучшении качества сна. Так же я помогу тебе стать счастливей и улучшить твою жизнь!\n\nХочешь узнать как? Читай дальше!",
    },
    {
      key: "s2",
      image: <DizzinessIcon height={250} width={250} />,
      header: "Что с твоей жизнью?",
      text: "Как думаешь, контролируешь ли ты её? Чувствуешь ли ты сонливость в течении дня? Уделяешь ли время вещам, которые делают тебя счастливым? На сколько хорошо ты концентрируешься?\n\nЕсли ответ отрицательный - пора это исправлять, согласен?",
    },
    {
      key: "s3",
      image: <CoolSleellow height={250} width={250} />,
      header: "Я помогу тебе.",
      text:  "Мне хорошо известно, как тяжело выполнять свои обязанности на работе или в учёбе, уделять время хобби, заниматься саморазвитием и при этом бороться с последсвиями плохого сна в течении дня.\n\nДавай разберёмся, что это за последсвия и как они влияют на твою жизнь",
    },
    {
      key: "s4",
      image: <NoContentManIcon height={250} width={250} />,
      header: "Почему я ничего не успеваю?",
      text: "Плохой сон имеет последсвтия из-за которых сложно выполнить список хотя-бы из 5 дел.\nВот некоторые из них:",
      list: "1. Ухудшается внимание. \n2. Появляются проблемы с памятью и концентрацией.\n3. Недостаток сил и потеря времени.",
      textSecond: "Вместо того, чтобы готовиться ко сну, мы обычно сидим в телефоне до поздна и впустую тратим время. Вы знали, что свет от телефона заставляет ваш мозг думать, что ещё день и потому вам не хочется спать?",
    },
    {
      key: "s5",
      image: <BreathImage height={250} width={250} />,
      header: "Давай поможем друг другу",
      text: "Как мы уже выяснили, плохой сон - причина потери контроля над жизнью. Но, ты способен вернуть контроль, чувстовать себя лучше и делать больше!\n\nЯ помогу тебе избавиться от плохих привычек, что рушат твою жизнь. Взамен я попрошу поддержать разработчика.",
      button: <StyledButton name="$2.99/месяц" color="transparent" borderColor="white" />,
    },
  ];

  const renderSliderItem = ({ item }) => {
    return(
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.image}>{item.image}</View>
          <View style={styles.textWrapper}>
            <Text style={styles.textHeader}>{item.header}</Text>
              <Text style={styles.text}>{item.text}</Text>
            <View style={styles.listContainer}>
              <Text style={{...styles.text, ...styles.list}}>{item.list}</Text>
            </View>
              <Text style={styles.text}>{item.textSecond}</Text>
              {item.button}
          </View>
        </View>
      </View>
    )
  }

  const renderSliderButton = (name) => {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{name}</Text>
      </View>
    );
  };

  return(
      <AppIntroSlider
        data={slides}
        renderItem={renderSliderItem}
        showDoneButton={false}
        showNextButton={false}
        renderNextButton={() => renderSliderButton("next")}
        dotStyle={styles.dot}
        activeDotStyle={{ ...styles.dot, ...styles.activeDot }}
      />
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.PRIMARY_COLOR,
  },
  container: {
    flex: 1,
    backgroundColor: theme.PRIMARY_COLOR,
    alignItems: "center",
    justifyContent: 'center',
    // position: 'absolute',
    // top: 50
  },
  image: {

  },
  text: {
    fontFamily: "norms-regular",
    fontSize: 18,
    color: "rgba(255, 255, 255, .7)",
    textAlign: "center",
    paddingVertical: 5,
    // textTransform: "uppercase"
  },
  listContainer: {
    justifyContent: 'flex-start'
  },
  list: {
    color: '#fff',
    fontFamily: 'norms-medium',
    textAlign: "left",
  },
  textHeader: {
    fontSize: 26,
    fontFamily: "norms-medium",
    color: "#fff",
    textAlign: "center",
    // textTransform: "uppercase"
  },
  textWrapper: {
    marginTop: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    paddingHorizontal: 20,

  },

  buttonContainer: {
    width: 70,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: theme.SECONDARY_COLOR,
    fontSize: 18,
    fontFamily: "norms-medium",
  },

  dot: {
    width: 30,
    height: 3,
    backgroundColor: "rgba(255, 255, 255, .2)",
  },
  activeDot: {
    backgroundColor: theme.SECONDARY_COLOR,
  },
})

