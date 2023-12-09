import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private CLIENT_ID = '50d42786e52940f78987dec2b26a8810'; // Replace with your Spotify API client ID
  private CLIENT_SECRET = '475518206a27420da2676d6bf240779b'; // Replace with your Spotify API client secret
  private bearerKey = 'NO_INITIAL_VALUE';
  private apiUrl = 'https://open.spotify.com';
  private headersTrackInfo = new HttpHeaders;

  getBearerKey() {
    const url = 'https://accounts.spotify.com/api/token';
    const body = `grant_type=client_credentials&client_id=${encodeURIComponent(
      this.CLIENT_ID
    )}&client_secret=${encodeURIComponent(this.CLIENT_SECRET)}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(url, body, { headers })
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
        this.headersTrackInfo = this.getHeaders();
        return this.http.get(url, { headers: this.headersTrackInfo });
      }),
      mergeMap((trackInfo: any) => {
        // Use mergeMap to handle the observable returned by getArtistBiography
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
    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=20dd22a56594733b14fecd57de7a42ec&format=json`;
    return this.http.get(url);
  }
}


