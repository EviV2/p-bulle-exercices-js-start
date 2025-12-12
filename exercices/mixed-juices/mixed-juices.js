// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time = 0;
  if (name == "Pure Strawberry Joy") {
    time = 0.5
  }
  else if (name == "Energizer" || name == "Green Garden") {
    time = 1.5
  }
  else if (name == "Tropical Island") {
    time = 3
  }
  else if (name == "All or Nothing") {
    time = 5
  }
  else {
    time = 2.5
  }
  return time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let i = 0
  let cut = 0;
  while (wedgesNeeded > i) {
    if (limes[0] == "small") {
      i += 6
    }
    else if (limes[0] == "medium") {
      i += 8
    }
    else if (limes[0] == "large") {
      i += 10
    }
    else {
      break;
    }

    limes.shift();
    cut++;

  }
  return cut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  const REP = [];
  do {
    //Break la boucle si le temps calculer est négatif

    timeLeft -= timeToMixJuice(orders[0]);
    REP.push(orders[0])
    orders.shift();
    if (orders.length == 0) {
      break;
    }
  } while (timeLeft > 0)

  return REP
}
