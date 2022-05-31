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

export type dummyLocation = {
  id: number;
  image: React.FC<SvgProps>;
  selectedImage: React.FC<SvgProps>;
  title: string;
  isSelected: boolean;
  color: string;
};

const dummyArray = [
  {
    id: 1,
    image: EmptyCircle,
    selectedImage: RadioButton,
    title: 'Food Vending',
    isSelected: false,
    color: COLORS.orange,
  },
  {
    id: 2,
    image: EmptyCircle,
    selectedImage: RadioButton,
    title: 'Beverage Vendin',
    isSelected: false,
    color: COLORS.green1,
  },
  {
    id: 3,
    image: EmptyCircle,
    selectedImage: RadioButton,
    title: 'Massage Chair',
    isSelected: false,
    color: COLORS.blue,
  },
  {
    id: 4,
    image: EmptyCircle,
    selectedImage: RadioButton,
    title: 'Mini Mart',
    isSelected: false,
    color: COLORS.red,
  },
  {
    id: 5,
    image: EmptyCircle,
    selectedImage: RadioButton,
    title: 'Electric Car Charging',
    isSelected: false,
    color: COLORS.purple,
  },
];

const termsAndConditions = ['Privacy Policy', 'Terms of Use', 'Cookie Policy'];

export {cardArray, placesArray, dummyArray, termsAndConditions};
