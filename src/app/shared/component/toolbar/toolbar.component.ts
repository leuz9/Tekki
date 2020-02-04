import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Lang {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  langs: Lang[] = [
    {value: 'fr', viewValue: 'FR'},
    {value: 'en', viewValue: 'EN'},
  ];

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
}

  ngOnInit() {
  }

}
