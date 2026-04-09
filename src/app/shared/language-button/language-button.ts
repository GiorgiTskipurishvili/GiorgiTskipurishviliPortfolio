import { Component, Input } from '@angular/core';
import { Translate } from '../../services/translate';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-language-button',
  imports: [],
  templateUrl: './language-button.html',
  styleUrl: './language-button.css',
})
export class LanguageButton {

  @Input() isMenuOpen: boolean = false;

  constructor(
    public translateService: Translate,
    private router: Router,
  ) {}

  toggleLang() {
    const nextLang = this.translateService.currentLang() === 'en' ? 'ka' : 'en';
    this.translateService.setLanguage(nextLang);
 
    const segments = this.router.url.split('/');
    segments[1] = nextLang;
    this.router.navigateByUrl(segments.join('/'));
  }

  get langLabel() {
    return this.translateService.currentLang() === 'en' ? 'EN' : 'GE';
  }

}
