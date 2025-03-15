import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path:'',
        component:LayoutPagesComponent
    }

];
@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule],
   

})
export class AuthRoutingModule{ }
