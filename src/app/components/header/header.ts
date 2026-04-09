import { Component, signal } from '@angular/core';
import { LanguageButton } from "../../shared/language-button/language-button";
import { Router, RouterLink } from '@angular/router';
import { Translate } from '../../services/translate';

@Component({
  selector: 'app-header',
  imports: [LanguageButton, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  isMenuOpen = false;

  constructor(public translateService: Translate, private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    // Mobile only, მაგრამ შეიძლება ყველგან ჩაგერიოს
    this.isMenuOpen = false;
  }

    navigate(path: string) {
    this.router.navigate([this.translateService.currentLang(), path]);
    this.closeMenu(); // აქ იხურება menu
  }

  get currentLang() {
    return this.translateService.currentLang();
  }

}
