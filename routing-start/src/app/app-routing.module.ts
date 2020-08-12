import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ServerComponent } from "./servers/server/server.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";

const appRoutes:Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'users/:id/:name', component: UserComponent},
    {path: 'servers', component: ServerComponent},
    {path: 'page-not-found', component: PageNotFoundComponent},
    {path: "**", redirectTo: '/page-not-found'}
  ];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}