class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
    this.time = new Date();
  }

commit() {
  if (!this.isAllowed()) {
    this.account.addTransaction(this);
    return true;
  } else {
    return false;
  }
}

isAllowed() {
  return true;
}

}

class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    return this.transactions.reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);

  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}


class Deposit extends Transaction {
  commit() {
    this.account.addTransaction(this);
    super.commit();
  }
}

class Withdrawal extends Transaction {
  isAllowed() {
    return this.account.balance - this.amount >= 0;
  }

  commit() {
    if (super.commit()) {
      this.account.addTransaction(this);
      return true;
    } else {
      return false;
    }
  }

}


const myAccount = new Account('Steve Jobs');
console.log('Starting Balance:', myAccount.balance);

var t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

var t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

var t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Transaction 3:', t3);

console.log('Balance:', myAccount.balance);
