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
  mailId: string;
  Name:string;
  cv:any;
  dob:Date;
  contact:number;
  registrationDate:string;
  discussioDate:Date;
  position:string;
  job:string;
  timeTaken:Time;
  interview:string;
  discussionTimeTaken:Time;
  domainKnowledge:string;
  technicalExpertise:string;
  management:string;
  quality:string;
  risk:string;
  skillsMatched:string;
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
  discussioDate:[],
  position:[],
  job:[],
  timeTaken:[],
  interview:[],
  discussionTimeTaken:[],
  domainKnowledge:[],
  technicalExpertise:[],
  management:[],
  quality:[],
  risk:[],
  skillsMatched:[],
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
    this.router.navigateByUrl('nine');
  }

  reject(){
    this.router.navigateByUrl('');
  }
  }
