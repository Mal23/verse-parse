const BASE_URL = 'https://api.musixmatch.com/ws/1.1/';
const ARTIST_SEARCH = 'artist.search';
const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '67dfba00e87eb084c238146f5101d4da';
const TRACK_SEARCH = 'track.search';
const LYRICS_SEARCH = 'track.lyrics.get';

export function makeSearchUrl(queryOptions) {
    if(!queryOptions.search) {
        return '';
    }
    const url = new URL(BASE_URL + ARTIST_SEARCH);
    url.searchParams.set('q_artist', queryOptions.search);
    url.searchParams.set('apikey', API_KEY);
    url.searchParams.set('page', queryOptions.page);
    url.searchParams.set('page_size', 100);

    return CORS_ANYWHERE + url.toString();
}

export function makeTrackSearchUrl(artist) {
    const url = new URL(BASE_URL + TRACK_SEARCH);
    url.searchParams.set('f_artist_id', artist.artist_id);
    url.searchParams.set('apikey', API_KEY);
    url.searchParams.set('f_has_lyrics', 1);
    url.searchParams.set('f_lyrics_language', 'en');
    url.searchParams.set('s_track_rating', 'desc');
    url.searchParams.set('page', 1);
    url.searchParams.set('page_size', 10);

    return CORS_ANYWHERE + url.toString();
}

export function makeLyricSearchUrl(trackID) {
    const url = new URL(BASE_URL + LYRICS_SEARCH);
    url.searchParams.set('track_id', trackID);
    url.searchParams.set('apikey', API_KEY);

    return CORS_ANYWHERE + url.toString();
}