import { BlueEmptyCircle, BlueIcon, GreenEmptyIcon,StreetImage, GreenIcon, OrangeEmptyIcon, OrangeIcon, PurpleEmptyIcon, PurpleIcon, redEmptyIcon, RedIcon, InfoIcon } from '@assets/icon';
import React from 'react';

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


const placesArray = [
  {
    image: StreetImage,
    machine_type: "Vending Machine Type",
    location: "Cantaloupe Location Birmingham, AL, USA",
    distance: '0.4 miles away',
  },
  {
    image: StreetImage,
    machine_type: "Vending Machine Type",
    location: "Cantaloupe Location Birmingham, AL, USA",
    distance: '0.4 miles away'
  },
  {
    image: StreetImage,
    machine_type: "Vending Machine Type",
    location: "Cantaloupe Location Birmingham, AL, USA",
    distance: '0.4 miles away'
  },
  {
    image: StreetImage,
    machine_type: "Vending Machine Type",
    location: "Cantaloupe Location Birmingham, AL, USA",
    distance: '0.4 miles away'
  }

]

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

const termsANdConditions = ['Privacy Policy', 'Terms of Use', 'Cookie Policy']
  const choiceToMove = ['Locations', 'Transactions', 'MORE rewards', 'FAQ']



export { cardArray, placesArray, dummyArray, termsANdConditions, choiceToMove }