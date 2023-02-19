import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { ScoresComponent } from './scores/scores.component';

const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: 'scores', component: ScoresComponent },
  { path: '', redirectTo: 'game', pathMatch: 'full' },
  { path: '**', redirectTo: 'game', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
