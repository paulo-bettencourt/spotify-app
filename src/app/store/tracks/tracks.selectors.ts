import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BiographyAndTracks } from '../../shared/interfaces/tracks-biography.interface';

export const selectBooks = createFeatureSelector<BiographyAndTracks>('biographyAndtracks');

export const selectBiographyAndTracksCollection = createSelector(
  selectBooks,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id)!);
  }
);

export const getCount = (multiply: number) => createSelector(
  selectBooks,
  return (counter) => counter * multiply
);

const count = this.store.select(getCount(5));
