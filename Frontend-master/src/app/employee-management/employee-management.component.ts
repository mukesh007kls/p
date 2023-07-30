import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Employee } from '../model/employee';
import { EmployeeService } from '../employeee-service/employee.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
  empDetail !:FormGroup;
  empObj : Employee = new Employee();
  empList: Employee[]=[];
  
  
  constructor(private formBuilder : FormBuilder, private empService : EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployee();
    this.empDetail=this.formBuilder.group({
      id : [''],
      name : [''],
      gender :[''],
      department :[''],
      salary :['']
    });

  }

  addEmployee(){
    this.empObj.id=this.empDetail.value.id;
    this.empObj.name=this.empDetail.value.name;
    this.empObj.gender=this.empDetail.value.gender;
    this.empObj.department=this.empDetail.value.department;
    this.empObj.salary=this.empDetail.value.salary;

    this.empService.addEmployee(this.empObj).subscribe(res=>{
      console.log(res);
      this.getAllEmployee();
    },err=>{
      console.log(err);
    });
  }

  getAllEmployee(){
    
  }

}
