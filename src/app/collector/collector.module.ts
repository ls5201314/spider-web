import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectListComponent } from './collector-list/collector-list.component';
import {CollectRoutingModule} from './collector-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollectDetailComponent } from './collector-detail/collector-detail.component';
import {CollectorService} from './collector.service';


@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    CollectRoutingModule
  ],
  declarations: [CollectListComponent, CollectDetailComponent],
  providers: [CollectorService]
})
export class CollectorModule { }
