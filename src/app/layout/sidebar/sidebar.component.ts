import { Component } from '@angular/core';
import {LucideAngularModule, BellDot, Landmark, ReceiptText, Home, Users, LayoutDashboard, User2} from 'lucide-angular';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    LucideAngularModule,
    RouterLink,
    NgClass
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  readonly Dashboard = LayoutDashboard;
  readonly Users = Users;
  readonly notifications = BellDot;
  readonly Paiements = Landmark;
  readonly Quittances = ReceiptText;
  readonly Biens = Home;
  readonly utilisateurs = User2

  constructor(public router: Router) {}

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

}
