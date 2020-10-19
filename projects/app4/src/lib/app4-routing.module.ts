import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { NgModule } from '@angular/core';
import { App4Component } from './app4.component';

// 路由示例，SubjectPageComponent 需要替换成对应的实际组件
const routes: Routes = [
  {
    path: 'app4',
    component: App4Component,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'page1',
        component: Page1Component,
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class App4RoutingModule {
}
