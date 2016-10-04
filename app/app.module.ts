import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoot }  from './app.component.ts';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppRoot],
    bootstrap: [AppRoot]
})
export class AppModule { }