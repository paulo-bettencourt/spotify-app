import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ApiService } from '../../services/api.service';
import { TracksComponent } from '../tracks/tracks.component';

@Component({
  selector: 'spotify-search',
  standalone: true,
  imports: [FormsModule, TracksComponent],
  providers: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  apiService = inject(ApiService);
  searchValue: string = 'Madonna';
  searchResults: any;

  search(artist: string) {

    console.log("clickou")

    this.apiService.searchSpotify(artist).subscribe({
      next: (response: any) => {
        this.searchResults = response.tracks.items;
        console.log("SPOTIFY SEARCH ", response);
      },
      error: (error: any) => {
        console.log("SPOTIFY ERROR ", error);
      }
    })
  }

}
