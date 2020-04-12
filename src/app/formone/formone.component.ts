import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formone',
  templateUrl: './formone.component.html',
  styleUrls: ['./formone.component.css']
})
export class FormoneComponent implements OnInit {

  
url:string= "http://localhost:8080/DemandDetails";
userForm: FormGroup;
jrRRID: number;
jobTitle:string;
jobOverview:string;
experience:number;
skillsRequired:string;
requestorId:string;
requestorPUBU:string;
requestorDepartment:string;
result:any;

constructor(private http:HttpClient,private router: Router, private formBuilder: FormBuilder) { }

ngOnInit() {
 this.userForm = this.formBuilder.group({
jrRRID:new FormControl(null, Validators.required),
jobTitle:[],
jobOverview:[],
experience:[],
skillsRequired:[],
requestorId:[],
requestorPUBU:[],
requestorDepartment:[]

 });
}

submit():void{
  // alert('login');
 // let url = this.url+"/"+this.Username+"/"+this.password;
//  alert(this.url);
 this.http.post(this.url,this.userForm.value).subscribe(data=>{
  //alert('Login is successful');
  
  this.result = data;

  this.router.navigate(['two']);
 });

}
}