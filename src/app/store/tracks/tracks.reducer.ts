import { createReducer, on } from '@ngrx/store';

import { BiographyAndTracks } from '../../shared/interfaces/tracks-biography.interface';
import { BiographyAndTracksApiActions } from './tracks.actions';

const initialState: BiographyAndTracks = {
  biography: {
    artist: {
      name: '',
      mbid: '',
      url: '',
      image: [],
      streamable: '',
      ontour: '',
      stats: { listeners: '', playcount: '' },
      similar: { artist: [] },
      tags: { tag: [] },
      bio: { links: { link: { "#text": '', rel: '', href: '' } }, published: '', summary: '', content: '' }
    }
  },
  tracks: {
    tracks: {
      href: '',
      items: [],
      limit: 0,
      next: '',
      offset: 0,
      previous: null,
      total: 0
    }
  }
};

export const tracksReducer = createReducer(
  initialState,
  on(BiographyAndTracksApiActions.retrievedBiographyAndTracks, (state, { biographyAndtracks }) => {
    return { ...biographyAndtracks };
  })
);


