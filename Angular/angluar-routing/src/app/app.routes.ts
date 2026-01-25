import { Routes } from '@angular/router';
import { About } from './about/about';
import { Login } from './login/login';
import { Contact } from './contact/contact';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: 'about', component: About },
  { path: 'login', component: Login },
  { path: 'contact', component: Contact },
  { path: 'profile/:id/:name', component: Profile },
  { path: '**', component: PageNotFound },
];
