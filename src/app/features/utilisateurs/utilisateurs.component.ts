import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import { LucideAngular, Eye, Pencil, Trash } from 'lucide-angular';


@Component({
  selector: 'app-utilisateurs',
  standalone: true,
  imports: [CommonModule, LucideAngular.pick({ Eye, Pencil, Trash })],
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.css'
})
export class UtilisateursComponent {
  utilisateurs = [
    { nom: 'Dupont', prenoms: 'Jean', email: 'jean@exemple.com', role: 'Admin' },
    { nom: 'Ndiaye', prenoms: 'Fatou', email: 'fatou@exemple.com', role: 'Gestionnaire' },
    { nom: 'Ba',prenoms: 'Mamadou', email: 'mamadou@exemple.com', role: 'Utilisateur' }
  ];

  voirUtilisateur(user: any) {
    console.log('Voir', user);
  }

  modifierUtilisateur(user: any) {
    console.log('Modifier', user);
  }

  supprimerUtilisateur(user: any) {
    console.log('Supprimer', user);
  }
}
