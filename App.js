
import Navigator from "./routes/home"
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SF Pro': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
    'SF Pro Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Navigator />
  );
}

