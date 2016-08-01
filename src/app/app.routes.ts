import {provideRouter} from '@angular/router';
import {layoutsRoutes} from "./layouts/layouts.routes";

export const routes = [
    ...layoutsRoutes
]

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
