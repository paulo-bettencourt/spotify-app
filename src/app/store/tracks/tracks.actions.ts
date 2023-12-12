import { createActionGroup, props } from '@ngrx/store';

import { BiographyAndTracks } from '../../shared/interfaces/tracks-biography.interface';

export const BiographyAndTracksApiActions = createActionGroup({
  source: 'Track Component',
  events: {
    'Retrieved Biography And Tracks': props<{ biographyAndtracks: BiographyAndTracks }>(),
  },
});
