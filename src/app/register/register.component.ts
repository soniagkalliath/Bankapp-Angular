import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname="";
  accno="";
  pswd="";
  pin="";

  constructor(private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
  }
register(){
  const result = this.dataService.register(this.uname,
    this.accno,
    this.pin,
    this.pswd)
    if(result){
      this.router.navigateByUrl("");
    }
}
}
