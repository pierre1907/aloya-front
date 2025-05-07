import { Component } from '@angular/core';
import { LucideAngularModule, Eye, Trash } from 'lucide-angular';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-quittances',
  standalone: true,
  templateUrl: './quittances.component.html',
  imports: [LucideAngularModule, CommonModule, FormsModule]
})
export class QuittancesComponent {

  readonly eye = Eye;
  readonly trash = Trash;

  recherche: string = '';
  pageCourante = 1;
  taillePage = 6;

  quittances = [
    { numero: 'QT-001', locataire: 'Jean Dupont', bien: 'Appartement A1', montant: 200000, periode: 'Janvier 2025 - Mars 2025' },
    { numero: 'QT-002', locataire: 'Fatou Ndiaye', bien: 'Studio B2', montant: 180000, periode: 'Janvier 2025' },
    { numero: 'QT-003', locataire: 'Mamadou Ba', bien: 'Villa C3', montant: 250000, periode: 'Janvier 2025' },
    { numero: 'QT-004', locataire: 'Katia Djobo', bien: 'Studio D4', montant: 160000, periode: 'Février 2025' },
    { numero: 'QT-005', locataire: 'El Hadji Sy', bien: 'Appartement E5', montant: 220000, periode: 'Février 2025' },
    { numero: 'QT-006', locataire: 'Awa Diop', bien: 'Appartement A1', montant: 200000, periode: 'Mars 2025' },
    { numero: 'QT-007', locataire: 'Lamine Sow', bien: 'Studio B2', montant: 180000, periode: 'Mars 2025' },
    { numero: 'QT-008', locataire: 'Seynabou Fall', bien: 'Villa C3', montant: 250000, periode: 'Mars 2025' },
    { numero: 'QT-009', locataire: 'Ibrahima Kane', bien: 'Studio D4', montant: 160000, periode: 'Avril 2025' },
    { numero: 'QT-010', locataire: 'Ndeye Mbaye', bien: 'Appartement E5', montant: 220000, periode: 'Avril 2025' },
    { numero: 'QT-011', locataire: 'Aliou Cissé', bien: 'Appartement A1', montant: 200000, periode: 'Avril 2025' },
    { numero: 'QT-012', locataire: 'Aminata Sarr', bien: 'Studio B2', montant: 180000, periode: 'Mai 2025' },
    { numero: 'QT-013', locataire: 'Babacar Gaye', bien: 'Villa C3', montant: 250000, periode: 'Mai 2025' },
    { numero: 'QT-014', locataire: 'Mame Diarra', bien: 'Studio D4', montant: 160000, periode: 'Mai 2025' },
    { numero: 'QT-015', locataire: 'Ousmane Ndiaye', bien: 'Appartement E5', montant: 220000, periode: 'Mai 2025' },
    { numero: 'QT-016', locataire: 'Fatoumata Diallo', bien: 'Appartement A1', montant: 200000, periode: 'Juin 2025' },
    { numero: 'QT-017', locataire: 'Pape Sarr', bien: 'Studio B2', montant: 180000, periode: 'Juin 2025' },
    { numero: 'QT-018', locataire: 'Moussa Ndiaye', bien: 'Villa C3', montant: 250000, periode: 'Juin 2025' },
    { numero: 'QT-019', locataire: 'Sokhna Gueye', bien: 'Studio D4', montant: 160000, periode: 'Juin 2025' },
    { numero: 'QT-020', locataire: 'Binta Faye', bien: 'Appartement E5', montant: 220000, periode: 'Juin 2025' },
    { numero: 'QT-021', locataire: 'Djibril Fall', bien: 'Appartement A1', montant: 200000, periode: 'Juillet 2025' },
    { numero: 'QT-022', locataire: 'Mariama Ba', bien: 'Studio B2', montant: 180000, periode: 'Juillet 2025' },
    { numero: 'QT-023', locataire: 'Cheikh Diop', bien: 'Villa C3', montant: 250000, periode: 'Juillet 2025' },
    { numero: 'QT-024', locataire: 'Nafissatou Diagne', bien: 'Studio D4', montant: 160000, periode: 'Juillet 2025' },
    { numero: 'QT-025', locataire: 'Thierno Sow', bien: 'Appartement E5', montant: 220000, periode: 'Juillet 2025' },
    { numero: 'QT-026', locataire: 'Astou Ndoye', bien: 'Appartement A1', montant: 200000, periode: 'Août 2025' },
    { numero: 'QT-027', locataire: 'Karim Faye', bien: 'Studio B2', montant: 180000, periode: 'Août 2025' },
    { numero: 'QT-028', locataire: 'Mbayang Ndiaye', bien: 'Villa C3', montant: 250000, periode: 'Août 2025' },
    { numero: 'QT-029', locataire: 'Abdoulaye Seck', bien: 'Studio D4', montant: 160000, periode: 'Août 2025' },
    { numero: 'QT-030', locataire: 'Yacine Diouf', bien: 'Appartement E5', montant: 220000, periode: 'Août 2025' },
  ];

  get quittancesFiltrees() {
    const recherche = this.recherche.toLowerCase();
    return this.quittances.filter(q =>
      q.numero.toLowerCase().includes(recherche) ||
      q.locataire.toLowerCase().includes(recherche)
    );
  }

  get nombrePages(): number {
    return Math.ceil(this.quittancesFiltrees.length / this.taillePage);
  }

  get quittancesPaginees() {
    const start = (this.pageCourante - 1) * this.taillePage;
    return this.quittancesFiltrees.slice(start, start + this.taillePage);
  }

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

  voirQuittance(quittance: any) {
    console.log('Voir quittance', quittance);
    // Tu peux ouvrir un modal ou une page détail ici
  }

  supprimerQuittance(quittance: any) {
    if (confirm(`Supprimer la quittance ${quittance.numero} ?`)) {
      this.quittances = this.quittances.filter(q => q !== quittance);
    }
  }
}
