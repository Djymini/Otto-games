import { Component } from '@angular/core';
import { SessionInputCard } from "../components/session-input-card/session-input-card";
import { HomeInfos } from "../components/home-infos/home-infos";

@Component({
  selector: 'app-home.page',
  imports: [SessionInputCard, HomeInfos],
  template: `
    <h1>Bienvenue sur Otto games</h1>
    <app-session-input-card></app-session-input-card>
    <app-home-infos></app-home-infos>
  `,
  styles: ``,
})
export default class HomePage {}
