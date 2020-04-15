import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Time } from '@angular/common';

@Component({
  selector: 'app-formeight',
  templateUrl: './formeight.component.html',
  styleUrls: ['./formeight.component.css']
})
export class FormeightComponent implements OnInit {

  url:string= "http://localhost:8080/L2Panel";
  userForm: FormGroup;
  mail: string;
  Name:string;
  cv:string;
  dob:Date;
  contact:string;
  registration:Date;
  discussiodate:Date;
  position:string;
  job:string;
  time:string;
  interview:string;
  discussiontime:string;
  domainknowledge:string;
  technicalexpertise:string;
  management:string;
  quality:string;
  risk:string;
  skills:string;
  behaviour:string;
  personaleffectivness:string;
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
    discussiodate:[],
    position:[],
    job:[],
    time:[],
    interview:[],
    discussiontime:[],
    domainknowledge:[],
    technicalexpertise:[],
    management:[],
    quality:[],
    risk:[],
    skills:[],
    behaviour:[],
    personaleffectivness:[],
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
   this.router.navigate(['nine']);
  }

  // approve(){
  //   this.router.navigateByUrl('nine');
  // }

  // reject(){
  //   this.router.navigateByUrl('');
  // }
  }
