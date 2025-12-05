//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// 1e12 est de la notation scientifique
//1 est le coefficient e est la puissance de 10 et  12 est l'exposant (10^12 = 1 000 000 000 000) Source: https://calculator.name/scientific-notation-to-decimal/1e12
export const gigasecond = (date) => {
  return new Date(date.getTime() + 1e12)

};
