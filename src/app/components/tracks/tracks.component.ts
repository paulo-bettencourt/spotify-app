import { HttpClientModule } from '@angular/common/http';
import { Component, inject, Input, signal } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'spotify-tracks',
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
  searchResults = signal<any>(undefined);
  @Input() searchValue = '';

  searchArtist(artist: string) {
    console.log("clickou")

    this.apiService.searchSpotify(artist).subscribe({
      next: (response: any) => {
        console.log("SPOTIFY SEARCH ", response);
        this.searchResults.set(response.tracks.tracks.items);
        this.artistName.set(response.biography.artist.name);
        this.artistAlbumCoverUrl.set(response.biography.artist.image[1]["#text"]);
        this.artistBiography.set(response.biography.artist.bio.content);
      },
      error: (error: any) => {
        console.log("SPOTIFY ERROR ", error);
      }
    })
  }

}
