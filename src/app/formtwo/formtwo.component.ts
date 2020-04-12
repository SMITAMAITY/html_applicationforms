import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-formtwo',
  templateUrl: './formtwo.component.html',
  styleUrls: ['./formtwo.component.css']
})
export class FormtwoComponent implements OnInit {

  url:string= "http://localhost:8080/RecruitmentUnderstanding";
  userForm: FormGroup;
  jobTitle:string;
  jobOverview:string;
  resourcesNeeded:number;
  skillsRequired:string;
  criteria:string;
  requestorId:string;
  requestorPUBU:string;
  requestorDepartment:string;
  result:any;

  constructor(private http:HttpClient,private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
   this.userForm = this.formBuilder.group({
  jrRRID:new FormControl(null, Validators.required),
  jobTitle:new FormControl(null, Validators.required),
  jobOverview:new FormControl(null, Validators.required),
  resourcesNeeded:new FormControl(null, Validators.required),
  skillsRequired:new FormControl(null, Validators.required),
  criteria:new FormControl(null, Validators.required),
  requestorId:new FormControl(null, Validators.required),
  requestorPUBU:new FormControl(null, Validators.required),
  requestorDepartment:new FormControl(null, Validators.required)
   });
  }

  submit():void{
 
   this.http.post(this.url,this.userForm.value).subscribe(data=>{
    alert('successful');
    
    this.result = data;

    this.router.navigate(['three']);
   });

  }
}