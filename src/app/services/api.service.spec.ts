import 'jest';

import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { BiographyAndTracks } from '../shared/interfaces/tracks-biography.interface';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get an instance of Http Headers', () => {
    //@ts-expect-error
    const spyServiceGetHeaders = jest.spyOn(service, 'getHeaders');
    //@ts-expect-error
    const headersResult = service.getHeaders();
    expect(spyServiceGetHeaders).toHaveBeenCalled();
    expect(headersResult).toBeInstanceOf(HttpHeaders);;
  });

  it('should get the artist\'s biography', () => {
    const spyServiceGetHeaders = jest.spyOn(service, 'getArtistBiography');
    const mockArtist = "Madonna";
    const observableResult = service.getArtistBiography(mockArtist);
    expect(spyServiceGetHeaders).toHaveBeenCalled();
    expect(observableResult).toBeInstanceOf(Observable<BiographyAndTracks>);
  });

});

/*

  searchSpotify(artist: string): Observable<BiographyAndTracks> {
    const url = environment.URL.SPOTIFY_SEARCH;
    const params = new HttpParams().set('q', artist).set('type', 'track');

    return this.getBearerKey().pipe(
      mergeMap((response: Token) => {
        this.bearerKey = response.access_token;
        return this.http.get<Spotify>(url, { headers: this.getHeaders(), params });
      }),
      mergeMap((tracksFromRequest: Spotify) => {
        return this.getArtistBiography(artist).pipe(
          map((biographyFromRequest: LastFM) => {
            return {
              biography: biographyFromRequest,
              tracks: tracksFromRequest
            }
          })
        )
*/
