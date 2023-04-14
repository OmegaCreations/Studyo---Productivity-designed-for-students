import { View, Text, Scroll, TouchableOpacity, FlatList, Image
} from 'react-native';

import { useState } from 'react';

import { useRouter } from 'expo-router';

import { COLORS, SIZES, icons } from '../../../constants';
import styles from './routinecards.style';

const RoutineCards = ({ routines }) => {

    const router = useRouter();
    
    const [completed, setCompleted] = useState([false, false, false]);


    const handleComplete = (index) => {
        let newCompleted = [...completed];
        newCompleted[index] = !newCompleted[index];
        setCompleted(newCompleted);
    }

    return(
        <View style={styles.cardsContainer}>
            <FlatList 
                data={routines}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={styles.card(completed[index])}
                        onPress={() => handleComplete(index)}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}
                        >

                            
                                {completed[index] ? (
                                    <Image 
                                        source={icons.heart}
                                        style={styles.enumerate}
                                        resizeMode='center'
                                    />
                                ) : (
                                    <Text style={styles.enumerate}>{index+1}</Text>
                                )}
                            


                            {item == "Setup pomodoro timer" ? (
                                    <Text></Text>
                                ) : (
                                    <Text
                                        style={{
                                            color: completed[index] ? COLORS.lightTetriary : COLORS.primary,
                                            opacity: 0.55,
                                        }}
                                    >   
                                        Click to mark as complete
                                    </Text>
                                )}
                        </View>
                        <Text style={styles.titleSecondary}>{item}</Text>

                        <TouchableOpacity style={styles.cardBtn}>
                            
                                {item == "Setup pomodoro timer" ? (
                                    <Text style={{color: COLORS.secondary}}>
                                        Click to setup
                                    </Text>
                                ) : (
                                    <Text style={{color: COLORS.secondary}}>   
                                        Read more
                                    </Text>
                                )}
                        </TouchableOpacity>

                    </TouchableOpacity>
                )}
                keyExtractor={item => item}
            >

            </FlatList>
        </View>
    )
}

export default RoutineCards;