import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  searchValue: string = 'Madonna';
}
