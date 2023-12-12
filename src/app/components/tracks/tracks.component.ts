import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, Injector } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ApiService } from '../../services/api.service';
import { BiographyAndTracks } from '../../shared/interfaces/tracks-biography.interface';
import { BiographyAndTracksApiActions } from '../../store/tracks/tracks.actions';

@Component({
  selector: 'spotify-tracks',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  providers: [ApiService],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.scss',
})
export class TracksComponent {
  apiService = inject(ApiService);
  injector = inject(Injector);
  store = inject(Store);
  searchValue!: string;
  tracksAndBiography = toSignal<BiographyAndTracks>(
    this.store.select()
  );

  searchArtist(artist: string) {
    /*     this.tracksAndBiography = toSignal<BiographyAndTracks>(
      this.apiService.searchSpotify(artist),
      { injector: this.injector }
    ); */

    this.apiService
      .searchSpotify(artist)
      .subscribe((biographyAndtracks) =>
        this.store.dispatch(
          BiographyAndTracksApiActions.retrievedBiographyAndTracks({
            biographyAndtracks,
          })
        )
      );
  }
}
