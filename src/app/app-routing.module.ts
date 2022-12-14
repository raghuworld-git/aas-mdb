import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";



const routes: Routes = [
  {
    path: 'picoftheday', loadChildren: () => import('./features/picofday/picofday.module')
      .then(m => m.PicofdayModule)
  },
  {
    path: 'dashboard', loadChildren: () => import("./features/dashboard/dashboard.module")
      .then(m => m.DashboardModule)
  },
  {
    path: 'launches', loadChildren: () => import("./features/launches/launches.module")
      .then(m => m.LaunchesModule)
  },
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
