import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './web/home/home.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './routes';
import { FormPageComponent } from './web/form-page/form-page.component';


@NgModule({
    declarations: [HomeComponent, FormPageComponent],
    imports: [CommonModule, RouterModule.forChild(APP_ROUTES)],
    providers: [],
    bootstrap: [AppComponent]
})
export class FlightsModule { }
