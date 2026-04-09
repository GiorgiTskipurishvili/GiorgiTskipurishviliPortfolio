import { Component } from '@angular/core';
import { TranslatePipe } from "../../pipes/translate-pipe";

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {

}
