import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoot }  from './app.component.ts';
import { OtherComponent } from './other.component.ts';
import { AppRoutingModule, routedComponents } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        AppRoutingModule
    ],
    declarations: [
        AppRoot,
        OtherComponent
    ],
    bootstrap: [AppRoot]
})
export class AppModule { }