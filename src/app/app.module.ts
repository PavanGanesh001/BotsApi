import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFooterComponent } from './angular-footer/angular-footer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FooterComponent, DetailComponent, AngularFooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
