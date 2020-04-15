import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Time } from '@angular/common';

@Component({
  selector: 'app-formnine',
  templateUrl: './formnine.component.html',
  styleUrls: ['./formnine.component.css']
})
export class FormnineComponent implements OnInit {


  url:string= "http://localhost:8080/HR";
  userForm: FormGroup;
  mail: string;
  Name:string;
  cv:string;
  dob:Date;
  contact:string;
  registration:Date;
  discussiondate:Date;
  position:string;
  job:string;
  time:string;
  interview:string;
  domainknowledge:string;
  management:string;
  quality:string;
  risk:string;
  skills:string;
  behaviour:string;
  personaleffectiveness:string;
  confirmation:string;
  noticePeriod:Date;
  bond:string;
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
  discussiondate:[],
  position:[],
  job:[],
  time:[],
  interview:[],
  domainknowledge:[],
  management:[],
  quality:[],
  risk:[],
  skills:[],
  behaviour:[],
  personaleffectiveness:[],
  confirmation:[],
  noticePeriod:[],
  bond:[],
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
   this.router.navigate(['ten']);
  }

  // approve(){
  //   this.router.navigateByUrl('ten');
  // }

  // reject(){
  //   this.router.navigateByUrl('');
  // }
  }
