// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
* 
 * @param {number} time
 * @returns {string}

 */
export function cookingStatus(time) {

    if (time == 0) {
        return "Lasagna is done."
    }
    else if (time === null || time === undefined) {
        return "You forgot to set the timer."
    }
    else {
        return "Not done, please wait."
    }
}
/**
* 
 * @param {String[]} layers
 * @param {Number} timePerLayer
 * @returns {number}
 
 */
export function preparationTime(layers, timePerLayer) {

    if (timePerLayer === null || timePerLayer === undefined || timePerLayer < 1) {
        timePerLayer = 2 //temps si aucun donner
    }

    return layers.length * timePerLayer

}

/**
* 
 * @param {String[]} ingredient
 * @returns {Object} 
 */
export function quantities(ingredient) {

    let sauceLayers = 0;
    let noodlesLayers = 0;
    ingredient.forEach(Element => {
        if (Element == "sauce") {
            sauceLayers += 0.2
        }
        else if (Element == "noodles") {
            noodlesLayers += 50
        }

    });
    return {
        noodles: noodlesLayers,
        sauce: sauceLayers

    }

}

/**
* 
 * @param {String[]} friendIngredient
 * @param {String[]} myIngredient

 
 */
export function addSecretIngredient(friendIngredient, myIngredient) {

    let secretIngredient = friendIngredient[friendIngredient.length - 1]
    myIngredient.push(secretIngredient)
}

/**
* 
 * @param {object} recipe
 * @param {Number} portions
 * @returns {Object}
 
 */
export function scaleRecipe(recipe, portions) {
    let diviser = portions / 2;
    const element = { ...recipe }
    Object.keys(element).forEach(key => {
        Object(element)[key] = Object(element)[key] * diviser;
    })


    return element
}