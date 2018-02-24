import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CollectListComponent } from './collector-list/collector-list.component';
import { CollectDetailComponent } from './collector-detail/collector-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CollectListComponent,
      },
      {
        path: 'detail',
        component: CollectDetailComponent,
      }
    ])
  ],
  exports: [RouterModule]
})
export class CollectRoutingModule {

}
