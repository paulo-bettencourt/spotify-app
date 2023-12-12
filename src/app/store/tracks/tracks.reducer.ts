import { createReducer, on } from '@ngrx/store';

import { Spotify } from '../../shared/interfaces/spotify.interface';
import { getTracks } from './tracks.actions';

export const initialState: Spotify = {
    tracks: {
      href: '',
      items: [],
      limit: 0,
      next: '',
      offset: 0,
      previous: null,
      total: 0
    }
};

export const tracksReducer = createReducer(
  initialState,
  on(getTracks, (state, { bioAndTracks }) => {
    return { ...bioAndTracks };
  })
);
