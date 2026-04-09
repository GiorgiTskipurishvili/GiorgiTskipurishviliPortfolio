import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageButton } from './language-button';

describe('LanguageButton', () => {
  let component: LanguageButton;
  let fixture: ComponentFixture<LanguageButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
