import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "app/login/login.component";

const APP_ROUTES: Routes = [
  {path:'', redirectTo:'/',pathMatch:'full'},
  {path:'login', component: LoginComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
