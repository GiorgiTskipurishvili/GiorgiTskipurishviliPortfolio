import { Routes } from '@angular/router';
import { Experience } from './pages/experience/experience';
import { Main } from './pages/main/main';
import { Education } from './pages/education/education';
import { Skills } from './pages/skills/skills';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    // {path:'', component:Main},
    // {path:'experience', component:Experience},
    // {path:'skills', component:Skills},
    // {path:'education', component:Education},
    {
    path: ':lang', children: [
      { path: '', component: Main },
      { path: 'experience', component: Experience },
      { path: 'skills', component: Skills },
      { path: 'education', component: Education },
      { path: 'contact', component: Contact }
    ]
  },
  

{ 
  path: '', 
  pathMatch: 'full', 
  redirectTo: localStorage.getItem('lang') || 'en'
},
{ path: '**', redirectTo: localStorage.getItem('lang') || 'en' }
];
