import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, Injector } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';

import { TruncatorPipe } from '../../pipes/truncator';
import { ApiService } from '../../services/api.service';
import { BiographyAndTracks } from '../../shared/interfaces/tracks-biography.interface';

@Component({
  selector: 'spotify-tracks',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, TruncatorPipe],
  providers: [ApiService],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.scss',
})
export class TracksComponent {
  apiService = inject(ApiService);
  injector = inject(Injector);
  searchValue!: string;
  tracksAndBiography = toSignal<BiographyAndTracks>(
    this.apiService.searchSpotify("Madonna"),
    { injector: this.injector }
  );

  searchArtist(artist: string) {
       this.tracksAndBiography = toSignal<BiographyAndTracks>(
      this.apiService.searchSpotify(artist),
      { injector: this.injector }
    );
  }
}
