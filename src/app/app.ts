import { Component, signal, OnInit } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs/operators';
import { EVCalculator } from "./ev-calculator/ev-calculator";
import { BlackJackGame } from './black-jack-game/black-jack-game';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EVCalculator, BlackJackGame],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  Active_screen = "main"

  // SWUpdate
  constructor(private swUpdate: SwUpdate) {}

  ngOnInit() {
    // active checking for updates
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates
      .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
      .subscribe(() => {
        if (confirm('New version  of EDGE 21: BlackJack is available! Refresh app?')) {
          window.location.reload();
        };
      });
    }
  }
}