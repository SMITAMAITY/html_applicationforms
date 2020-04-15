import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Time } from '@angular/common';


@Component({
  selector: 'app-formeleven',
  templateUrl: './formeleven.component.html',
  styleUrls: ['./formeleven.component.css']
})
export class FormelevenComponent implements OnInit {

  url:string= "http://localhost:8080/FinanceApproval";
  userForm: FormGroup;
  mail: string;
  Name:string;
  cv:string;
  dob:Date;
  contact:string;
  registration:Date;
  confirmation:string;
  venue:string;
  reason:string;
 
  result:any;
  
  constructor(private http:HttpClient,private router: Router, private formBuilder: FormBuilder) { }
  
  ngOnInit() {
   this.userForm = this.formBuilder.group({
    mail: [],
  Name:[],
  cv:[],
  dob:[],
  contact:[],
  registration:[],
  confirmation:[],
  venue:[],
  reason:[]
   });
  }
  
  submit():void{
    // alert('login');
   // let url = this.url+"/"+this.Username+"/"+this.password;
  //  alert(this.url);
   this.http.post(this.url,this.userForm.value).subscribe(data=>{
    //alert('Login is successful');
    
    this.result = data;
  
   
   });
   this.router.navigate(['twelve']);
  }

  }
