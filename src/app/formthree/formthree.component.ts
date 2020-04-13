import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-formthree',
  templateUrl: './formthree.component.html',
  styleUrls: ['./formthree.component.css']
})
export class FormthreeComponent implements OnInit {
  url:string= "http://localhost:8080/AssembleData";
  userForm: FormGroup;
  cv:string;
  mailId:string;
  source:string;
  dob:Date;
  contact:number;
  registrationDate:Date;
  
  result:any;
  
  constructor(private http:HttpClient,private router: Router, private formBuilder: FormBuilder) { }
  
  ngOnInit() {
   this.userForm = this.formBuilder.group({

  cv:[],
  mailId:[],
  source:[],
  dob:[],
  contact:[],
  registrationDate:[]
  
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
   this.router.navigate(['four']);
  }


  }
