import { Routes } from '@angular/router';
import {LoginFormComponent} from "./auth/login-form/login-form.component";
import {LayoutComponent} from "./layout/layout.component";
import {DashboardComponent} from "./features/dashboard/dashboard.component";
import {LocatairesComponent} from "./features/locataires/locataires.component";
import {BiensComponent} from "./features/biens/biens.component";
import {PaiementsComponent} from "./features/paiements/paiements.component";
import {QuittancesComponent} from "./features/quittances/quittances.component";
import {ParametresComponent} from "./features/parametres/parametres.component";
import {NotificationsComponent} from "./features/notifications/notifications.component";
import {UtilisateursComponent} from "./features/utilisateurs/utilisateurs.component";

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./auth/login-form/login-form.component').then(m => m.LoginFormComponent)
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'locataires', component: LocatairesComponent },
      { path: 'biens', component: BiensComponent },
      { path: 'paiements', component: PaiementsComponent },
      { path: 'quittances', component: QuittancesComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'parametres', component: ParametresComponent },
      { path: 'utilisateurs', component: UtilisateursComponent },

    ]
  }
];
