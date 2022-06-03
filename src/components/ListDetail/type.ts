import {SvgProps} from 'react-native-svg';

export type ListViewProp = {
  isEnabled: boolean;
}

export type PlaceProp = {
  image: React.FC<SvgProps>;
  machine_type: string;
  location: string;
  distance: string;
};

export type LocationProp = {
  id: number;
  image: React.FC<SvgProps>;
  selectedImage: React.FC<SvgProps>;
  title: string;
  isSelected: boolean;
  color: string;
};