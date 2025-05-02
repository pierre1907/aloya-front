
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule,
  Users,
  Building2,
  CreditCard,
  FileText,
  BellDot,
  Landmark,
  ReceiptText, Home
} from 'lucide-angular';
//import { Users, Building2, CreditCard, FileText, Bell } from 'lucide-angular';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {


  readonly Users = Users;
  readonly notification = BellDot;
  readonly Paiements = Landmark;
  readonly Quittances = ReceiptText;
  readonly Biens = Home;


  cards = [
    {
      title: 'Locataires',
      icon: Users,
      count: 42,
      color: 'bg-blue-100 text-blue-800',
      route: '/locataires',
    },
    {
      title: 'Biens',
      icon: Building2,
      count: 15,
      color: 'bg-green-100 text-green-800',
      route: '/biens',
    },
    {
      title: 'Paiements',
      icon: CreditCard,
      count: 120,
      color: 'bg-yellow-100 text-yellow-800',
      route: '/paiements',
    },
    {
      title: 'Quittances',
      icon: FileText,
      count: 70,
      color: 'bg-purple-100 text-purple-800',
      route: '/quittances',
    },
    {
      title: 'Notifications',
      icon: BellDot,
      count: 5,
      color: 'bg-red-100 text-red-800',
      route: '/notifications',
    },
  ];

  paiements = [
    { locataire: 'Jean Dupont', montant: 150000, date: new Date(), statut: 'Payé' },
    { locataire: 'Fatou Ndiaye', montant: 120000, date: new Date(), statut: 'En attente' },
    { locataire: 'Mamadou Ba', montant: 180000, date: new Date(), statut: 'Payé' }
  ];

  notifications = [
    { message: 'Nouvelle quittance générée pour Jean Dupont.' },
    { message: 'Paiement en attente de Fatou Ndiaye.' },
    { message: 'Le bien "Résidence Diamniadio" a été mis à jour.' }
  ];

}
