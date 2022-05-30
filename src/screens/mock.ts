import { BlueEmptyCircle, BlueIcon, GreenEmptyIcon,StreetImage, GreenIcon, OrangeEmptyIcon, OrangeIcon, PurpleEmptyIcon, PurpleIcon, redEmptyIcon, RedIcon } from '@assets/icon';
import React from 'react';
import { SvgProps } from 'react-native-svg';

const cardArray = [
  {
    balance: "$50",
    cardNumber: "More card •• 5743"
  },
  {
    balance: "",
    cardNumber: "CPay Card"
  }
]

export type placesArrayTypes={
  image: React.FC<SvgProps>;
  machine_type: string;
  location: string;
  distance: string;
}

const placesArray = [
  {
    id:1,
    image: StreetImage,
    machine_type: "Vending Machine Type",
    location: "Cantaloupe Location Birmingham, AL, USA",
    distance: '0.4 miles away',
  },
  {
    id:2,
    image: StreetImage,
    machine_type: "Vending Machine Type",
    location: "Cantaloupe Location Birmingham, AL, USA",
    distance: '0.4 miles away'
  },
  {
    id:3,
    image: StreetImage,
    machine_type: "Vending Machine Type",
    location: "Cantaloupe Location Birmingham, AL, USA",
    distance: '0.4 miles away'
  },
  {
    id:4,
    image: StreetImage,
    machine_type: "Vending Machine Type",
    location: "Cantaloupe Location Birmingham, AL, USA",
    distance: '0.4 miles away'
  }

]

export type dummyLocation={
  id: number;
  image: React.FC<SvgProps>;
  selectedImage: React.FC<SvgProps>;
  title: string;
  isSelected: boolean;
}

const dummyArray = [
  {
    id:1,
    image: OrangeEmptyIcon,
    selectedImage: OrangeIcon,
    title: "Food Vending",
    isSelected:false
  }, {
    id:2,
    image: GreenEmptyIcon,
    selectedImage: GreenIcon,
    title: "Beverage Vendin",
    isSelected:false
  }, {
    id:3,
    image: BlueEmptyCircle,
    selectedImage: BlueIcon,
    title: "Massage Chair",
    isSelected:false
  }, {
    id:4,
    image: redEmptyIcon,
    selectedImage: RedIcon,
    title: "Mini Mart",
    isSelected:false
  }, {
    id:5,
    image: PurpleEmptyIcon,
    selectedImage: PurpleIcon,
    title: "Electric Car Charging",
    isSelected:false
  },
]

const termsAndConditions = ['Privacy Policy', 'Terms of Use', 'Cookie Policy']



export { cardArray, placesArray, dummyArray, termsAndConditions }