import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  accno=" "
  pwd=" "
  constructor(private router:Router, private dataService:DataService) { }

  accnoChange(event){
    //alert("account number changed")
    this.accno=event.target.value
    //console.log(this.accno)
  }

  pswdChange(event){
    this.pwd = event.target.value
  }
  ngOnInit(): void {
  }
  login(){
    var accnum = parseInt(this.accno)
    var password1 = this.pwd
  
   try {
 
    if(isNaN(accnum)) throw "Not a valid account number"
    if(accnum.toString().length<2) throw "Not valid"
   } 
   catch(err){

    alert(err);
   }
   

    let data = this.dataService.accountDetails;
    

    if (accnum in data) {
      let pswd1 = data[accnum].pswd;
      if (pswd1 == password1) {
        alert("Successful login");
        this.router.navigateByUrl("dashboard");
      }
      else {
        alert("Incorrect password");
      }
    }
    else {
      alert("User doesnot exist");
    }
  }
}
