import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
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
