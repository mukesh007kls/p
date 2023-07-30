import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  gender: string;
  role: string;
  
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [
  
    // Add more employee data as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
