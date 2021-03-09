import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails = {//accountdetail is an obj of bank
    1001: { name: "user1", accno: 1001, pin: 2345, pswd: "userone", balance: 3000 },//another obj
    1002: { name: "user2", accno: 1002, pin: 2445, pswd: "usertwo", balance: 3000 },
    1003: { name: "user3", accno: 1003, pin: 2343, pswd: "userthree", balance: 3000 },
    1004: { name: "user4", accno: 1004, pin: 2245, pswd: "userfour", balance: 3000 },
    1005: { name: "user5", accno: 1005, pin: 2355, pswd: "userfive", balance: 3000 }
  }
  constructor() { }
  register(name,accno,pin,pswd){
    if(accno in this.accountDetails){
      alert("Account is already registered, Kindly login to the app")
      return false;
    }
    this.accountDetails[accno]={
      name,
      accno,
      pin,
      pswd,
      balance:0
    }
    alert("Successfully created an account please Log in")
    return true;
  }
 
}
