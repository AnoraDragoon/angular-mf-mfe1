import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { APP_ROUTES } from './routes';



@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(APP_ROUTES)
    ]
})
export class FlightsModule { }
