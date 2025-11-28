//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { errorMessage } from "../lucky-numbers/lucky-numbers";

export const age = (planete, age) => {

  if (planete === null || planete === undefined) {


  }
  else {
    let map = new Map();
    age = age / (60 * 60 * 24 * 365.25)
    map.set("mercury", 0.2408467)
    map.set("venus", 0.61519726)
    map.set("earth", 1.0)
    map.set("jupiter", 11.862615)
    map.set("saturn", 29.447498)
    map.set("uranus", 84.016846)
    map.set("neptune", 164.79132)
    map.set("mars", 1.8808158)
    if (!isNaN(map.get(planete))) {
      return Math.round(age / map.get(planete) * 100) / 100
    }
    else {
      throw new Error("not a planet")

    }
  }

};
