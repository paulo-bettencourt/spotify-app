export interface TracksAndBiography {
  biography: {
    artist: {
      name: string
      bio: {
        content: string
      }
    }
  },
  tracks: {
    tracks: {
      items: {
        album: {
          images: {
            url: string
          }
        },
        external_urls: {
          spotify: string
        }
      }
    }
  }
}
