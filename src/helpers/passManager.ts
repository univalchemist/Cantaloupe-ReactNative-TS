import WalletManager from 'react-native-wallet-manager';

export const handlePassFromURL = async (url: string) => {
  console.log('trying');
  try {
    const result = await WalletManager.addPassFromUrl(url);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

//  FUTURE USE
// const checkForPass = () => {
//     try {
//       const result = await WalletManager.hasPass(
//         'pass.family.dev.stage.beerpoint-master',
//         'serial-xxx',
//       );
//       console.log(result);
//     } catch (e) {
//       console.log(e);
//     }
// }

// const removePass = () => {
//     try {
//       const result = await WalletManager.removePass(
//         'pass.family.dev.stage.beerpoint-master',
//         'serial-xxx',
//       );
//       console.log(result);
//     } catch (e) {
//       console.log(e);
//     }
// }
