import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule,ModalModule } from 'ngx-bootstrap';

import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';


@NgModule({
  imports: [
    ListRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ModalModule.forRoot()
  ],
  declarations: [ListComponent ]
})
export class ListModule { }
