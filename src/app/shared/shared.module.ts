import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeFrameComponent } from './components/youtube-frame/youtube-frame.component';

@NgModule({
  declarations: [
    YoutubeFrameComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    YoutubeFrameComponent
  ]
})
export class SharedModule { }
