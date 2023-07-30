import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Employee } from "../model/employee";
import { Observable } from 'rxjs';
@Injectable({
    providedIn:"root"
})
export class EmployeeService{
    addEmployeeUrl : string;
    getEmployeeUrl :string;
    updateEmployeeUrl : string;
    deleteEmployeeUrl :string;

    constructor(private http : HttpClient){
        this.addEmployeeUrl="http://localhost:7826/employee/createEmp";
        this.getEmployeeUrl="http://localhost:7826/employee/getEmployee";
        this.updateEmployeeUrl="http://localhost:7826/employee/updateEmployee";
        this.deleteEmployeeUrl="http://localhost:7826/employee/deleteEmployee";
    }

    addEmployee(emp :Employee): Observable<Employee> {
        return this.http.post<Employee>(this.addEmployeeUrl,emp);
    }

    updateEmployee(emp :Employee): Observable<Employee> {
        return this.http.put<Employee>(this.updateEmployeeUrl+"/"+emp.id,emp)
    }
    deleteEmployee(emp :Employee): Observable<Employee> {
        return this.http.delete<Employee>(this.addEmployeeUrl+'/'+emp.id);
    }
    getAllEmployee(emp :Employee): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.addEmployeeUrl);
    }
}