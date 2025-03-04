import { Component, Input } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-youtube-player',
  imports: [YouTubePlayer],
  templateUrl: './youtube-player.component.html',
  styleUrl: './youtube-player.component.scss'
})
export class YoutubePlayerComponent {
  @Input() videoId = 'mVjYG9TSN88'
}
