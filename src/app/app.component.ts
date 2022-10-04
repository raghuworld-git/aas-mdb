// Project structure to refer
// https://github.com/ghoul007/Angular-project-structure

import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public _router:Router){}
  routeToIngore:string="todayinhistory";

  title = 'mdb-angular-ui-kit-free';

}
