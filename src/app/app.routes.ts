import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Models } from './models/models';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'models', component: Models },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];