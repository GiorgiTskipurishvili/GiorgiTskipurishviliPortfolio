import { Component } from '@angular/core';
import { TranslatePipe } from "../../pipes/translate-pipe";

@Component({
  selector: 'app-main',
  imports: [TranslatePipe],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

}
