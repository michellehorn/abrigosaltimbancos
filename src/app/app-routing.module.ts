import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { DoguinhosComponent } from './pages/doguinhos/doguinhos.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FaqComponent } from './pages/faq/faq.component';
import { StoreComponent } from './pages/store/store.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  {
    path: 'sobre-nos',
    component: AboutUsComponent,
    data: { title: 'AUmigos do bem | Doguinhos <3' }
  },
  {
    path: 'faq',
    component: FaqComponent,
    data: { title: 'AUmigos do bem | Doguinhos <3' }
  },
  {
    path: 'events',
    component: EventsComponent,
    data: { title: 'AUmigos do bem | Doguinhos <3' }
  },
  {
    path: 'como-ajudar',
    component: ContactComponent,
    data: { title: 'AUmigos do bem | Doguinhos <3' }
  },
  {
    path: 'doguinhos',
    component: DoguinhosComponent,
    data: { title: 'AUmigos do bem | Doguinhos <3' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'AUmigos do bem | Home' }
  },
  {
    path: '',
    component: HomeComponent,
    data: { title: 'AUmigos do bem | Home' }
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
