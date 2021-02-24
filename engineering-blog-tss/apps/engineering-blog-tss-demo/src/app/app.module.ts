import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IconButtonComponent } from './icon-button';
import { IconButtonCssComponent } from './icon-button-css/icon-button-css.component';


@NgModule({
  declarations: [AppComponent, IconButtonComponent, IconButtonCssComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
