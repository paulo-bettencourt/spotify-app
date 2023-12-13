import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LastFM } from '../shared/interfaces/lastfm.interface';
import { Spotify } from '../shared/interfaces/spotify.interface';
import { Token } from '../shared/interfaces/token.interface';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(ApiService);
  });

  afterEach(() => {
    httpTestingController.verify();
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
    const mockArtist = 'Maddona';
    const mockBiography = "Madonna Louise Veronica Ciccone (born August 16, 1958 in Bay City, Michigan) is an American singer, songwriter and actress. She is considered one of the most influential figures in popular culture and has often been referred to as the ", Queen; of; Pop; ". Madonna is noted for her continual reinvention and versatility in music production, songwriting and visual presentation. She is also known for pushing the boundaries of artistic expression in mainstream music, while maintaining control over every aspect of her career. Her works, which incorporate social, political, sexual and religious themes, have generated both controversy and critical acclaim.";
    const mockToken: Token = {
      access_token: 'mockAccessToken',
      token_type: '',
      expires_in: 0
    };
    const mockSpotify: Spotify = {
      tracks: {
        href: '',
        items: [],
        limit: 0,
        next: '',
        offset: 0,
        previous: undefined,
        total: 0
      }
    };
    const mockLastFM: LastFM = {
      artist: {
        name: 'Example Artist',
        mbid: '1234',
        url: 'https://example.com/artist',
        image: [{ "#text": 'https://example.com/artist-image.jpg', size: 'large' }],
        streamable: 'true',
        ontour: 'false',
        stats: { listeners: '1000', playcount: '5000' },
        similar: { artist: [{ name: 'Similar Artist', url: 'https://example.com/similar-artist', image: [{ "#text": 'https://example.com/image.jpg', size: 'large' }] }] },
        tags: { tag: [{ name: 'Rock', url: 'https://example.com/tag/rock' }] },
        bio: {
          links: { link: { "#text": 'https://example.com/artist-link', rel: 'original', href: 'https://example.com/artist-link' } },
          published: '2023-01-01',
          summary: 'Artist summary',
          content: 'Artist content'
        }
      }
    };

    const spyServiceGetHeaders = jest.spyOn(service, 'getArtistBiography');
    service.getArtistBiography(mockArtist).subscribe((data: any) => {
      expect(data, BiographyAndTracks).toBe({
        biography: mockLastFM,
        tracks: mockSpotify
      });
    });

    expect(spyServiceGetHeaders).toHaveBeenCalled();
  });

});
