import { Component, OnInit } from '@angular/core';

interface DataItem {
  y: number;
  x: number;
}

@Component({
  selector: 'app-black-jack-game',
  imports: [],
  templateUrl: './black-jack-game.html',
  styleUrl: './black-jack-game.css',
})
export class BlackJackGame implements OnInit {
  
  active_screen = "rules";
  
  StartGame(type: string) {
    this.active_screen = type;
  }
  ngOnInit(): void {
    this.engine();
  };

  
  engine() {
    //rules

    // Betting
    let BET
    //Number of decks
    let NOD
    //Dealer hits soft 17
    let DHS17
    //Can Double After Split
    let CDAS
    //Doubling Available
    let DA
    //resplitting aces
    let RA
    //Surrender
    let SURR
    //cards

    //input

    //
  };
};
