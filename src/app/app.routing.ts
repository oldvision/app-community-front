import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "app/login/login.component";
import {ManagementComponent} from "./management/management.component";

const APP_ROUTES: Routes = [
  {path:'', redirectTo:'/',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'management', component: ManagementComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
