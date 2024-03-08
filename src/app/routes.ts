import { Routes } from "@angular/router";
import { HomeComponent } from "./web/home/home.component";
import { FormPageComponent } from "./web/form-page/form-page.component";

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'form', component: FormPageComponent },
];
