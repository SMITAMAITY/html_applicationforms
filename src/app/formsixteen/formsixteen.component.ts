import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Time } from '@angular/common';

@Component({
  selector: 'app-formsixteen',
  templateUrl: './formsixteen.component.html',
  styleUrls: ['./formsixteen.component.css']
})
export class FormsixteenComponent implements OnInit {



  url:string= "http://localhost:8080/HR";
  userForm: FormGroup;
  mailId: string;
  Name:string;
  cv:any;
  dob:Date;
  contact:number;
  registrationDate:Date;
  discussioDate:Date;
  position:string;
  job:string;
  timeTaken:Time;
  interview:string;
  domainKnowledge:string;
  management:string;
  quality:string;
  risk:string;
  skillsMatched:string;
  behaviour:string;
  personalEffectiveness:string;
  confirmation:string;
  noticePeriod:Time;
  bond:Time;
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
  domainKnowledge:[],
  management:[],
  quality:[],
  risk:[],
  skillsMatched:[],
  behaviour:[],
  personalEffectiveness:[],
  confirmation:[],
  noticePeriod:[],
  bond:[],
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
    this.router.navigateByUrl('ten');
  }

  reject(){
    this.router.navigateByUrl('');
  }
  }
