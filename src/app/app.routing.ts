import {Routes, RouterModule} from "@angular/router"

const APP_ROUTES: Routes = [
  {path:'', redirectTo:'/',pathMatch:'full'},
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
