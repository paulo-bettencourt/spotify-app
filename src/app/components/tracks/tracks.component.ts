import { HttpClientModule } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [HttpClientModule],
  providers: [ApiService],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.scss'
})
export class TracksComponent {

  apiService = inject(ApiService);
  trackId = '3wBy12K7BHKHJspUwJw8fq';
  playlistId = '12TqMgaZKMw6RF39JK6eeF';
  trackInfo = signal<any>(undefined);
  artistName = signal<any>('');
  artistAlbumCoverUrl = signal<any>('');
  artistBiography = signal<any>('');

  constructor() {
    this.apiService.getTrackInfo(this.trackId).subscribe({
      next: (data: any) => {
        this.trackInfo.set(data);
        this.artistName.set(data.originalTrackInfo.artists[0].name);
        this.artistAlbumCoverUrl.set(data.originalTrackInfo.album.images[0].url);
        this.artistBiography.set(data.artistBiography.artist.bio.content);
        console.log("MERGE MAP INFO: ", this.trackInfo);
      },
      error: (error: any) => {
        console.log("ERROR: ", error)
      }
    });
  }

}
