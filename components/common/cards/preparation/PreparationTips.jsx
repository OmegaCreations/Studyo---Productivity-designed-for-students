import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './preparationtips.style';

const points = [
  'Wyznacz spokojne miejsce do nauki, wolne od rozpraszaczy.',
  'Urządź sobie biurko w cichym pokoju, z dala od miejsca, gdzie odbywa się codzienne życie domowe.',
  'Zapewnij odpowiednie oświetlenie - najlepiej, aby światło padało bezpośrednio na miejsce, gdzie się uczysz, aby nie męczyć wzroku.',
  'Wybierz wygodne krzesło, na którym będziesz mógł spędzić wiele godzin.',
  'Upewnij się, że masz dobrze działający sprzęt, tak jak komputer lub tablet.',
  'Przygotuj sobie odpowiednie narzędzia do nauki, takie jak: zeszyt, długopis, książki, czy notatki.'
];


// TODO: save globally marked tips

const PreparationTips = () => {
  const [currentPointIndex, setCurrentPointIndex] = useState(0);
  const currentPoint = points[currentPointIndex];
  const [completedPoints, setCompletedPoints] = useState([]);

  const handleNextPoint = () => {
    if (currentPointIndex < points.length - 1) {
      setCurrentPointIndex(currentPointIndex + 1);
    }
  };

  const handlePrevPoint = () => {
    if (currentPointIndex > 0) {
      setCurrentPointIndex(currentPointIndex - 1);
    }
  };

  const handleToggleComplete = () => {
    const updatedCompletedPoints = [...completedPoints];
    if (updatedCompletedPoints.includes(currentPointIndex)) {
      const index = updatedCompletedPoints.indexOf(currentPointIndex);
      updatedCompletedPoints.splice(index, 1);
    } else {
      updatedCompletedPoints.push(currentPointIndex);
    }
    setCompletedPoints(updatedCompletedPoints);
    handleNextPoint();
  };

  const isCurrentPointCompleted = completedPoints.includes(currentPointIndex);


  return (
    <>
    <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View
                style={styles.container}
            ></View>
        

      <View style={styles.tipContainer}>
        <Text
          style={styles.enumerate}
        >{currentPointIndex + 1}/{points.length}</Text>
        <Text style={styles.tipText}>{currentPoint}</Text>
      </View>

    </ScrollView>

    <View style={styles.tipBtnBox}>
      <TouchableOpacity style={styles.tipBtn} onPress={handlePrevPoint}>
        <Text style={styles.tipBtnText} >Poprzedni</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleToggleComplete}>
        <FontAwesome 
            name={isCurrentPointCompleted ? 'check-square-o' : 'square-o'} 
            size={40} 
            color={isCurrentPointCompleted ? 'green' : 'black'} 
          />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tipBtn} onPress={handleNextPoint}>
        <Text style={styles.tipBtnText} >Następny</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

export default PreparationTips;
