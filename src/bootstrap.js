import * as Font from "expo-font";

export async function bootstrap() {
  await Font.loadAsync({
    "norms-bold": require("../assets/fonts/TT-Norms-Pro-Bold.otf"),
    "norms-medium": require("../assets/fonts/TT-Norms-Pro-Medium.otf"),
    "norms-regular": require("../assets/fonts/TT-Norms-Pro-Regular.otf"),
  });
}
