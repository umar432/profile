import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './Login/index';


const appRoutes : Routes =[
    {path:'login', component:LoginComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
