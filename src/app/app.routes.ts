import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { AboutComponent } from './about-component/about-component';
import { PeriodusComponent } from './periodus-component/periodus-component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'periodus', component: PeriodusComponent },
    { path: '**', redirectTo: '/home' }
];
