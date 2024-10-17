import { Component } from '@angular/core';
import { userService } from '../service/user.service';
import { CommonModule } from '@angular/common';

export interface User {
  id: number;
  Username: string;
  Email: string;
  RegistrationTime: string;
  LastLogin: string;
  Status: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})


export class UsersComponent {
  Users: User[] = []

  constructor(private userService: userService) {}

  ngOnInit():void {
    this.Users = this.userService.Users
  }

  statusColor(user: User) {
    return user.Status === "Confirmed" ? "green" : user.Status === "Blocked" ? "red" : "black"
  }
}
