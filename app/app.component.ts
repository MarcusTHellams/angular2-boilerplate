
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: 
    `<h1>Inline Template</h1>
    <h2 [hidden]="user.shown">{{user.name}}</h2>
    <fa></fa>
    <button (click)="refreshRaces()">Click Me</button>
    <p>{{races.length}} races</p>
    <ul>
        <li *ngFor="let race of races; let i = index; let  o = odd">{{race.name}} {{i}} {{o}}</li>
    </ul>
    <input [(ngModel)]="name" #ctrl="ngModel" required>
    <p>Value: {{ name }}</p>
    <p>Valid: {{ ctrl.valid }}</p>
    <button (click)="setValue()">Set value</button>
    <router-outlet></router-outlet>
      `,
    styles: ['h1{color:red}']
})
export class AppRoot {
    user: any = { name: 'Marcus', shown: true };
    races: Array<any> = [];
    name: String = '';
    refreshRaces() {
        this.races = [{ name: 'Lyon' }, { name: 'London' }];
    };
}