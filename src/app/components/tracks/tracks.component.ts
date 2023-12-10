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
  tracksAndBiography = toSignal(this.apiService.searchSpotify("Madonna"), { injector: this.injector });
  @Input() searchValue = '';

  searchArtist(artist: string) {
    this.tracksAndBiography = toSignal(this.apiService.searchSpotify(artist), { injector: this.injector });
  }
}
