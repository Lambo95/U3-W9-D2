class Account {
  private name: string;
  private balanceInit: number;

  constructor(balanceInit: number, name: string) {
    this.balanceInit = balanceInit;
    this.name = name;
  }

  showAccount() {
    alert("Benvenuto : " + this.name);
  }

  showBalanceInt() {
    alert("Il tuo saldo è :" + this.balanceInit);
  }

  deposit(amount: number) {
    this.balanceInit += amount;
    return this.balanceInit;
  }

  withDraw(amount: number) {
    this.balanceInit = this.balanceInit - amount;
  }

  public set nameAccount(params: string) {
    this.name = params;
  }

  public get nameAccount(): string {
    return this.name;
  }
}

class SonAccount extends Account {}

class MotherAccount extends Account {
  addInterest() {
    let addInterest = (this.balanceInit * 10) / 100;
    this.balanceInit += addInterest;
  }
}

function setName() {
  let nameAccount = document.querySelector("input") as HTMLInputElement;
  let nameAccountValue = nameAccount.value;
  return nameAccountValue;
}
function setSaldo() {
  let saldo = document.querySelector("#saldo") as HTMLInputElement;
  let numberSaldo = Number(saldo.value);
  return numberSaldo;
}

let btnNameAccount = document.querySelector("#addName");
btnNameAccount?.addEventListener("click", setName);

let btnAddSaldo = document.querySelector("#addSaldo");
btnAddSaldo?.addEventListener("click", setSaldo);

let newAccount = new Account(setSaldo(), setName());

let btnShowSaldo = document.querySelector("#showSaldo");
btnShowSaldo?.addEventListener("click", newAccount.showBalanceInt);

let btnPrelievo = document.querySelector("#prelievo");
let newAccountPrelievo = () => newAccount.withDraw(setSaldo());
// btnPrelievo?.addEventListener("click", newAccount.withDraw(25));
btnPrelievo?.addEventListener("click", newAccountPrelievo);
// let sonAccount = new SonAccount(1000);

// sonAccount.deposit(200);

// console.log(sonAccount.balanceInit);

// let motherAccount = new MotherAccount(5000);

// motherAccount.addInterest();

// console.log(motherAccount.balanceInit);
