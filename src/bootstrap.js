import * as Font from "expo-font";

//preload fonts & SVG images
export async function bootstrap() {
  await Font.loadAsync({
    "norms-bold": require("../assets/fonts/TT-Norms-Pro-Bold.otf"),
    "norms-medium": require("../assets/fonts/TT-Norms-Pro-Medium.otf"),
    "norms-regular": require("../assets/fonts/TT-Norms-Pro-Regular.otf"),
  });

  function cacheImages(images) {
    return images.map((image) => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }
  cacheImages([
    require("../assets/images/SecurityImage"),
    require("../assets/images/StatsImage"),
    require("../assets/images/NotInSyncIcon"),
    require("../assets/images/InSyncIcon"),
    require("../assets/images/AppIcon"),
    require("../assets/images/BreathImage"),
  ]);
}
