import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Translate } from './services/translate';
import { filter } from 'rxjs';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

   constructor(private router: Router, private translate: Translate) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        const url = this.router.url;

        let langFromUrl = url.split('/')[1];

        // if (!langFromUrl) {
        //   langFromUrl = 'en';
        //   this.router.navigateByUrl(`/${langFromUrl}`);
        // }

        // if (langFromUrl && langFromUrl !== this.translate.currentLang()) {
        //   this.translate.setLanguage(langFromUrl);
        // }

        const validLangs = ['en', 'ka'];

        if (!langFromUrl || !validLangs.includes(langFromUrl)) {
          langFromUrl = 'en';
          // არ გადავამისამართოთ თუ ეს არის სტატიკური ფაილი (სურათი და ა.შ.)
          if (!url.includes('.') && url !== '/') {
            this.router.navigateByUrl(`/${langFromUrl}`);
          }
          return;
        }

        if (langFromUrl !== this.translate.currentLang()) {
          this.translate.setLanguage(langFromUrl);
        }

        // 🔥 GOOGLE ANALYTICS TRACKING
        if (typeof gtag === 'function') {
          gtag('config', 'G-LEB1Q91K2T', {
            page_path: url
          });
        }
      });
  }

  
}
