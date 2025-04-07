import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  teamMembers = [
    {
      name: "Olivia Rye",
      status: "Customer",
      role: "Product Designer",
      email: "olivia@example.com",
      progress: 70,
      teams: ["Design", "Product", "Marketing"]
    },
    // Add the rest
  ];
}
