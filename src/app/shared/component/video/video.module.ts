import {NgModule} from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';

import { VideoComponent } from './video.component';

@NgModule({
  imports: [
    YouTubePlayerModule,
  ],
  declarations: [VideoComponent],
  exports: [VideoComponent]
})
export class VideoModule {}
