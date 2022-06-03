import {COLORS} from '@theme/color';
import {StreetImage, RadioButton, EmptyCircle} from '@assets/icon';
import React from 'react';
import {SvgProps} from 'react-native-svg';

const cardArray = [
  {
    balance: '$50',
    cardNumber: 'More card •• 5743',
  },
  {
    balance: '',
    cardNumber: 'CPay Card',
  },
];

const placesArray = [
  {
    id: 1,
    image: StreetImage,
    machine_type: 'Vending Machine Type',
    location: 'Cantaloupe Location Birmingham, AL, USA',
    distance: '0.4 miles away',
  },
  {
    id: 2,
    image: StreetImage,
    machine_type: 'Vending Machine Type',
    location: 'Cantaloupe Location Birmingham, AL, USA',
    distance: '0.4 miles away',
  },
  {
    id: 3,
    image: StreetImage,
    machine_type: 'Vending Machine Type',
    location: 'Cantaloupe Location Birmingham, AL, USA',
    distance: '0.4 miles away',
  },
  {
    id: 4,
    image: StreetImage,
    machine_type: 'Vending Machine Type',
    location: 'Cantaloupe Location Birmingham, AL, USA',
    distance: '0.4 miles away',
  },
];

const dummyArray = [
  {
    id: 1,
    image: EmptyCircle,
    selectedImage: RadioButton,
    title: 'Food Vending',
    isSelected: true,
    color: COLORS.orange,
  },
  {
    id: 2,
    image: EmptyCircle,
    selectedImage: RadioButton,
    title: 'Beverage Vendin',
    isSelected: true,
    color: COLORS.greenDark,
  },
  {
    id: 3,
    image: EmptyCircle,
    selectedImage: RadioButton,
    title: 'Massage Chair',
    isSelected: true,
    color: COLORS.blue,
  },
  {
    id: 4,
    image: EmptyCircle,
    selectedImage: RadioButton,
    title: 'Mini Mart',
    isSelected: true,
    color: COLORS.red,
  },
  {
    id: 5,
    image: EmptyCircle,
    selectedImage: RadioButton,
    title: 'Electric Car Charging',
    isSelected: true,
    color: COLORS.purple,
  },
];

const termsAndConditions = ['Privacy Policy', 'Terms of Use', 'Cookie Policy'];

export {cardArray, placesArray, dummyArray, termsAndConditions};
