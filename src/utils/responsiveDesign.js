import {
  widthPercentageToDP as wdp,
  heightPercentageToDP as hdp,
} from "react-native-responsive-screen";

const customWidth = 360;
const customHeight = 760;

export const wp = (value) => {
  const dimension = (value / customWidth) * 100;
  return wdp(`${dimension}%`);
};
export const hp = (value) => {
  const dimension = (value / customHeight) * 100;
  return hdp(`${dimension}%`);
};
