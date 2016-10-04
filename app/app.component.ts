
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<h1>PonyRacer {{title}}</h1>'
})
export class AppRoot {
    title: string = 'I changed the title.';
}