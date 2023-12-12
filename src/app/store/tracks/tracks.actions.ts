import { createAction, props } from '@ngrx/store';

import { Spotify } from '../../shared/interfaces/spotify.interface';

export const getTracks = createAction('[Track Component] biography and tracks', props<{ bioAndTracks: Spotify }>()
);
