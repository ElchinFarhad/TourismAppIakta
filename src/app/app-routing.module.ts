import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityGalleryComponent } from './components/city-gallery/city-gallery.component';
import { CityGuideArriveComponent } from './components/city-guide-arrive/city-guide-arrive.component';
import { CityGuideEatComponent } from './components/city-guide-eat/city-guide-eat.component';
import { CityGuideMoveComponent } from './components/city-guide-move/city-guide-move.component';
import { CityGuideStayComponent } from './components/city-guide-stay/city-guide-stay.component';
import { CityGuideComponent } from './components/city-guide/city-guide.component';
import { CityMainPageComponent } from './components/city-main-page/city-main-page.component';
import { CityQuizComponent } from './components/city-quiz/city-quiz.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuardService } from './services/authguard/auth-guard.service';

const routes: Routes = [
  
 {
   path: '', 
   redirectTo: 'login', 
   pathMatch: 'full'}
,
{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'register',
  component: RegisterComponent,
  
}
,
{
  path: 'home-page',
  component: MainPageComponent,
  canActivate:[AuthGuardService] 

}
,
{
  path: 'cityMainPage',
  component: CityMainPageComponent,
  canActivate: [AuthGuardService]

}
,
{
  path: 'cityGuide',
  component: CityGuideComponent,
  canActivate: [AuthGuardService]

}
,
{
  path: 'cityGallery',
  component: CityGalleryComponent,
  canActivate: [AuthGuardService]
}
,
{
  path: 'cityQuiz',
  component: CityQuizComponent,
  canActivate: [AuthGuardService]

}
,
{
  path: 'cityGuide/arrive',
  component: CityGuideArriveComponent,
  canActivate: [AuthGuardService]

}
,
{
  path: 'cityGuide/move',
  component: CityGuideMoveComponent,
  canActivate: [AuthGuardService]

}
,
{
  path: 'cityGuide/stay',
  component: CityGuideStayComponent,
  canActivate: [AuthGuardService]

}
,
{
  path: 'cityGuide/eat',
  component: CityGuideEatComponent,
  canActivate: [AuthGuardService]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
