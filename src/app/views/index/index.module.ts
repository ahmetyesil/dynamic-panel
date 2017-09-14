import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';

@NgModule({
  imports: [
    IndexRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ IndexComponent ]
})
export class IndexModule { }
