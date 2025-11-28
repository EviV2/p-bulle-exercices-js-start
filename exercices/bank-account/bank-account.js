//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  balance;
  isDeposing;
  isWithdrawing;
  isClosed;
  constructor() {
    balance = 0;
  }

  open() {
    this.balance = 0;
  }

  close() {
    isClosed = true;
  }

  deposit(number) {
    isDeposing = true;
    this.balance += number

  }

  withdraw(number) {
    isWithdrawing = true
    this.balance -= number
  }

  get balance() {
    return this.balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}