import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private CLIENT_ID = '50d42786e52940f78987dec2b26a8810';
  private CLIENT_SECRET = '475518206a27420da2676d6bf240779b';
  private LAST_FM_API_KEY = '20dd22a56594733b14fecd57de7a42ec';
  private bearerKey!: string;

  getBearerKey() {
    const url = 'https://accounts.spotify.com/api/token';
    const paramsString = new HttpParams()
    .set('grant_type', 'client_credentials')
    .set('client_id', this.CLIENT_ID)
    .set('client_secret', this.CLIENT_SECRET)
    .toString();
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(url, paramsString, { headers })
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.bearerKey}`,
    });
  }

  getTrackInfo(trackId: string): Observable<any> {
    const url = `https://api.spotify.com/v1/tracks/${trackId}`;

    return this.getBearerKey().pipe(
      mergeMap((response: any) => {
        this.bearerKey = response.access_token;
        return this.http.get(url, { headers: this.getHeaders() });
      }),
      mergeMap((trackInfo: any) => {
        return this.getArtistBiography(trackInfo.artists[0].name).pipe(
          map((artistBio: any) => {
            return {
              originalTrackInfo: trackInfo,
              artistBiography: artistBio,
            };
          })
        );
      })
    );
  }

  getArtistBiography(artist: string) {
    const url = 'https://ws.audioscrobbler.com/2.0/';
    const params = new HttpParams()
      .set('method', 'artist.getinfo')
      .set('artist', artist)
      .set('api_key', this.LAST_FM_API_KEY)
      .set('format', 'json');

    return this.http.get(url, { params });
  }
}


