import WalletManager from 'react-native-wallet-manager';

export const handlePassFromURL = async (url: string) => {
  try {
    const result = await WalletManager.addPassFromUrl(url);
  } catch (e) {}
};

//  FUTURE USE
// const checkForPass = () => {
//     try {
//       const result = await WalletManager.hasPass(
//         'pass.family.dev.stage.beerpoint-master',
//         'serial-xxx',
//       );
//
//     } catch (e) {
//
//     }
// }

// const removePass = () => {
//     try {
//       const result = await WalletManager.removePass(
//         'pass.family.dev.stage.beerpoint-master',
//         'serial-xxx',
//       );
//
//     } catch (e) {
//
//     }
// }
