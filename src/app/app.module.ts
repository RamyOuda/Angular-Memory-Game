import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { ScoresComponent } from './scores/scores.component';
import { ColorCardComponent } from './color-card/color-card.component';

@NgModule({
  declarations: [AppComponent, GameComponent, ScoresComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ColorCardComponent],
})
export class AppModule {}
