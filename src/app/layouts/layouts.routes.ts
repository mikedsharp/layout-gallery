import {RouterConfig} from '@angular/router';
import {LayoutListComponent} from "./layoutList.component";
import {LayoutComponent} from "./layout.component";

export const layoutsRoutes: RouterConfig = [
    {path: '', component: LayoutListComponent},
    {path: 'layouts', component: LayoutListComponent},
    {path: 'layout/:id', component: LayoutComponent}
];