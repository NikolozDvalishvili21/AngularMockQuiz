import { Component, Input } from '@angular/core';
import { User } from '../service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-stats.component.html',
  styleUrl: './user-stats.component.css'
})
export class UserStatsComponent {
  @Input() user!: User

  statusColor(user: User) {
    return user.Status === "Confirmed" ? "green" : user.Status === "Blocked" ? "red" : "black"
  }
}
