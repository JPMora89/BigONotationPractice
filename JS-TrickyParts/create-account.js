function createAccount(pin, initialDeposit) {
    let balance = initialDeposit;
    let accountPin = pin;
  
    return {
      checkBalance: function(pin) {
        if (pin === accountPin) {
          return `Current balance: $${balance}.`;
        } else {
          return "Invalid PIN.";
        }
      },
  
      deposit: function(pin, amount) {
        if (pin === accountPin) {
          balance += amount;
          return `Successfully deposited $${amount}. Current balance: $${balance}.`;
        } else {
          return "Invalid PIN.";
        }
      },
  
      withdraw: function(pin, amount) {
        if (pin === accountPin) {
          if (amount > balance) {
            return "Withdrawal amount exceeds account balance. Transaction cancelled.";
          }
          balance -= amount;
          return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
        } else {
          return "Invalid PIN.";
        }
      },
  
      changePin: function(oldPin, newPin) {
        if (oldPin === accountPin) {
          accountPin = newPin;
          return "PIN successfully changed!";
        } else {
          return "Invalid PIN.";
        }
      }
    };
  }

module.exports = { createAccount };
