import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { InfoHeaderComponent } from './components/info-header/info-header.component';
import { RouterModule } from '@angular/router';




const commonToAll: any[] = [NavComponent, InfoHeaderComponent];
const importsArray: any[] = [CommonModule, RouterModule,MdbCollapseModule];
const exportsArray: any[] = [...commonToAll];
const declarationsArray: any[] = [...commonToAll];


@NgModule({
  declarations: [...declarationsArray],
  imports: [...importsArray],
  exports: [...exportsArray]
})
export class LayoutModule { }
