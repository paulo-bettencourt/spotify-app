import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, Injector, Input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'spotify-tracks',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [ApiService],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.scss'
})
export class TracksComponent {

  @Input() searchValue = '';
  apiService = inject(ApiService);
  injector = inject(Injector);
  tracksAndBiography = toSignal(this.apiService.searchSpotify("Madonna"), { injector: this.injector });

  searchArtist(artist: string) {
    this.tracksAndBiography = toSignal(this.apiService.searchSpotify(artist), { injector: this.injector });
  }
}
