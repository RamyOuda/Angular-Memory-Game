import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'game', component: GomeComponent },
  // { path: 'scores', component: ScoresComponent },
  // { path: '', redirectTo: 'game', pathMatch: 'full' },
  // { path: '**', redirectTo: 'game', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
