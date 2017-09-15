import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule,ModalModule } from 'ngx-bootstrap';

import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';


@NgModule({
  imports: [
    ClientRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ModalModule.forRoot()
  ],
  declarations: [ ClientComponent ]
})
export class ClientModule { }
