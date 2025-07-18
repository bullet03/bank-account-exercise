const InsufficientFundsException = require('./insufficientFundsException');
/**
 * Represents a bank account.
 */
class BankAccount {

    /**
     * The account number that uniquely identifies the bank account.
     * @type {string|number}
     */
    accountNumber;

    /**
     * The current balance of the bank account.
     * @type {number}
     */
    balance;

    /**
     * Creates a new BankAccount instance.
     * @param {string|number} accountNumber - The unique identifier for the account.
     * @param {number} [initialBalance=0] - The initial balance for the account.
     */
    constructor(accountNumber, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    /**
     * Adds the specified amount to the account balance.
     * Validates that the deposit amount is greater than zero.
     * Throws an Error if the amount is not valid.
     * In a real-world scenario, you might use a specific error type.
     * @param {number} amount - The amount to deposit (must be greater than zero).
     * @throws {Error} If the amount is not a positive number.
     */
    deposit(amount) {
        // Check that the deposit amount is a number and greater than zero.
        // This prevents depositing negative, zero, or non-numeric values.
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Deposit amount must be a number greater than zero.");
        }
        // Add the valid amount to the account balance.
        this.balance += amount;
    }

    /**
     * Withdraws the specified amount from the account balance.
     * Throws InsufficientFundsException if the balance is insufficient.
     * Throws Error if the amount is not a positive number.
     * @param {number} amount - The amount to withdraw (must be greater than zero).
     * @throws {Error} If the amount is not a positive number.
     * @throws {InsufficientFundsException} If the balance is insufficient.
     */
    withdraw(amount) {
        // Validate that the withdrawal amount is a positive number.
        // Prevents negative, zero, or non-numeric withdrawals.
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Withdrawal amount must be a number greater than zero.");
        }
        // Check if the account has enough funds for the withdrawal.
        if (amount > this.balance) {
            // Throw a custom exception if there are not enough funds.
            throw new InsufficientFundsException("Not enough funds to withdraw.");
        }
        // Deduct the valid amount from the account balance.
        this.balance -= amount;
    }

    /**
     * Transfers a specified amount from this account to a target account.
     * Withdraws the amount from the current account and deposits it into the target account.
     *
     * @param {BankAccount} targetAccount - The account to receive the transferred funds.
     * @param {number} amount - The amount of money to transfer.
     * @throws {Error} If the withdrawal fails (e.g., insufficient funds) or if the target account is invalid.
     */
    transfer(targetAccount, amount) {
        // Ensure the target account is not null or undefined.
        // This prevents runtime errors when accessing properties or methods.
        if (!targetAccount) {
            throw new Error("Target account must not be null or undefined.");
        }
        // Ensure the target account has a deposit method.
        // This check helps confirm the target is a valid BankAccount instance.
        if (typeof targetAccount.deposit !== "function") {
            throw new Error("Target account must have a deposit method.");
        }
        // Attempt to withdraw the specified amount from the current account.
        // This will throw if there are insufficient funds or invalid amount.
        this.withdraw(amount);
        // Deposit the withdrawn amount into the target account.
        targetAccount.deposit(amount);
    }
}

module.exports = BankAccount;
