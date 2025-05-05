import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Eye, Pencil, Trash } from 'lucide-angular';

@Component({
  selector: 'app-locataires',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './locataires.component.html',
  styleUrl: './locataires.component.css',
})
export class LocatairesComponent {
  readonly eye = Eye;
  readonly pencil = Pencil;
  readonly trash = Trash;

  locataires = [
    { nom: 'Diallo', prenoms: 'Aminata', email: 'aminata@exemple.com', telephone: '77 123 4567' },
    { nom: 'Sow', prenoms: 'Ibrahima', email: 'ibra@exemple.com', telephone: '78 456 7890' },
    { nom: 'Fall', prenoms: 'Marie', email: 'marie@exemple.com', telephone: '76 987 6543' },
    { nom: 'Ndoye', prenoms: 'Cheikh', email: 'cheikh@exemple.com', telephone: '70 111 2222' },
    { nom: 'Diop', prenoms: 'Fatou', email: 'fatou@exemple.com', telephone: '76 222 3333' },
    { nom: 'Ba', prenoms: 'Moussa', email: 'moussa@exemple.com', telephone: '77 444 5555' },
    { nom: 'Ndiaye', prenoms: 'Seynabou', email: 'sey@exemple.com', telephone: '78 666 7777' },
    { nom: 'Camara', prenoms: 'Alpha', email: 'alpha@exemple.com', telephone: '70 888 9999' },
    { nom: 'Gueye', prenoms: 'Awa', email: 'awa@exemple.com', telephone: '76 321 6547' },
    { nom: 'Kane', prenoms: 'Ousmane', email: 'ousmane@exemple.com', telephone: '78 543 2109' },
    { nom: 'Cissé', prenoms: 'Mame', email: 'mame@exemple.com', telephone: '70 678 1234' },
    { nom: 'Kouyaté', prenoms: 'Abdoulaye', email: 'abdoulaye@exemple.com', telephone: '77 789 2345' },
    { nom: 'Barry', prenoms: 'Khady', email: 'khady@exemple.com', telephone: '76 890 3456' },
    { nom: 'Sy', prenoms: 'Babacar', email: 'babacar@exemple.com', telephone: '78 901 4567' },
    { nom: 'Mbaye', prenoms: 'Samba', email: 'samba@exemple.com', telephone: '70 012 5678' },
    { nom: 'Tall', prenoms: 'Adama', email: 'adama@exemple.com', telephone: '77 123 6789' },
    { nom: 'Faye', prenoms: 'Mame Diarra', email: 'diarra@exemple.com', telephone: '76 234 7890' },
    { nom: 'Seck', prenoms: 'Abiba', email: 'abiba@exemple.com', telephone: '78 345 8901' },
    { nom: 'Thiam', prenoms: 'Alioune', email: 'alioune@exemple.com', telephone: '70 456 9012' },
    { nom: 'Sagna', prenoms: 'Coumba', email: 'coumba@exemple.com', telephone: '77 567 0123' },
    { nom: 'Dia', prenoms: 'El Hadj', email: 'elhadj@exemple.com', telephone: '76 678 1234' },
    { nom: 'Dieng', prenoms: 'Mouhamed', email: 'mouhamed@exemple.com', telephone: '78 789 2345' },
    { nom: 'Ka', prenoms: 'Ndeye', email: 'ndeye@exemple.com', telephone: '70 890 3456' },
    { nom: 'Bâ', prenoms: 'Lamine', email: 'lamine@exemple.com', telephone: '77 901 4567' },
    { nom: 'Sarr', prenoms: 'Bineta', email: 'bineta@exemple.com', telephone: '76 012 5678' },
    { nom: 'Ly', prenoms: 'Amadou', email: 'amadou@exemple.com', telephone: '78 123 6789' },
    { nom: 'Toure', prenoms: 'Aissatou', email: 'aissatou@exemple.com', telephone: '70 234 7890' },
    { nom: 'Niang', prenoms: 'Moussa', email: 'moussa.n@exemple.com', telephone: '77 345 8901' },
    { nom: 'Lo', prenoms: 'Astou', email: 'astou@exemple.com', telephone: '76 456 9012' },
    { nom: 'Sow', prenoms: 'Cheikh Tidiane', email: 'tidiane@exemple.com', telephone: '78 567 0123' },
    { nom: 'Gaye', prenoms: 'Fatimata', email: 'fatimata@exemple.com', telephone: '70 678 1234' },
    { nom: 'Ndour', prenoms: 'Ismaila', email: 'ismaila@exemple.com', telephone: '77 789 2345' },
    { nom: 'Mbengue', prenoms: 'Aminata', email: 'aminata.m@exemple.com', telephone: '76 890 3456' },
    { nom: 'Diouf', prenoms: 'Serigne', email: 'serigne@exemple.com', telephone: '78 901 4567' },
    { nom: 'Hanne', prenoms: 'Thierno', email: 'thierno@exemple.com', telephone: '70 012 5678' },
    { nom: 'Gomis', prenoms: 'Maty', email: 'maty@exemple.com', telephone: '77 123 6789' },
    { nom: 'Soumaré', prenoms: 'Aliou', email: 'aliou@exemple.com', telephone: '76 234 7890' },
    { nom: 'Coly', prenoms: 'Awa', email: 'awa.coly@exemple.com', telephone: '78 345 8901' },
    { nom: 'Diagne', prenoms: 'Karim', email: 'karim@exemple.com', telephone: '70 456 9012' },
    { nom: 'Sané', prenoms: 'Nafissatou', email: 'nafissatou@exemple.com', telephone: '77 567 0123' }
  ];



  pageCourante = 1;
  taillePage = 6;
  recherche = '';

  get locatairesFiltres() {
    const filtre = this.recherche.toLowerCase().trim();
    if (!filtre) return this.locataires;
    return this.locataires.filter(l =>
      l.nom.toLowerCase().includes(filtre) ||
      l.prenoms.toLowerCase().includes(filtre) ||
      l.email.toLowerCase().includes(filtre) ||
      l.telephone.toLowerCase().includes(filtre)
    );
  }

  get locatairesPagines() {
    const debut = (this.pageCourante - 1) * this.taillePage;
    return this.locatairesFiltres.slice(debut, debut + this.taillePage);
  }

  get nombrePages() {
    return Math.ceil(this.locatairesFiltres.length / this.taillePage);
  }

  pageSuivante() {
    if (this.pageCourante < this.nombrePages) this.pageCourante++;
  }

  pagePrecedente() {
    if (this.pageCourante > 1) this.pageCourante--;
  }

  voirLocataire(locataire: any) {
    console.log('Voir', locataire);
  }

  modifierLocataire(locataire: any) {
    console.log('Modifier', locataire);
  }

  supprimerLocataire(locataire: any) {
    console.log('Supprimer', locataire);
  }

  ajouterLocataire() {
    console.log('Ajouter un locataire');
  }
}
