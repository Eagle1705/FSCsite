import { Routes } from '@angular/router';
import { ElectricComponent } from './pages/electric/electric.component';
import { HomeComponent } from './pages/home/home.component';
import { ManagmentComponent } from './pages/managment/management.component';
import { FormComponent } from './pages/form/form.component';
import { MechanicsComponent } from './pages/menchanics/mechanics.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', redirectTo: '' },
    { path: 'electric', component: ElectricComponent },
    { path: 'form', component: FormComponent },
    { path: 'managment', component: ManagmentComponent },
    { path: 'mechanics', component: MechanicsComponent },
    { path: '**', component: HomeComponent },
];
