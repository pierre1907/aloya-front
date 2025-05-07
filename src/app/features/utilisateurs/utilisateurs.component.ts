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
    { nom: 'Kassi', prenoms: 'Saint-Pierre Eliakim', email: 'kassi@aloya.com', role: 'Admin Général', actif: true },
    { nom: 'Dupont', prenoms: 'Jean', email: 'jean@aloya.com', role: 'Admin', actif: true },
    { nom: 'Djobo', prenoms: 'Katia', email: 'katia@aloya.com', role: 'Gestionnaire', actif: true },
    { nom: 'Ba', prenoms: 'Mamadou', email: 'mamadou1@aloya.com', role: 'Utilisateur', actif: true },
    { nom: 'Ba', prenoms: 'Mamadou', email: 'mamadou2@aloya.com', role: 'Utilisateur', actif: false },
    { nom: 'Ba', prenoms: 'Mamadou', email: 'mamadou3@aloya.com', role: 'Utilisateur', actif: true },
    { nom: 'Ba', prenoms: 'Mamadou', email: 'mamadou4@aloya.com', role: 'Utilisateur', actif: false },
    { nom: 'Ndiaye', prenoms: 'Fatou', email: 'fatou1@aloya.com', role: 'Gestionnaire', actif: true },
    { nom: 'Ndiaye', prenoms: 'Fatou', email: 'fatou2@aloya.com', role: 'Gestionnaire', actif: false },
    { nom: 'Diop', prenoms: 'Aminata', email: 'aminata@aloya.com', role: 'Gestionnaire', actif: true },
    { nom: 'Sow', prenoms: 'Awa', email: 'awa@aloya.com', role: 'Utilisateur', actif: true },
    { nom: 'Fall', prenoms: 'Cheikh', email: 'cheikh@aloya.com', role: 'Gestionnaire', actif: false },
    { nom: 'Sy', prenoms: 'Oumar', email: 'oumar@aloya.com', role: 'Utilisateur', actif: true },
    { nom: 'Toure', prenoms: 'Fatimata', email: 'fatimata@aloya.com', role: 'Utilisateur', actif: false },
    { nom: 'Cissé', prenoms: 'Alioune', email: 'alioune@aloya.com', role: 'Admin', actif: true },
    { nom: 'Diallo', prenoms: 'Mariama', email: 'mariama@aloya.com', role: 'Gestionnaire', actif: true },
    { nom: 'Camara', prenoms: 'Lamine', email: 'lamine@aloya.com', role: 'Utilisateur', actif: false },
    { nom: 'Kouyaté', prenoms: 'Binta', email: 'binta@aloya.com', role: 'Utilisateur', actif: true },
    { nom: 'Barry', prenoms: 'Ismaël', email: 'ismael@aloya.com', role: 'Admin', actif: false },
    { nom: 'Faye', prenoms: 'Khady', email: 'khady@aloya.com', role: 'Gestionnaire', actif: true },
    { nom: 'Ndoye', prenoms: 'Modou', email: 'modou@aloya.com', role: 'Utilisateur', actif: true },
    { nom: 'Gueye', prenoms: 'Aissatou', email: 'aissatou@aloya.com', role: 'Gestionnaire', actif: false },
    { nom: 'Mbaye', prenoms: 'Serigne', email: 'serigne@aloya.com', role: 'Utilisateur', actif: true },
    { nom: 'Dieng', prenoms: 'Yacine', email: 'yacine@aloya.com', role: 'Admin', actif: true },
    { nom: 'Lo', prenoms: 'Ibrahima', email: 'ibrahima@aloya.com', role: 'Utilisateur', actif: false },
    { nom: 'Seck', prenoms: 'Bineta', email: 'bineta@aloya.com', role: 'Gestionnaire', actif: true },
    { nom: 'Gomis', prenoms: 'Moussa', email: 'moussa@aloya.com', role: 'Utilisateur', actif: true },
    { nom: 'Niane', prenoms: 'Adama', email: 'adama@aloya.com', role: 'Utilisateur', actif: false },
    { nom: 'Tall', prenoms: 'Abdoulaye', email: 'abdoulaye@aloya.com', role: 'Admin', actif: true },
    { nom: 'Bâ', prenoms: 'Hawa', email: 'hawa@aloya.com', role: 'Utilisateur', actif: false },
    { nom: 'Kane', prenoms: 'Cheikh Tidiane', email: 'cheikh@aloya.com', role: 'Gestionnaire', actif: true },
    { nom: 'Diagne', prenoms: 'Aly', email: 'aly@aloya.com', role: 'Utilisateur', actif: true },
    { nom: 'Sagna', prenoms: 'Sophie', email: 'sophie@aloya.com', role: 'Gestionnaire', actif: false },
    { nom: 'Sané', prenoms: 'Mouhamed', email: 'mouhamed@aloya.com', role: 'Utilisateur', actif: true },
    { nom: 'Ka', prenoms: 'Thierno', email: 'thierno@aloya.com', role: 'Utilisateur', actif: true }
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

  toggleStatut(utilisateur: any) {
    utilisateur.actif = !utilisateur.actif;

    // Ici tu peux envoyer la mise à jour vers le backend
    // this.utilisateurService.updateStatut(utilisateur.id, utilisateur.actif).subscribe();

    console.log(`Utilisateur ${utilisateur.nom} est maintenant ${utilisateur.actif ? 'actif' : 'inactif'}`);
  }
}
