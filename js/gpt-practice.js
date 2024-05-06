/*task 1* Bank account*/

class BankAccount {
   #owner
   transactions
   balance

   constructor (owner,balance) {
      this.balance = balance;
      this.#owner=owner;
      this.transactions = [];

   };

   deposit (amount) {
      this.balance +=amount;
      this.transactions.push({type: 'deposit', amount: `${amount}`});
      console.log(`Balance: ${this.balance}`);
   }
   withdraw (amount) {
      if (this.balance - amount < 0) {
         console.log('insufficient funds');
         return
      }
      this.transactions.push({type: 'withdraw', amount: `${amount}`});
      this.balance-=amount;
      console.log(`Balance: ${this.balance}`);
      }
}

class SavingsAccount extends BankAccount  {
   #interestRate  

   constructor (owner,balance, interestRate ) {
      super(owner,balance);
      this.#interestRate  =  interestRate 
   }
   addInterest() {
      const interestAmount = this.balance * this.#interestRate;
      this.deposit (interestAmount)
   }
}

class User {
   username
   password
   constructor (username, password) {
      this.username = username;
      this.password = password;
      this.accounts = []
   }
   addAccount(account) {
      this.accounts.push(account)
   }
   removeAccount(accountToRemove) {
      this.accounts.splice(this.account.indexOf(accountToRemove), 1);
   }

}
class Bank {
   constructor () {
      this.users = []
   }
   register(username, password) {
      this.users.push(new User (username, password))
   }
   login(username, password) {
      const currentUser = this.users.filter (user => user.username == username);
      console.log();
      if (currentUser && currentUser[0].password == password) {
            return currentUser[0];
      }
      console.log("Access denied");
      return undefined
      

   }
}

const savingsAcc = new SavingsAccount('Alice', 1000, 0.05);
savingsAcc.deposit(500); // Balance: 1500
savingsAcc.withdraw(200); // Balance: 1300
savingsAcc.addInterest(); // Balance: 1365 (assuming interest rate is 5%)
console.log(savingsAcc.transactions);


const bank = new Bank();

// Register users
bank.register('alice', 'password1');
bank.register('bob', 'password2');

// Login
const alice = bank.login('alice', 'password1');
const bob = bank.login('bob', 'password2');
console.log(alice);


// Create accounts
const aliceSavings = new SavingsAccount('Alice', 1000, 0.05);
alice.addAccount(aliceSavings);

const bobAccount = new BankAccount('Bob', 2000);
bob.addAccount(bobAccount);

// Perform transactions
aliceSavings.deposit(500);
bobAccount.withdraw(300);
/* future proposal 
1 Consistency in Naming Conventions:
Stick to a consistent naming convention for variables and methods. For example, you have a mix of camelCase and snake_case (#owner vs #interestRate). It's best to choose one and stick with it throughout your codebase for readability.
2 Encapsulation:
While you've used private fields (#owner and #interestRate) appropriately, consider if there are other properties or methods that should also be encapsulated to prevent unintended external access.
3 Error Handling:
Implement more robust error handling, especially in the withdraw method of BankAccount. Instead of just logging 'insufficient funds', you could throw an error or return a specific value to indicate the error condition.
4 Optimizing Transaction Logging:
Consider using a separate method for transaction logging instead of directly logging within deposit and withdraw methods. This would allow for better separation of concerns and easier maintenance.
5 Savings Account Interest Calculation:
Make sure to round the interest amount to a fixed number of decimal places to avoid issues with floating-point precision.
6 User Management:
Add functionality to prevent duplicate usernames during user registration.
Ensure passwords are securely hashed before storing them.
7 Login Functionality:
Instead of using filter, which returns an array even if there's only one matching user, consider using find to directly return the found user or undefined.
8 Getter for Username:
Your get username() method in the User class is redundant since you already have a username property. You can remove this getter.
9 Removing Account from User:
In the removeAccount method of the User class, you're trying to access the account property, which doesn't exist. It should be this.accounts.
10 Documentation:
Consider adding comments or documentation to your code to explain complex logic or to provide context for future maintainers.
*/