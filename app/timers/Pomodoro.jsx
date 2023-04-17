import {
    View, Text, SafeAreaView, ScrollView, Image, Dimensions, TouchableOpacity
} from 'react-native'
import { useCallback } from 'react';

import { Stack, useRouter } from 'expo-router';
import styles from './timer.style';
import { COLORS, FONT, SIZES, images } from '../../constants';


import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedProps,
    useDerivedValue,
    Easing
  } from 'react-native-reanimated';

import { ReText } from 'react-native-redash';
import Svg, { Circle } from 'react-native-svg';

// Timer ---------

const bg_stroke = COLORS.tertiary;
const stroke = COLORS.lightTetriary;

const { width, height } = Dimensions.get('window');

const CIRCLE_LENGTH = 1000;
const R = CIRCLE_LENGTH / (2 * Math.PI);

const Timer = Animated.createAnimatedComponent(Circle);

// 25 min
const duration = 1500 * 1000;

// ---------------

const Pomodoro = () => {
    const router = useRouter();

    const progress = useSharedValue(0);

    // Change circle length
    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
    }));

    let seconds, minutes, formattedTime, remainingSeconds;

    // Change loading text
    const progressText = useDerivedValue(() => {
        seconds = Math.floor(duration/1000) - Math.floor(duration*progress.value/1000);
        minutes = Math.floor(seconds/60);
        remainingSeconds = seconds % 60;
        formattedTime = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`; // MM:SS format


        return `${formattedTime}`;
    });

    
    const onPress = useCallback(() => {

        if(progress.value == 1){
            progress.value = withTiming(0, {duration: duration, easing: Easing.linear})
        } else if (progress.value == 0) {
            progress.value = withTiming(1, {duration: 500, easing: Easing.linear})
        }
        // TODO : STOP TIMER 
    }, []);

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.secondary
            }}
        >
            <Stack.Screen 
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.secondary
                    },
                    headerShadowVisible: false,
                    headerTitle: () => (
                        <Image
                            source={images.logo}
                            resizeMode='contain'
                            style={styles.logoImg}
                        />
                    ),
                    headerTitleAlign: 'center'
                }}
            />
            
            <View style={styles.container}>
                <ReText style={styles.progressText} text={progressText} />
                <Svg style={{ 
                    position: "absolute",
                    bottom: 100,
                 }}>
                    <Circle
                    cx={width / 2}
                    cy={height / 2}
                    r={R}
                    stroke={bg_stroke}
                    strokeWidth={30}
                    />
                    <Timer
                    cx={width / 2}
                    cy={height / 2}
                    r={R}
                    stroke={stroke}
                    strokeWidth={15}
                    strokeDasharray={CIRCLE_LENGTH}
                    animatedProps={animatedProps}
                    strokeLinecap={'round'}
                    />
                </Svg>
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Text style={styles.buttonText}>Run</Text>
                </TouchableOpacity>
            </View>

                
        </SafeAreaView>
    )
}

export default Pomodoro;