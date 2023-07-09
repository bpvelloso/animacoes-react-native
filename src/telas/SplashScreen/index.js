
import AnimatedLottieView from 'lottie-react-native';
import animacao from '../../assets/splash-aluramed.json'
import styles from './styles'
import { View } from "react-native";

export default function SplashScreenAluramed({navigation}) {
    function fim() {
        navigation.reset({
            index: 0,
            routes: [{name: 'Onboarding'}]
        })
    }
    return(
        <View style={styles.container}>
            <AnimatedLottieView  source={animacao} loop={false} autoPlay={true}
                onAnimationFinish={fim} />
        </View>
    )
}