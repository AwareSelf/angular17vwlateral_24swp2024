import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Emp } from '../model/Emp';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empreactive',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule], //step 1
  templateUrl: './empreactive.component.html',
  styleUrl: './empreactive.component.css'
})
export class EmpreactiveComponent {

   empform!:FormGroup;

  //step 2: inject a formbuilder service
  constructor(public frmgroup:FormBuilder)
  {
    //step3: create a form in ts class file
     this.createform();
  }

  createform()
  {
     this.empform = this.frmgroup.group({
      empid:['1',Validators.required],
      empname:['Ram',[Validators.required,Validators.pattern("^[a-zA-Z]*$" )]],
    
      empaddress:this.frmgroup.group({
        state:['Maharashtra',Validators.required],
        city:'Mumbai'
      }),

      empsal:['2000',Validators.required],
     })
  }

  mysubmit()
  {
     console.log('inside form mysubmit method');
     console.log("empform status:"+this.empform.status);
     console.log("empform empid status:"+this.empform.get('empid')?.status)
     console.log("empform empname status:"+this.empform.get('empname')?.status)
     console.log("empform empsal status:"+this.empform.get('empsal')?.status)

     console.log('please find emp form value below:');
     console.log(this.empform.value);
     console.log(this.empform.get('empid')?.value)
     console.log(this.empform.get('empname')?.value)
     console.log(this.empform.get('empsal')?.value)

     if(this.empform.status=='VALID')
     {
     let empid = this.empform.get('empid')?.value;
     let empname = this.empform.get('empname')?.value;
     let empsal = this.empform.get('empsal')?.value;
     let emp = new Emp(empid,empname,empsal);
     console.log(emp.toString());
     //this.empservice.addemp(emp);
     }
     else
     {
      console.log('form status is invalid cannot create emp');
     }

  }

}
