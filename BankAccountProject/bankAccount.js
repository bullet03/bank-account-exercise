const InsufficientFundsException = require("./insufficientFundsException");

/**
 * Represents a bank account.
 */
class BankAccount {

    constructor(accountNumber, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }


    deposit(amount) {
        // Intentionally missing validation for exercise purposes.
        this.balance += amount;
    }


    withdraw(amount) {
        if (amount > this.balance) {
            throw new InsufficientFundsException("Not enough funds to withdraw.");
        }
        this.balance -= amount;
    }

    transfer(targetAccount, amount) {
        this.withdraw(amount);
        targetAccount.deposit(amount);
    }
}

module.exports = BankAccount;
