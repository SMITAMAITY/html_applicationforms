import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-formfour',
  templateUrl: './formfour.component.html',
  styleUrls: ['./formfour.component.css']
})
export class FormfourComponent implements OnInit {
  url1:string="http://localhost:8080/assembledata";
  url:string= "http://localhost:8080/ScreeningOne";
  userForm: FormGroup;
  mail: string;
  cv:string;
  dob:Date;
  contact:string;
  registration:Date;
  time:string;
  skills:string;
  criteria:string;
  reason:string;
 
  result:any;
  result1:any;

  constructor(private http:HttpClient,private router: Router, private formBuilder: FormBuilder) { }
  
  ngOnInit() {
   this.userForm = this.formBuilder.group({
    mail: [],
    cv:[],
    dob:[],
    contact:[],
    registration:[],
    time:[],
    skills:[],
    criteria:[],
    reason:[]
  
   });
  }
  
  fetch():void{
    this.http.get(this.url1).subscribe(data=>{
      this.result1 =data;
    })
  }
  submit():void{
    // alert('login');
   // let url = this.url+"/"+this.Username+"/"+this.password;
  //  alert(this.url);
   this.http.post(this.url,this.userForm.value).subscribe(data=>{
    //alert('Login is successful');
    
    this.result = data;
  
    this.router.navigate(['five']);
   });
  
  }

  // approve(){
  //   this.router.navigateByUrl('five');
  // }

  // reject(){
  //   this.router.navigateByUrl('');
  // }
  }

