import { Component } from '@angular/core';
import { TranslatePipe } from "../../pipes/translate-pipe";

@Component({
  selector: 'app-education',
  imports: [TranslatePipe],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {

}
