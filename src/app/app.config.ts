import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { Routes} from '@angular/router';
import { SportsComponent } from './forms/sports/sports.component';
import { GroceryComponent } from './forms/grocery/grocery.component';
import { CardItemComponent } from './components/card/card-item/card-item.component';
import { PageNotFoundComponent } from './forms/page-not-found/page-not-found.component';
import { authGuard } from './auth/auth.constants';




export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {path: 'sports', component: SportsComponent}, 
  // Eagerly loading route
  { path: 'sports', loadComponent: () => import('./forms/sports/sports.component')
  .then(m => m.SportsComponent) },
   // Lazily loading route
  // {path: 'grocery', component: GroceryComponent}, 

  { path: 'sports/card-item/:id', component: CardItemComponent},

  // {path: 'grocery', component: GroceryComponent}, 

  { path: 'grocery', 
  canActivate: [authGuard],
  loadComponent: () => import('./forms/grocery/grocery.component')
  .then(m => m.GroceryComponent) },
  // Lazily loading route
  { path: 'grocery/card-item/:id', component: CardItemComponent},

  { path: 'home', loadComponent: () => import('./forms/home/home.component')
  .then(m => m.HomeComponent) }, // Lazily loading route
 

  // { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: 'sports', loadChildren: () => import('./forms/sports/sports.component').then(m => m.SportsComponent) },
  // {
  //   path: 'grocery',
  //   loadChildren: () => import('./forms/grocery/grocery.component').then(m => m.GroceryComponent),
  //   canActivate: [authGuard]
  // },

  {path: '**', component: PageNotFoundComponent}, 
]

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(),
    provideRouter(routes)]
};
