import {EXPERIENCE_UP, LEVEL_UP, RESET_LEVELS } from "../types";
import { AsyncStorage } from "react-native";


const INITIAL_STATE = {
  level: 1,
  levelTitle: "Beginner",
  levelExperience: 0,
  maxLevelExperience: 10
};

const experienceUp = (exp) => {
  return {
    type: EXPERIENCE_UP,
    payload: exp,
  }
}

const levelUp = (newMaxExp, newLevelTitle) => {
  return {
    type: LEVEL_UP,
    payload: newMaxExp,
    levelTitle: newLevelTitle,
    levelPoints: 1
  }
}

const resetLevels = () => {
  return {
    type: RESET_LEVELS,
  }
}

const shootConfetti = async () => {
  try {
    await AsyncStorage.setItem("@ShootConfetti:key", "true");
    console.log(await AsyncStorage.getItem("@ShootConfetti:key"))
  } catch (err) {
    console.log(err);
  }
}

export const checkUserLevel = (value = 1) => (dispatch, getState) => {
  dispatch(experienceUp(value));
  // dispatch(resetLevels())

  let levelState = getState().level;
  let experience = levelState.levelExperience;
  let maxExperience = levelState.maxLevelExperience;
  
  if (experience == maxExperience) {
    shootConfetti()
  }

  switch(true) {
    case experience == 10 && maxExperience == 10:
      dispatch(levelUp(30, "Novice"))
      break;
    case experience == 30 && maxExperience == 30:
      dispatch(levelUp(60, "Intermediate"))
      break;
    case experience == 60 && maxExperience == 60:
      dispatch(levelUp(90, "Professional"))
      break;
    case experience == 90 && maxExperience == 90:
      dispatch(levelUp(120, "Expert"))
      break;
    case experience == 120 && maxExperience == 120:
      dispatch(levelUp(160, "Master"))
      break;
    case experience == 160 && maxExperience == 160:
      dispatch(levelUp(220, "Master"))
      break;
    case experience == 220 && maxExperience == 220:
      dispatch(levelUp(300, "Enlightened"))
      break;
    case experience == 300 && maxExperience == 300:
      dispatch(levelUp(350, "God")) 
      break;
    case experience == 350 && maxExperience == 350:
      dispatch(levelUp(400, "God"))
      break;
    case experience == 400 && maxExperience == 400:
      dispatch(levelUp(460, "God"))
      break;
    case experience == 460 && maxExperience == 460:
      dispatch(levelUp(540, "God"))
      break;
    case experience == 540 && maxExperience == 540:
      dispatch(levelUp(560, "God"))
      break;
    case experience == 560 && maxExperience == 560:
      dispatch(levelUp(600, "God"))
      break;
  }
      
  levelState = getState().level
  console.log(levelState)
  console.log(AsyncStorage.getItem("@ShootConfetti:key"))
}

export const levelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXPERIENCE_UP:
      return {
        ...state,
        levelExperience: state.levelExperience + action.payload,
      };
    case LEVEL_UP:
      return {
        ...state,
        level: state.level + action.levelPoints,
        levelExperience: INITIAL_STATE.levelExperience,
        maxLevelExperience: action.payload,
        levelTitle: action.levelTitle
      };
      case RESET_LEVELS:
        return {
          ...state,
          level: INITIAL_STATE.level,
          // levelExperience: INITIAL_STATE.levelExperience,
          levelExperience: 9,
          maxLevelExperience: INITIAL_STATE.maxLevelExperience,
          levelTitle: INITIAL_STATE.levelTitle
      };
    default:
      return state;
  }
};
