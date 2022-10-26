"use strict";
function setName() {
    let nameAccount = document.querySelector("input");
    let nameAccountValue = nameAccount.value;
    return nameAccountValue;
}
function setSaldo() {
    let saldo = document.querySelector("#saldo");
    let numberSaldo = Number(saldo.value);
    return numberSaldo;
}
let btnNameAccount = document.querySelector("#addName");
btnNameAccount === null || btnNameAccount === void 0 ? void 0 : btnNameAccount.addEventListener("click", setName);
let btnAddSaldo = document.querySelector("#addSaldo");
btnAddSaldo === null || btnAddSaldo === void 0 ? void 0 : btnAddSaldo.addEventListener("click", setSaldo);
class Account {
    constructor(balanceInit, name) {
        this.balanceInit = balanceInit;
        this.name = name;
    }
    showAccount() {
        alert("Benvenuto : " + this.name);
    }
    showBalanceInt() {
        alert("Il tuo saldo è :" + this.balanceInit);
    }
    deposit(amount) {
        this.balanceInit += amount;
        return this.balanceInit;
    }
    withDraw(amount) {
        this.balanceInit = this.balanceInit - amount;
        return this.balanceInit;
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
let newAccount = new Account(setSaldo, setName);
let btnShowSaldo = document.querySelector("#showSaldo");
btnShowSaldo === null || btnShowSaldo === void 0 ? void 0 : btnShowSaldo.addEventListener("click", newAccount.showBalanceInt);
let btnPrelievo = document.querySelector("#prelievo");
let newAccountPrelievo = () => newAccount.withDraw;
btnPrelievo === null || btnPrelievo === void 0 ? void 0 : btnPrelievo.addEventListener("click", newAccountPrelievo);
// let sonAccount = new SonAccount(1000);
// sonAccount.deposit(200);
// console.log(sonAccount.balanceInit);
// let motherAccount = new MotherAccount(5000);
// motherAccount.addInterest();
// console.log(motherAccount.balanceInit);
