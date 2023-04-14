import { View, Text } from 'react-native';

import styles from '../../styles/styles';
import { COLORS, FONT, SIZES } from '../../constants';

import { RoutineCards } from '..';

const routines = ["Environment setup", "Prepare physically", "Setup pomodoro timer"];

const Welcome = () => {
    return(
        <View style={styles.container}>
            
            
            <View style={styles.header}>
                <Text style={styles.titleTertiary}>Hello,</Text>
                <Text style={styles.subtitle}>Start off by completing study routine.</Text>
            </View>

            <RoutineCards 
                routines={routines}
            />

        </View>
    )
}

export default Welcome;