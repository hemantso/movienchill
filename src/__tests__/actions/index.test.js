import {
  fetchPopularMovies,
  fetchMovieCredits,
  fetchMovieTrailer,
  fetchMovieSearch,
  fetchMovieDetails,
  fetchUpcomingMovies,
} from '../../actions';

describe('Test fetchPopularMovies action', () => {
  it('should return an function', () => {
    const result = fetchPopularMovies();
    expect(typeof result).toBe('function');
  });
});

describe('Test fetchMovieCredits action', () => {
  it('should return an object', () => {
    const result = fetchMovieCredits(464052);
    expect(typeof result).toBe('function');
  });
});

describe('Test fetchMovieTrailer action', () => {
  it('should return an object', () => {
    const result = fetchMovieTrailer(464052);
    expect(typeof result).toBe('function');
  });
});

describe('Test fetchMovieSearch action', () => {
  it('should return an object', () => {
    const result = fetchMovieSearch(464052);
    expect(typeof result).toBe('function');
  });
});

describe('Test fetchMovieDetails action', () => {
  it('should return an object', () => {
    const result = fetchMovieDetails(464052);
    expect(typeof result).toBe('function');
  });
});

describe('Test fetchUpcomingMovies action', () => {
  it('should return an function', () => {
    const result = fetchUpcomingMovies();
    expect(typeof result).toBe('function');
  });
});
