import { Routes } from "@angular/router";
import { GroceryComponent } from "./grocery.component";
import { CardItemComponent } from "src/app/components/card/card-item/card-item.component";

export const routes: Routes = [
    { path: '', redirectTo: 'grocery', pathMatch: 'full' },
    { path: 'grocery', component: GroceryComponent },
    { path: '', component: GroceryComponent },
    { path: 'card-item/:id', component: CardItemComponent}
  ];