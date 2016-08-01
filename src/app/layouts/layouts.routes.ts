import {RouterConfig} from '@angular/router';
import {LayoutListComponent} from "./layoutList.component";

export const layoutsRoutes: RouterConfig = [
    {path: '', component: LayoutListComponent},
    {path: 'layouts', component: LayoutListComponent}
];