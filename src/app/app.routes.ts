import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main/main/main-layout/main-layout.component';
import { HomeComponent } from './components/main/main/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
        ]
    }
];
