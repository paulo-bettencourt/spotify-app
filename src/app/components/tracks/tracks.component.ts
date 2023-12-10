import { HttpClientModule } from '@angular/common/http';
import { Component, inject, Injector, Input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

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
  private injector = inject(Injector);
  tracksAndBiography = toSignal(this.apiService.searchSpotify("Madonna"));;
  @Input() searchValue = '';

  searchArtist(artist: string) {
    console.log("clickou");
    this.tracksAndBiography = toSignal(this.apiService.searchSpotify(artist), { injector: this.injector });
    console.log("SIGNAL -> ", this.tracksAndBiography())

  }

}

/* this.searchResults.set(response.tracks.tracks.items);
this.artistName.set(response.biography.artist.name);
this.artistAlbumCoverUrl.set(response.biography.artist.image[1]["#text"]);
this.artistBiography.set(response.biography.artist.bio.content);
 */
