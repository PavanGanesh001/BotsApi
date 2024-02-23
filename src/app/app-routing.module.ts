import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [ { path: 'services', component: ServicesComponent },
{ path: 'home', component: HomeComponent },
{ path: 'aboutus', component: AboutUsComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' }, // Assuming you have a default route
{ path: '**', redirectTo: '/404' } // Assuming you have a wildcard route for handling unknown routes
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
