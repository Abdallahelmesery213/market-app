import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public translate: TranslateService
    ){
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  switchLang(langVal: any) {
    let lang = langVal.target.value;
    let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
    htmlTag.lang = lang === "ar" ? "ar" : "en";
    htmlTag.className = lang === "ar" ? "rtlClass" : "";
    this.translate.use(lang);
    //window.location.reload();
  }


}
