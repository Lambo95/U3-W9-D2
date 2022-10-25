let nameArr: string[] = [];
let saldoArr: number[] = [];

function pushNameArr(name: string) {
  nameArr.push(name);
}
function pushSaldoArr() {
  let saldo = document.querySelector("#saldo") as HTMLInputElement;
  let numberSaldo = Number(saldo.value);
  saldoArr.push(numberSaldo);
}
let nameAccount = document.querySelector("input") as HTMLInputElement;
let nameAccountValue = nameAccount.value;
console.log(nameAccountValue);

let btnNameAccount = document.querySelector("#addName");
btnNameAccount?.addEventListener("click", pushSaldoArr);

let btnAddSaldo = document.querySelector("#addSaldo");
btnAddSaldo?.addEventListener("click", pushSaldoArr);

class Account {
  name: string;
  balanceInit: number;

  constructor(balanceInit: number, name: string) {
    this.balanceInit = balanceInit;
    this.name = name;
  }

  showBalanceInt() {
    alert("Il tuo saldo è :" + this.balanceInit);
  }

  deposit(amount: number) {
    this.balanceInit += amount;
  }

  withDraw(amount: number) {
    this.balanceInit = this.balanceInit - amount;
  }
}

class SonAccount extends Account {}

class MotherAccount extends Account {
  addInterest() {
    let addInterest = (this.balanceInit * 10) / 100;
    this.balanceInit += addInterest;
  }
}

let newAccount = new Account(saldoArr[0], nameArr[0]);

// let sonAccount = new SonAccount(1000);

// sonAccount.deposit(200);

// console.log(sonAccount.balanceInit);

// let motherAccount = new MotherAccount(5000);

// motherAccount.addInterest();

// console.log(motherAccount.balanceInit);
