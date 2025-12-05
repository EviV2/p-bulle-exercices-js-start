//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  Balance;
  isClosed = true;
  constructor() {

  }

  open() {
    if (this.isClosed == true) {
      this.Balance = 0;
      this.isClosed = false;
    }
    else {
      throw new ValueError()
    }
  }

  close() {
    if (this.isClosed == false) {
      this.isClosed = true;
    }

    else {
      throw new ValueError()
    }
  }

  deposit(number) {
    if (!this.isClosed && number >= 0) {
      this.Balance += number
    }
    else {
      throw new ValueError()
    }
  }

  withdraw(number) {
    if (!this.isClosed && number >= 0 && !(number > this.balance) && number !== null) {
      this.Balance -= number
    }
    else {
      throw new ValueError()
    }
  }

  get balance() {
    if (!this.isClosed) {
      return this.Balance;
    }
    throw new ValueError();



  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}