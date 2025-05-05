import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LucideAngularModule, Eye, Pencil, Trash} from "lucide-angular";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-utilisateurs',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    FormsModule,
  ],
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.css'
})
export class UtilisateursComponent {

  // Icons
  readonly eye = Eye;
  readonly pencil = Pencil;
  readonly trash = Trash;


  utilisateurs = [
    { nom: 'Dupont', prenoms: 'Jean', email: 'jean@exemple.com', role: 'Admin' },
    { nom: 'DJOBO', prenoms: 'Katia', email: 'kate@aloya.com', role: 'Gestionnaire' },
    { nom: 'Ba', prenoms: 'Mamadou', email: 'mamadou@exemple.com', role: 'Utilisateur' },
    { nom: 'Ba', prenoms: 'Mamadou', email: 'mamadou@exemple.com', role: 'Utilisateur' },
    { nom: 'Ndiaye', prenoms: 'Fatou', email: 'fatou@exemple.com', role: 'Gestionnaire' },
    { nom: 'Ba', prenoms: 'Mamadou', email: 'mamadou@exemple.com', role: 'Utilisateur' },
    { nom: 'Ba', prenoms: 'Mamadou', email: 'mamadou@exemple.com', role: 'Utilisateur' },
    { nom: 'Ba', prenoms: 'Mamadou', email: 'mamadou@exemple.com', role: 'Utilisateur' },
    { nom: 'KASSI', prenoms: 'Saint-Pierre Eliakim', email: 'kassi@aloya.com', role: 'Admin Général' },
    { nom: 'Ba', prenoms: 'Mamadou', email: 'mamadou@exemple.com', role: 'Utilisateur' },
    { nom: 'Ba', prenoms: 'Mamadou', email: 'mamadou@exemple.com', role: 'Utilisateur' },
    { nom: 'Ba', prenoms: 'Mamadou', email: 'mamadou@exemple.com', role: 'Utilisateur' },
    { nom: 'Ndiaye', prenoms: 'Fatou', email: 'fatou@exemple.com', role: 'Gestionnaire' },
    { nom: 'Ba', prenoms: 'Mamadou', email: 'mamadou@exemple.com', role: 'Utilisateur' },
    { nom: 'Ba', prenoms: 'Mamadou', email: 'mamadou@exemple.com', role: 'Utilisateur' },
    { nom: 'Ndiaye', prenoms: 'Fatou', email: 'fatou@exemple.com', role: 'Gestionnaire' },
    { nom: 'Ba', prenoms: 'Mamadou', email: 'mamadou@exemple.com', role: 'Utilisateur' },
    { nom: 'Ndiaye', prenoms: 'Fatou', email: 'fatou@exemple.com', role: 'Gestionnaire' },
    { nom: 'Ba', prenoms: 'Mamadou', email: 'mamadou@exemple.com', role: 'Utilisateur' },
    { nom: 'Ndiaye', prenoms: 'Fatou', email: 'fatou@exemple.com', role: 'Gestionnaire' },
    { nom: 'Ba', prenoms: 'Mamadou', email: 'mamadou@exemple.com', role: 'Utilisateur' },
  ];
  pageCourante = 1;
  taillePage = 6;
  recherche = '';

  get utilisateursFiltres() {
    if (!this.recherche.trim()) return this.utilisateurs;

    const filtre = this.recherche.toLowerCase();

    return this.utilisateurs.filter(utilisateur =>
      utilisateur.nom.toLowerCase().includes(filtre) ||
      utilisateur.prenoms.toLowerCase().includes(filtre) ||
      utilisateur.email.toLowerCase().includes(filtre) ||
      utilisateur.role.toLowerCase().includes(filtre)
    );
  }

  get utilisateursPagines() {
    const debut = (this.pageCourante - 1) * this.taillePage;
    return this.utilisateursFiltres.slice(debut, debut + this.taillePage);
  }

  get nombrePages() {
    return Math.ceil(this.utilisateursFiltres.length / this.taillePage);
  }



  /*get utilisateursPagines() {
    const debut = (this.pageCourante - 1) * this.taillePage;
    return this.utilisateurs.slice(debut, debut + this.taillePage);
  }

  get nombrePages() {
    return Math.ceil(this.utilisateurs.length / this.taillePage);
  }*/

  pageSuivante() {
    if (this.pageCourante < this.nombrePages) {
      this.pageCourante++;
    }
  }

  pagePrecedente() {
    if (this.pageCourante > 1) {
      this.pageCourante--;
    }
  }

  voirUtilisateur(user: any) {
    console.log('Voir', user);
  }

  modifierUtilisateur(user: any) {
    console.log('Modifier', user);
  }

  supprimerUtilisateur(user: any) {
    console.log('Supprimer', user);
  }

  ajouterUtilisateur() {
    console.log('Ajouter un nouvel utilisateur');
  }
}
