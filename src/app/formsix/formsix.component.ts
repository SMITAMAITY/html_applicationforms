import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Time } from '@angular/common';

@Component({
  selector: 'app-formsix',
  templateUrl: './formsix.component.html',
  styleUrls: ['./formsix.component.css']
})
export class FormsixComponent implements OnInit {
  url:string= "http://localhost:8080/ScreeningTwo";
  userForm: FormGroup;
  mailId: string;
  cv:string;
  dob:Date;
  contact:number;
  registrationDate:string;
  timeTaken:Time;
  discussionTimeTaken:Time;
  skillsMatched:string;
  criteriaMatched:string;
  internships:string;
  trainings:string;
  
  reason:string;
  decision:string;
  result:any;
  
  constructor(private http:HttpClient,private router: Router, private formBuilder: FormBuilder) { }
  
  ngOnInit() {
   this.userForm = this.formBuilder.group({
    mailId: [],
    cv:[],
    dob:[],
    contact:[],
    registrationDate:[],
    timeTaken:[],
    discussionTimeTaken:[],
    skillsMatched:[],
    criteriaMatched:[],
    internships:[],
    trainings:[],
  
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
    this.router.navigateByUrl('seven');
  }

  reject(){
    this.router.navigateByUrl('');
  }
  }
