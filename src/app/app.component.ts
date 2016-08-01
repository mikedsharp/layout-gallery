import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [require('./app.component.scss'), require('../../public/css/master.scss')],
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES],
})
export class AppComponent { }
