import * as Linking from 'expo-linking';
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { View } from './Themed';
import { Styles } from '../constants';
import { Phone, TextMessage, WebLink } from '../svgs';

interface IconGroupProps {
  crisis?: boolean;
  tel?: string;
  text?: { content?: string; number: string; }
  website?: string;
}

export const IconGroup:React.FC<IconGroupProps> = ({crisis, tel, text, website}) => {

  const LETTER_TO_TELEPHONE_NUMBER: { [key: string]: string } = {
    'ABC': '2',
    'DEF': '3',
    'GHI': '4',
    'JKL': '5',
    'MNO': '6',
    'PQRS': '7',
    'TUV': '8',
    'WXYZ': '9'
  };

  const formatTextNumber = (textNumber: string) => {
    const letterExp = /[A-Za-z]/g;
    const digitExp = /\d/g;
    let textNumberWithoutLetters: string = '';

    for (let i = 0; i < textNumber.length; i++) {
      const character = textNumber[i];
      if (character.match(letterExp)) {
        // Replace the letter with corresponding number
        const [ matchingTelephoneLetters ] =
          Object.keys(LETTER_TO_TELEPHONE_NUMBER)
            .filter(letterGroups => letterGroups.includes(character.toUpperCase()))
        textNumberWithoutLetters += LETTER_TO_TELEPHONE_NUMBER[matchingTelephoneLetters];
      } else if (character.match(digitExp)) {
        // If not a letter, don't replace with a number
        textNumberWithoutLetters += character;
      }
    }

    return textNumberWithoutLetters;
  }

  return (
    <View 
      darkColor={Styles.black}
      lightColor={Styles.white}
      style={styles.iconGroup}
    >
      {tel && <TouchableOpacity
        style={[
          styles.phoneWrap,
          crisis && {backgroundColor: Styles.orange},
        ]}
        onPress={() => Linking.openURL(`tel://${tel}`) }>
        <Phone color={Styles.white} />
      </TouchableOpacity>}
      {text && <TouchableOpacity
        style={[
          styles.phoneWrap,
          crisis && {backgroundColor: Styles.orange},
        ]}
        onPress={() => Linking.openURL(`sms:${formatTextNumber(text.number)}?&body=${encodeURI(text.content || "")}`) }>
        <TextMessage color={Styles.white} />
      </TouchableOpacity>}
      {website && <TouchableOpacity
        style={[
          styles.phoneWrap,
          crisis && {backgroundColor: Styles.orange},
        ]}
        onPress={() => Linking.openURL(website) }>
        <WebLink color={Styles.white} />
      </TouchableOpacity>}
    </View>
  )
}

const styles = StyleSheet.create({
  iconGroup: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  phoneWrap: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Styles.blue,
    borderRadius: 1000,
    flex: 1,
    flexGrow: 0,
    flexBasis: 70,
    height: 70,
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    padding: 20,
    width: 70
  },
});
