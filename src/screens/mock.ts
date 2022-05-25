import { BlueEmptyCircle, BlueIcon, GreenEmptyIcon,StreetImage, GreenIcon, OrangeEmptyIcon, OrangeIcon, PurpleEmptyIcon, PurpleIcon, redEmptyIcon, RedIcon } from '@assets/icon';
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
    image: OrangeEmptyIcon,
    selectedImage: OrangeIcon,
    title: "Food Vending"
  }, {
    image: GreenEmptyIcon,
    selectedImage: GreenIcon,
    title: "Beverage Vendin"
  }, {
    image: BlueEmptyCircle,
    selectedImage: BlueIcon,
    title: "Massage Chair"
  }, {
    image: redEmptyIcon,
    selectedImage: RedIcon,
    title: "Mini Mart"
  }, {
    image: PurpleEmptyIcon,
    selectedImage: PurpleIcon,
    title: "Electric Car Charging"
  },
]

const termsANdConditions = ['Privacy Policy', 'Terms of Use', 'Cookie Policy']
  const choiceToMove = ['Locations', 'Transactions', 'MORE rewards', 'FAQ']



export { cardArray, placesArray, dummyArray, termsANdConditions, choiceToMove }