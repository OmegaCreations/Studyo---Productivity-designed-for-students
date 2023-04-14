import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';

import styles from '../../styles/styles';
import { COLORS, FONT, SIZES } from '../../constants';

import { RoutineCards } from '..';

const routines = ["Environment setup", "Prepare physically", "Setup pomodoro timer"];

const Welcome = () => {

    const router = useRouter();

    const handleCardPress = (item) => {
        if(item != routines[2])
        router.push(`/more-info/${item}`);
        else 
        router.push(`/timers/Pomodoro`);
    }

    return(
        <View style={styles.container}>
            
            
            <View style={styles.header}>
                <Text style={styles.titleTertiary}>Hello,</Text>
                <Text style={styles.subtitle}>Start off by completing study routine.</Text>
            </View>

            <RoutineCards 
                routines={routines}
                handleCardPress={handleCardPress}
            />

        </View>
    )
}

export default Welcome;