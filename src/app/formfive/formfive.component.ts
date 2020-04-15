import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Time } from '@angular/common';

@Component({
  selector: 'app-formfive',
  templateUrl: './formfive.component.html',
  styleUrls: ['./formfive.component.css']
})
export class FormfiveComponent implements OnInit {
  url:string= "http://localhost:8080/RecruitmentRoundOne";
  userForm: FormGroup;
  mail: string;
  cv:string;
  dob:Date;
  contact:number;
  registration:Date;
  time:Time;
  discussiontime:Time;
  skills:string;
  criteria:string;
  internships:string;
  trainings:string;
  questions:string;
  reason:string;
  
  result:any;
  
  constructor(private http:HttpClient,private router: Router, private formBuilder: FormBuilder) { }
  
  ngOnInit() {
   this.userForm = this.formBuilder.group({
    mail: [],
    cv:[],
    dob:[],
    contact:[],
    registration:[],
    time:[],
    discussiontime:[],
    skills:[],
    criteria:[],
    internships:[],
    trainings:[],
    questions:[],
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
  
    this.router.navigate(['six']);
   });
  
  }

  // approve(){
  //   this.router.navigateByUrl('six');
  // }

  // reject(){
  //   this.router.navigateByUrl('');
  // }
  }
