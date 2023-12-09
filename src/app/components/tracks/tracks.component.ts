import { HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, inject } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [HttpClientModule],
  providers: [ApiService],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.scss'
})
export class TracksComponent implements AfterViewInit {

  apiService = inject(ApiService);
  trackId = '3wBy12K7BHKHJspUwJw8fq';
  trackInfo: any;

  ngAfterViewInit() {
    this.apiService.getTrackInfo(this.trackId).subscribe({
      next: (data: any) => {
        this.trackInfo = data;
        console.log("MERGE MAP INFO: ", this.trackInfo);
      },
      error: (error: any) => {
        console.log("ERROR: ", error)
      }
    });
  }

  getArtistsNames() {
    return this.trackInfo.originalTrackInfo.artists[0].name;
  }

  getAlbumCoverUrl() {
    return this.trackInfo.originalTrackInfo.album.images[0].url;
  }

  getArtistBiography() {
    return this.trackInfo.artistBiography.artist.bio.content;
  }

}
