# Bank Account Exercise

A comprehensive bank account simulation project built in JavaScript that demonstrates object-oriented programming principles, error handling, and test-driven development practices.

## Project Purpose

This project implements a simple but robust bank account system that supports basic banking operations including deposits, withdrawals, and transfers between accounts. The implementation focuses on:

- **Data validation** - Ensuring all operations receive valid inputs
- **Error handling** - Using custom exceptions for business logic violations
- **Object-oriented design** - Clean class structure with proper encapsulation
- **Test coverage** - Comprehensive unit tests covering all scenarios

## Project Structure

The project is organized into two main directories:

```
BankAccountExercise/
├── BankAccountProject/           # Main application code
│   ├── bankAccount.js           # Core BankAccount class
│   ├── insufficientFundsException.js # Custom exception class
│   ├── program.js               # Demo application
│   └── package.json             # Application dependencies
├── BankAccountProject.Tests/    # Test suite
│   ├── bankAccount.test.js      # Comprehensive unit tests
│   └── package.json             # Test dependencies
└── README.md                    # This file
```

## Features Implemented

### BankAccount Class
- **Constructor**: Initialize account with account number and optional initial balance
- **Deposit**: Add funds with validation for positive amounts
- **Withdraw**: Remove funds with insufficient balance protection
- **Transfer**: Move funds between accounts with full validation
- **Balance tracking**: Automatic balance updates for all operations

### Error Handling
- **InsufficientFundsException**: Custom exception for withdrawal/transfer failures
- **Input validation**: Prevents negative, zero, or non-numeric amounts
- **Target validation**: Ensures transfer targets are valid BankAccount instances

### Comprehensive Testing
- **Deposit tests**: Positive amounts, zero/negative amount validation
- **Withdrawal tests**: Valid withdrawals, insufficient funds scenarios
- **Transfer tests**: Successful transfers, validation edge cases
- **Error scenarios**: All exception cases thoroughly tested

## Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

## Installation

1. **Clone or download** the project to your local machine
2. **Navigate** to the project root directory:
   ```powershell
   cd "c:\Users\v-bulats\Documents\projects\BankAccountExercise"
   ```

3. **Install dependencies** for the main application:
   ```powershell
   cd BankAccountProject
   npm install
   ```

4. **Install dependencies** for the test suite:
   ```powershell
   cd ..\BankAccountProject.Tests
   npm install
   ```

## Running the Application

### Demo Application
To run the demonstration program that shows the bank account functionality:

```powershell
cd BankAccountProject
npm start
```

This will execute `program.js`, which demonstrates:
- Creating bank accounts with initial balances
- Making deposits and withdrawals
- Transferring funds between accounts
- Handling insufficient funds scenarios

### Expected Output
```
Initial Balances:
Account ACC123: 1000
Account ACC456: 500
Error during withdrawal: Not enough funds to withdraw.
Final Balances:
Account ACC123: 900
Account ACC456: 800
```

## Running Tests

### Complete Test Suite
To run all unit tests:

```powershell
cd BankAccountProject.Tests
npm test
```

### Test Coverage
The test suite includes:
- ✅ **12 test cases** covering all functionality
- ✅ **Positive scenarios** - Normal operations work correctly
- ✅ **Edge cases** - Zero and negative amount validation
- ✅ **Error conditions** - Insufficient funds and invalid targets
- ✅ **Business logic** - Proper balance updates and transfers

### Expected Test Output
```
 PASS  bankAccount.test.js
  BankAccount
    ✓ Deposit_WithPositiveAmount_IncreasesBalance
    ✓ Deposit_WithZeroAmount_ThrowsException
    ✓ Deposit_WithNegativeAmount_ThrowsException
    ✓ Withdraw_WithPositiveAmount_DecreasesBalance
    ✓ Withdraw_WithZeroAmount_ThrowsException
    ✓ Withdraw_WithNegativeAmount_ThrowsException
    ✓ Withdraw_WithAmountGreaterThanBalance_ThrowsInsufficientFundsException
    ✓ Transfer_WithValidAmount_TransfersFunds
    ✓ Transfer_WithAmountGreaterThanBalance_ThrowsInsufficientFundsException
    ✓ Transfer_WithZeroAmount_ThrowsException
    ✓ Transfer_WithNegativeAmount_ThrowsException
    ✓ Transfer_ToInvalidTarget_ThrowsException

Test Suites: 1 passed, 1 total
Tests:       12 passed, 12 total
```

## Key Implementation Details

### Validation Strategy
- All monetary amounts must be positive numbers
- Account transfers require valid target accounts
- Custom exceptions provide clear error messages

### Design Patterns
- **Constructor pattern** for account initialization
- **Method chaining** through consistent return behavior
- **Exception handling** for robust error management

### Code Quality
- **JSDoc comments** for comprehensive documentation
- **Descriptive method names** following C# naming conventions
- **Separation of concerns** between business logic and presentation

## Development Notes

This project demonstrates best practices for:
- **Object-oriented JavaScript** development
- **Unit testing** with Jest framework
- **Error handling** with custom exceptions
- **Input validation** and defensive programming
- **Documentation** through clear comments and naming

## Future Enhancements

Potential improvements could include:
- Account history tracking
- Interest calculation functionality
- Multiple currency support
- Persistence layer (database integration)
- Web API endpoints
- Enhanced security features

---

*This project serves as a practical example of implementing business logic with proper validation, error handling, and comprehensive testing in JavaScript.*
