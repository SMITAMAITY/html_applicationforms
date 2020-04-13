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

  url:string= "http://localhost:8080/Finance";
  userForm: FormGroup;
  mailId: string;
  Name:string;
  cv:any;
  dob:Date;
  contact:number;
  registrationDate:Date;
  confirmation:string;
  venue:string;
  reason:string;
  decision:string;
  result:any;
  
  constructor(private http:HttpClient,private router: Router, private formBuilder: FormBuilder) { }
  
  ngOnInit() {
   this.userForm = this.formBuilder.group({
    mailId: [],
  Name:[],
  cv:[],
  dob:[],
  contact:[],
  registrationDate:[],
  confirmation:[],
  venue:[],
  reason:[],
  decision:[]
   });
  }
  
  submit():void{
    // alert('login');
   // let url = this.url+"/"+this.Username+"/"+this.password;
  //  alert(this.url);
   this.http.post(this.url,this.userForm.value).subscribe(data=>{
    //alert('Login is successful');
    
    this.result = data;
  
    //this.router.navigate(['four']);
   });
  
  }

  approve(){
    this.router.navigateByUrl('twelve');
  }

  reject(){
    this.router.navigateByUrl('');
  }
  }
