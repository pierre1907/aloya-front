import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import { LucideAngularModule, Eye, Pencil, Trash } from 'lucide-angular';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-biens',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, FormsModule],
  templateUrl: './biens.component.html',
  styleUrl: './biens.component.css'
})
export class BiensComponent {

  biens = [
    { reference: 'BIEN-001', nom: 'Appartement F3 - Liberté 6', image: 'https://picsum.photos/seed/app1/400/250', statut: 'Loué' },
    { reference: 'BIEN-002', nom: 'Studio - Mermoz', image: 'https://picsum.photos/seed/studio1/400/250', statut: 'Libre' },
    { reference: 'BIEN-003', nom: 'Villa - Almadies', image: 'https://picsum.photos/seed/villa1/400/250', statut: 'En attente' },
    { reference: 'BIEN-004', nom: 'Appartement T2 - Point E', image: 'https://picsum.photos/seed/app2/400/250', statut: 'Loué' },
    { reference: 'BIEN-005', nom: 'Maison - Yoff', image: 'https://picsum.photos/seed/maison1/400/250', statut: 'Libre' },
    { reference: 'BIEN-006', nom: 'Appartement Meublé - Plateau', image: 'https://picsum.photos/seed/app3/400/250', statut: 'Loué' },
    { reference: 'BIEN-007', nom: 'Duplex - Ouakam', image: 'https://picsum.photos/seed/duplex1/400/250', statut: 'Libre' },
    { reference: 'BIEN-008', nom: 'Studio - Sacré Cœur', image: 'https://picsum.photos/seed/studio2/400/250', statut: 'En attente' },
    { reference: 'BIEN-009', nom: 'Villa Piscine - Ngor', image: 'https://picsum.photos/seed/villa2/400/250', statut: 'Loué' },
    { reference: 'BIEN-010', nom: 'Chambre Individuelle - Castors', image: 'https://picsum.photos/seed/chambre1/400/250', statut: 'Libre' },
    { reference: 'BIEN-011', nom: 'Appartement Standing - Mbao', image: 'https://picsum.photos/seed/app4/400/250', statut: 'Loué' },
    { reference: 'BIEN-012', nom: 'Maison Familiale - Pikine', image: 'https://picsum.photos/seed/maison2/400/250', statut: 'Libre' },
    { reference: 'BIEN-013', nom: 'Appartement T3 - Grand Yoff', image: 'https://picsum.photos/seed/app5/400/250', statut: 'Loué' },
    { reference: 'BIEN-014', nom: 'Studio Moderne - Colobane', image: 'https://picsum.photos/seed/studio3/400/250', statut: 'En attente' },
    { reference: 'BIEN-015', nom: 'Villa Haut Standing - Fann', image: 'https://picsum.photos/seed/villa3/400/250', statut: 'Loué' },
    { reference: 'BIEN-016', nom: 'Appartement Économique - Thiaroye', image: 'https://picsum.photos/seed/app6/400/250', statut: 'Libre' },
    { reference: 'BIEN-017', nom: 'Maison RDC - Hann Maristes', image: 'https://picsum.photos/seed/maison3/400/250', statut: 'Loué' },
    { reference: 'BIEN-018', nom: 'Appartement T1 - Khar Yalla', image: 'https://picsum.photos/seed/app7/400/250', statut: 'En attente' },
    { reference: 'BIEN-019', nom: 'Duplex - Parcelles Assainies', image: 'https://picsum.photos/seed/duplex2/400/250', statut: 'Libre' },
    { reference: 'BIEN-020', nom: 'Maison Résidentielle - Diamniadio', image: 'https://picsum.photos/seed/maison4/400/250', statut: 'Loué' },
    { reference: 'BIEN-021', nom: 'Studio Étudiant - UCAD', image: 'https://picsum.photos/seed/studio4/400/250', statut: 'Libre' },
    { reference: 'BIEN-022', nom: 'Appartement de Luxe - VDN', image: 'https://picsum.photos/seed/app8/400/250', statut: 'Loué' },
    { reference: 'BIEN-023', nom: 'Maison Jumelée - Rufisque', image: 'https://picsum.photos/seed/maison5/400/250', statut: 'En attente' },
    { reference: 'BIEN-024', nom: 'Appartement - Sicap Baobab', image: 'https://picsum.photos/seed/app9/400/250', statut: 'Libre' },
    { reference: 'BIEN-025', nom: 'Villa - Lac Rose', image: 'https://picsum.photos/seed/villa4/400/250', statut: 'Loué' },
  ];

  readonly eye = Eye;
  readonly pencil = Pencil;
  readonly trash = Trash;

  voirBien(bien: any) {
    console.log('Voir bien', bien);
  }
  modifierBien(bien: any) {
    console.log('Modifier bien', bien);
  }
  supprimerBien(bien: any) {
    console.log('Supprimer bien', bien);
  }


  searchTerm = '';
  pageCourante = 1;
  itemsParPage = 6;

  get biensFiltres() {
    return this.biens.filter(b =>
      b.nom.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get paginatedBiens() {
    const début = (this.pageCourante - 1) * this.itemsParPage;
    return this.biensFiltres.slice(début, début + this.itemsParPage);
  }

  get nombrePages() {
    return Math.ceil(this.biensFiltres.length / this.itemsParPage);
  }

  pagePrecedente() {
    if (this.pageCourante > 1) {
      this.pageCourante--;
    }
  }

  pageSuivante() {
    if (this.pageCourante < this.nombrePages) {
      this.pageCourante++;
    }
  }

  ajouterBien(){
    console.log('Ajouter un bien');
  }


}
