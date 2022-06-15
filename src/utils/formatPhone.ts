export const formatPhoneNumber = (e: React.ChangeEvent) => {
  //  TODO: convert to handle RN
  // // eslint-disable-next-line no-restricted-globals
  // (e.target as HTMLInputElement).value = (
  //   e.target as HTMLInputElement
  // ).value.replace(/\D/g, ''); // enforces numeric input
  // const input = (e.target as HTMLInputElement).value.substring(0, 10);
  // const areaCode = input.substring(0, 3);
  // const middle = input.substring(3, 6);
  // const last = input.substring(6, 10);
  // if (input.length > 6) {
  //   (e.target as HTMLInputElement).value = `(${areaCode}) ${middle} - ${last}`;
  // } else if (input.length > 3) {
  //   (e.target as HTMLInputElement).value = `(${areaCode}) ${middle}`;
  // } else if (input.length > 0) {
  //   (e.target as HTMLInputElement).value = `(${areaCode}`;
  // }
};

export const getOnlyNumbers = (phone: string): string | null => {
  // const re = /\d+/g;
  // const matches = phone.match(re);
  // return matches && matches.length ? matches.join('') : null;
};
