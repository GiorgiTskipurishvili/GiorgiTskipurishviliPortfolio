import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { effect, Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Translate {
  
  // translations = signal<Record<string, any>>({});
  // currentLang = signal(localStorage.getItem('lang') || 'en');

  // constructor(private http: HttpClient) {
  //   effect(() => {
  //     const lang = this.currentLang();
  //     localStorage.setItem('lang', lang);

  //     this.http.get<Record<string, any>>(`assets/i18n/${lang}.json`)
  //       .subscribe({
  //         next: data => this.translations.set(data),
  //         error: err => console.error('Translation load error', err),
  //       });
  //   });
  // }

  // setLanguage(lang: string) {
  //   this.currentLang.set(lang);
  // }

  // translate(key: string): string {
  //   return key
  //     .split('.')
  //     .reduce<any>((acc, k) => acc?.[k], this.translations()) ?? key;
  // }


    translations = signal<Record<string, any>>({});
  currentLang = signal(typeof localStorage !== 'undefined' ? (localStorage.getItem('lang') || 'en') : 'en');

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    effect(() => {
      const lang = this.currentLang();
      
      if (isPlatformBrowser(this.platformId)) {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('lang', lang);
        }

        // ბრაუზერში ვიყენებთ ფარდობით მისამართს
        this.http.get<Record<string, any>>(`assets/i18n/${lang}.json`)
          .subscribe({
            next: data => this.translations.set(data),
            error: err => console.error('Translation load error', err),
          });
      }
    });
  }

  setLanguage(lang: string) {
    this.currentLang.set(lang);
  }

  translate(key: string): string {
    return key
      .split('.')
      .reduce<any>((acc, k) => acc?.[k], this.translations()) ?? key;
  }

  
}
