import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SocialLoginModule,SocialAuthServiceConfig } from "angularx-social-login";
import { environment } from 'src/environments/environment';
import {
  GoogleLoginProvider,
} from 'angularx-social-login';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CityMainPageComponent } from './components/city-main-page/city-main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { CityGuideComponent } from './components/city-guide/city-guide.component';
import { CityGalleryComponent } from './components/city-gallery/city-gallery.component';
import { CityQuizComponent } from './components/city-quiz/city-quiz.component';
import { CityGuideArriveComponent } from './components/city-guide-arrive/city-guide-arrive.component';
import { CityGuideMoveComponent } from './components/city-guide-move/city-guide-move.component';
import { CityGuideStayComponent } from './components/city-guide-stay/city-guide-stay.component';
import { CityGuideEatComponent } from './components/city-guide-eat/city-guide-eat.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const CLIENT_ID = environment.client_Id;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    RegisterComponent,
    CityMainPageComponent,
    HeaderComponent,
    CityGuideComponent,
    CityGalleryComponent,
    CityQuizComponent,
    CityGuideArriveComponent,
    CityGuideMoveComponent,
    CityGuideStayComponent,
    CityGuideEatComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IvyCarouselModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '665548778079-cnmrd6d4cfnthvlogkbge6vt7akcb87t.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
 export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
 }
