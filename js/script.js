"use strict";
let nameArr = [];
let saldoArr = [];
function pushNameArr(name) {
    nameArr.push(name);
}
function pushSaldoArr() {
    let saldo = document.querySelector("#saldo");
    let numberSaldo = Number(saldo.value);
    saldoArr.push(numberSaldo);
}
let nameAccount = document.querySelector("input");
let nameAccountValue = nameAccount.value;
console.log(nameAccountValue);
let btnNameAccount = document.querySelector("#addName");
btnNameAccount === null || btnNameAccount === void 0 ? void 0 : btnNameAccount.addEventListener("click", pushSaldoArr);
let btnAddSaldo = document.querySelector("#addSaldo");
btnAddSaldo === null || btnAddSaldo === void 0 ? void 0 : btnAddSaldo.addEventListener("click", pushSaldoArr);
class Account {
    constructor(balanceInit, name) {
        this.balanceInit = balanceInit;
        this.name = name;
    }
    showBalanceInt() {
        alert("Il tuo saldo è :" + this.balanceInit);
    }
    deposit(amount) {
        this.balanceInit += amount;
    }
    withDraw(amount) {
        this.balanceInit = this.balanceInit - amount;
    }
}
class SonAccount extends Account {
}
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
