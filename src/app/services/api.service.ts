import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';

import { environment } from '../../environments/environment.development';
import { LastFM } from '../models/lastfm.model';
import { Spotify } from '../models/spotify.model';
import { Token } from '../models/token.model';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private CLIENT_ID = environment.CLIENT_ID;
  private CLIENT_SECRET = environment.CLIENT_SECRET;
  private LAST_FM_API_KEY = environment.LAST_FM_API_KEY;
  private bearerKey!: string;

  getBearerKey(): Observable<Token> {
    const url = environment.URL.SPOTIFY_BEARER_KEY;
    const paramsString = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', this.CLIENT_ID)
      .set('client_secret', this.CLIENT_SECRET)
      .toString();
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post<Token>(url, paramsString, { headers });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.bearerKey}`,
    });
  }

  getArtistBiography(artist: string): Observable<LastFM> {
    const url = environment.URL.ARTIST_BIOGRAPHY;
    const params = new HttpParams()
      .set('method', 'artist.getinfo')
      .set('artist', artist)
      .set('api_key', this.LAST_FM_API_KEY)
      .set('format', 'json');

    return this.http.get<LastFM>(url, { params });
  }

  searchSpotify(artist: string) {
    const url = environment.URL.SPOTIFY_SEARCH;
    const params = new HttpParams().set('q', artist).set('type', 'track');

    return this.getBearerKey().pipe(
      mergeMap((response: Token) => {
        this.bearerKey = response.access_token;
        return this.http.get<Spotify>(url, { headers: this.getHeaders(), params });
      }),
      mergeMap((tracksFromRequest: Spotify) => {
        console.log("segundo objecto, :", tracksFromRequest);
        return this.getArtistBiography(artist).pipe(
          map((biographyFromRequest: LastFM) => {
            console.log("terceiro, :", biographyFromRequest);
            return {
              biography: biographyFromRequest,
              tracks: tracksFromRequest
            }
          })
        )
      })
    );
  }
}
