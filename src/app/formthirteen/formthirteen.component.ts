import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Time } from '@angular/common';

@Component({
  selector: 'app-formthirteen',
  templateUrl: './formthirteen.component.html',
  styleUrls: ['./formthirteen.component.css']
})
export class FormthirteenComponent implements OnInit {


  url:string= "http://localhost:8080/FinalExceptionApproval";
  userForm: FormGroup;
  mail: string;
  Name:string;
  cv:string;
  dob:Date;
  contact:string;
  proof:string;
  registration:Date;
  approver:string;
  confirmation:string;
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
    proof:[],
    registration:[],
    approver:[],
    confirmation:[],
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
  
    this.router.navigate(['fourteen']);
   });
  
  }

  // approve(){
  //   this.router.navigateByUrl('fourteen');
  // }

  // reject(){
  //   this.router.navigateByUrl('');
  // }
  }
