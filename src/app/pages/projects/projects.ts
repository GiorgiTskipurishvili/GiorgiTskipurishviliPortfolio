import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  projects = [
  {
    title: 'LexSport Georgia - Sports Law Platform',
    description: 'Full-stack app with Angular',
    image: 'assets/LexSportScreen.png',
    live: 'https://lexsportgeorgia.uk/',
  }
];

}
