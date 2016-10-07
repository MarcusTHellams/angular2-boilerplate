import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherComponent } from './other.component';

const routes: Routes = [
    { path: 'other', component: OtherComponent },
    { path: '', pathMatch: 'full', redirectTo: 'other' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [OtherComponent];