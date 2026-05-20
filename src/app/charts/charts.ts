import { Component } from '@angular/core';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [],
  templateUrl: './charts.html',
  styleUrl: './charts.css',
})
export class Charts {
  active_chart_screen: string = "menu";
  

  selectChart(type: string) {
    this.active_chart_screen = type;
  }
}