import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PicofdayRoutingModule } from './picofday-routing.module';
import { PicOfTheDayComponent } from './components/pic-of-the-day/pic-of-the-day.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [PicOfTheDayComponent],
  imports: [
    CommonModule,
    PicofdayRoutingModule,
    SharedModule
  ]
})
export class PicofdayModule { }
