import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [require('./app.component.scss'), require('../../public/css/master.scss')],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }
