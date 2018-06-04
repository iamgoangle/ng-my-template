import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// external ui
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// layout
import { FooterComponent } from './layout/footer/footer.component';
import { TopNavigationComponent } from './layout/top-navigation/top-navigation.component';

// pages
import { DemoComponent } from './pages/demo/demo.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    LandingPageComponent,
    TopNavigationComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
