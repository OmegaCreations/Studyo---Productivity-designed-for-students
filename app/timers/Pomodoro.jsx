import {
    View, Text, SafeAreaView, ScrollView, Image
} from 'react-native'

import { Stack, useRouter } from 'expo-router';

import styles from './timer.style';
import { COLORS, FONT, SIZES, icons, images, ScreenHeaderBtn } from '../../constants';

const MoreInfo = () => {
    const router = useRouter();

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
        
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View
                style={styles.container}
            >

                <Text style={styles.titleSecondary}>Pomodoro</Text>

            </View>
        </ScrollView>

        </SafeAreaView>
    )
}

export default MoreInfo;