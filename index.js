let balance = 500.00;

class Withdrawal {

  constructor(amount) {
    this.amount = amount;
  }

  commit() {
    balance -= this.amount;
  }

}

const account = { balance: balance };
var t1 = new Withdrawal(50.25);
t1.commit(account);
console.log('Transaction 1:', t1);

var t2 = new Withdrawal(9.99);
t2.commit(account);
console.log('Transaction 2:', t2);

console.log('Balance:', balance);




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

t1 = new Withdrawal(50.25);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99);
t2.commit();
console.log('Transaction 2:', t2);

console.log('Balance:', balance);
