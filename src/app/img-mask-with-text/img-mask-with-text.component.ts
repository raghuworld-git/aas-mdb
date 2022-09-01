import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-mask-with-text',
  templateUrl: './img-mask-with-text.component.html',
  styleUrls: ['./img-mask-with-text.component.scss']
})
export class ImgMaskWithTextComponent implements OnInit {


  @Input() imgSrc:string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
