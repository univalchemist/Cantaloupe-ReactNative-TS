import {useMemo} from 'react';
import {Text, TextProps, TextStyle} from 'react-native';

export const Input = ({
  children,
  ...props
}: React.PropsWithChildren<TextProps>) => {
  const getFontWeight = useMemo(() => {
    // TODO replace custom fonts
  

  return (
    <Text >
      {children}
    </Text>
  );
};
