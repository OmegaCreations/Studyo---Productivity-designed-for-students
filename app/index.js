import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import { useState } from 'react';
import {Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Welcome, ScreenHeaderBtn } from '../components';

import styles from '../styles/styles';

const Home = () => {

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
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
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
                style={{
                    flex: 1,
                    padding: SIZES.medium,
                }}
            >

                <Welcome />

            </View>
        </ScrollView>

        </SafeAreaView>
    )
}

export default Home;