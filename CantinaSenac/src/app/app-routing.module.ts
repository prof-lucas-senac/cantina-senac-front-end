import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "feedbacks",
    component: FeedbackComponent
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
