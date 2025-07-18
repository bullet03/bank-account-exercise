const BankAccount = require('../BankAccountProject/bankAccount');

describe('BankAccount', () => {
    // Deposit tests
    test('Deposit_WithPositiveAmount_IncreasesBalance', () => {
        const account = new BankAccount('ACC789', 100);
        account.deposit(50);
        expect(account.balance).toBe(150);
    });

    test('Deposit_WithZeroAmount_ThrowsException', () => {
        const account = new BankAccount('ACC789', 100);
        expect(() => account.deposit(0)).toThrow(Error);
    });

    test('Deposit_WithNegativeAmount_ThrowsException', () => {
        const account = new BankAccount('ACC789', 100);
        expect(() => account.deposit(-50)).toThrow(Error);
    });

    // Withdraw tests
    test('Withdraw_WithPositiveAmount_DecreasesBalance', () => {
        const account = new BankAccount('ACC123', 200);
        account.withdraw(50);
        expect(account.balance).toBe(150);
    });

    test('Withdraw_WithZeroAmount_ThrowsException', () => {
        const account = new BankAccount('ACC123', 200);
        expect(() => account.withdraw(0)).toThrow(Error);
    });

    test('Withdraw_WithNegativeAmount_ThrowsException', () => {
        const account = new BankAccount('ACC123', 200);
        expect(() => account.withdraw(-50)).toThrow(Error);
    });

    test('Withdraw_WithAmountGreaterThanBalance_ThrowsInsufficientFundsException', () => {
        const account = new BankAccount('ACC123', 100);
        expect(() => account.withdraw(150)).toThrow('Not enough funds to withdraw.');
    });

    // Transfer tests
    test('Transfer_WithValidAmount_TransfersFunds', () => {
        const source = new BankAccount('SRC', 300);
        const target = new BankAccount('TGT', 100);
        source.transfer(target, 50);
        expect(source.balance).toBe(250);
        expect(target.balance).toBe(150);
    });

    test('Transfer_WithAmountGreaterThanBalance_ThrowsInsufficientFundsException', () => {
        const source = new BankAccount('SRC', 30);
        const target = new BankAccount('TGT', 100);
        expect(() => source.transfer(target, 50)).toThrow('Not enough funds to withdraw.');
    });

    test('Transfer_WithZeroAmount_ThrowsException', () => {
        const source = new BankAccount('SRC', 100);
        const target = new BankAccount('TGT', 100);
        expect(() => source.transfer(target, 0)).toThrow(Error);
    });

    test('Transfer_WithNegativeAmount_ThrowsException', () => {
        const source = new BankAccount('SRC', 100);
        const target = new BankAccount('TGT', 100);
        expect(() => source.transfer(target, -10)).toThrow(Error);
    });

    test('Transfer_ToInvalidTarget_ThrowsException', () => {
        const source = new BankAccount('SRC', 100);
        expect(() => source.transfer(null, 10)).toThrow(Error);
        expect(() => source.transfer({}, 10)).toThrow(Error);
    });
});