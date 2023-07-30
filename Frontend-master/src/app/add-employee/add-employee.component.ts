import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'

interface Employee {
  id:number;
  name: string;
  gender:string;
  department: string;
  salary:number;
}

@Component({
  selector: 'app-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  empDetail!:FormGroup;
  employee: Employee = {
    id:0,
    name: '',
    gender: '',
    department: '',
    salary:0
  };

  onSubmit() {
    // Here, you can perform any additional logic like sending the employee data to a server or storing it in a service.
    console.log('Employee Data:', this.employee);
  }
}
