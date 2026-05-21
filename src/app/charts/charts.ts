import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [],
  templateUrl: './charts.html',
  styleUrl: './charts.css',
})
export class Charts {
  active_chart_screen = "menu";
  
  selectChart(type: string) {
    this.active_chart_screen = type;

    window.scrollTo({
    top:0,
    behavior:'instant',
  });
}

  @Output() goHome = new EventEmitter<void>();
  Home() {
    this.goHome.emit();
  }

}