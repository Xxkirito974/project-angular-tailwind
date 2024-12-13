import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { EditorComponent } from './editor/editor.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'auth', component: AuthComponent }, 
    { path: 'editor', component: EditorComponent }, 
];
