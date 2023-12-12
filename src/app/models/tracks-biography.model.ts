import { LastFM } from './lastfm.model';
import { Spotify } from './spotify.model';

export interface BiographyAndTracks {
  biography: LastFM,
  tracks: Spotify
}
