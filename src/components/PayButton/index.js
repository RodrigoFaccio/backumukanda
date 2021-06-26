import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableWithoutFeedback } from 'react-native';

import { Button, Label } from './styles';

export default function PayButton({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={
          focused
            ? ['#fff', '#ccc']
            : ['#EEE2FC', '#EEE2FC']
        }
        
      >
        <Ionicons

          name="scan-sharp"
          size={30}
          color={focused ? '#000' : '#964ff0'}
        />
        
      </Button>
    </TouchableWithoutFeedback>
  );
}