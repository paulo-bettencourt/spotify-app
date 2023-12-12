import { LastFM } from './lastfm.interface';
import { Spotify } from './spotify.interface';

export interface BiographyAndTracks {
  biography: LastFM,
  tracks: Spotify
}
