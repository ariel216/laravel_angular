import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutloginComponent } from './layouts/layoutlogin/layoutlogin.component';
import { LayoutpanelComponent } from './layouts/layoutpanel/layoutpanel.component';
import { LayoutwebsiteComponent } from './layouts/layoutwebsite/layoutwebsite.component';

const routes: Routes = [

  {path:'', redirectTo:'website', pathMatch:'full'},

  {
    path:'',
    component:LayoutwebsiteComponent,
    children:[
      { 
        path: 'website', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule) 
      
      }]
  },
  {
    path:'',
    component:LayoutloginComponent,
    children:[
      { 
        path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
      
      }]
  },
  {
    path:'',
    component:LayoutpanelComponent,
    children:[
      { 
        path: 'panel', loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule),
      
      }]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
