//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  effectif = []
  roster() {
      return this.effectif
  }

  add(obj, year) {
    this.effectif.push(obj)
  }

  grade() {
    throw new Error('Remove this line and implement the function');
  }
}
