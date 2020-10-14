import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './component/list/list.component';
import { DetailsComponent } from './component/details/details.component';
// import { TableComponent } from 'micro-app2';
// import { AppCompon} from 'module'

const routes: Routes = [{
  path: '',
  redirectTo: 'list',
  pathMatch: 'full',
}, {
  path: 'list',
  component: ListComponent,
  data: { title: '列表' },
}, {
  path: 'details',
  component: DetailsComponent,
  data: { title: '详情' },
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
