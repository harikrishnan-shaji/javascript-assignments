// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has 
// totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

// "use strict";
// const prompt = require("prompt-sync")({sigint: true});

try{
 let personAccount = {
    firstName: "Rakshit",
    lastName: "koyani",
    incomes: [
      {
        incomeType: "Salary",
        income: 300000,
        description:"income from salary per annum",
      },
      {
        incomeType: "stocks",
        income: 10000,
        description: "Income from stocks per annum",
      },
      {
        incomeType: "propertyRent",
        income: 15000,
        description: "Income from Propertie's rent per annum",
      },
    ],

    expenses: [
      {
      expenceType: "Transportation",
      expence: 30000,
      description: "Vehical expences per annum",
    },
    {
      expenceType: "Groceries",
      expence: 20000,
      description: "Groceries expences for family per annum",
    },
    {
      expenceType: "Home and shopping",
      expence: 30000,
      description: "Home and shopping expences per annum",
      },
      {
      expenceType: "Insurance",
      expence: 10000,
      description: "Insurance expence per annum",
      },
      {
      expenceType: "Bills",
      expence: 60000,
      description: "This Includes light-bill,gas-bill,various-tax etc.",
      },
      {
      expenceType: "additionalExpenses",
      expence: 70000,
      description: "Includes all kind of extra expenses",
      },
  ],


     totalIncome: function(){
      let total = 0;
      for(const income of this.incomes){
        total += income.income;
      }
      return total;
    },

    totalExpense: function(){
      let total = 0;
      for(const expense of this.expenses){
        total += expense.expence;
      }
      return total;
    },
  
    accountInfo: function(){
      console.log(`
      your account info are as follows:
      Name: ${this.firstName} ${this.lastName}
      Your total income is: ${this.totalIncome()}
      Your total expense is: ${this.totalExpense()}
      Remaining balance is: ${this.accountBalance()}
      `);
    },

    addIncome:function(){
      // let addIncomeType, addIncome, addIncomeDescription;
      let addI = {
        incomeType: addIncomeType,
        income: 20000,
        description: addIncomeDescription,
      };
      this.incomes.push(addI);
    },
  
    addExpense: function(){
      // let addExpenseType, addExpense, addExpenseDescription;
      let addE = {
        expenceType: addExpenseType,
        expence: 10000,
        description: addExpenseDescription,
      };
      this.expenses.push(addE);
    },
  
    accountBalance:function(){
      let accountBalance = this.totalIncome() - this.totalExpense();
      // console.log("Your account balance is:");
      return ` ${accountBalance}`;
    }
    //  totalIncome - totalExpense;
  }
  
  console.log(personAccount.totalIncome());
  console.log(personAccount.totalExpense());
  console.log(personAccount.accountBalance());
  personAccount.accountInfo();
}

catch(err){
  console.log(err);
};