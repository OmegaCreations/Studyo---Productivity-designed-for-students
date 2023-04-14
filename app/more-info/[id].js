import {
    View, Text, SafeAreaView, ScrollView, Image
} from 'react-native'

import { Stack, useRouter, useSearchParams } from 'expo-router';

import styles from './moreinfo.style';
import { COLORS, FONT, SIZES, icons, images } from '../../constants';
import { ScreenHeaderBtn } from '../../components';

const MoreInfo = () => {
    const params = useSearchParams();
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

                <Text style={styles.titleSecondary}>{params.id}</Text>

            </View>
        </ScrollView>

        </SafeAreaView>
    )
}

export default MoreInfo;