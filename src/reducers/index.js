import * as types from '../actions/actionTypes';

const initialState = {
  accessToken: '',
  isLoggedIn: false,
  genres: [],
  featuredPlaylists: [],
  newReleases: [],
  album: null,
  playlist: null,
  currentlyPlayingSrc: null,
  currentlyPlayingTrack: null,
  currentlyPlayingAlbum: null,
  playerDurationDisplay: '0:00',
  playerCurrentTimeDisplay: '0:00',
  playerProgressBarWidth: '0px',
  isPlaying: false,
  startSync: false,
  recentlyPlayed: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return {
        ...state,
        accessToken: action.token,
        isLoggedIn: true
      };
    case types.LOG_OUT:
      return {
        ...state,
        accessToken: '',
        isLoggedIn: false
      };
    case types.SAVE_GENRES:
      return {
        ...state,
        genres: action.payload
      };
    case types.SAVE_FEATURED_PLAYLISTS:
      return {
        ...state,
        featuredPlaylists: action.payload
      };
    case types.SAVE_NEW_RELEASES:
      return {
        ...state,
        newReleases: action.payload
      };
    case types.SAVE_ALBUM:
      return {
        ...state,
        album: action.payload,
        playlist: null
      };
    case types.SAVE_PLAYLIST:
      return {
        ...state,
        album: null,
        playlist: action.payload
      };
    case types.SAVE_SONG_INFO:
      return {
        ...state,
        currentlyPlayingSrc: action.payload.track.preview_url,
        currentlyPlayingTrack: action.payload.track,
        currentlyPlayingAlbum: action.payload.album,
        playerProgressBarWidth: '0px'
      };
    case types.TOGGLE_PLAY_STATUS:
      return {
        ...state,
        isPlaying: !state.isPlaying
      };
    case types.START_SYNC:
      return {
        ...state,
        startSync: true
      };
    case types.END_START_SYNC:
      return {
        ...state,
        startSync: false
      };
    case types.UPDATE_SONG_PROGRESS:
      return {
        ...state,
        playerCurrentTimeDisplay: action.payload.currentTimeDisplay,
        playerProgressBarWidth: action.payload.progressBarWidth
      };
    case types.UPDATE_SONG_DURATION:
      return {
        ...state,
        playerDurationDisplay: action.payload.durationDisplay
      };
    case types.UPDATE_RECENTLY_PLAYED:
      const newRecentlyPlayed = [...state.recentlyPlayed];
      const albumPosition = newRecentlyPlayed
        .map(album => album.id)
        .indexOf(action.payload.newAlbum.id);

      // album doesn't exist in the list yet
      if (albumPosition === -1) {
        // add to front of list
        newRecentlyPlayed.unshift(action.payload.newAlbum);
        // keep list 3 items long
        if (newRecentlyPlayed.length > 3) {
          newRecentlyPlayed.pop();
        }
      }

      // album does exist in the list already
      if (albumPosition > -1) {
        newRecentlyPlayed.splice(albumPosition, 1); // remove from current position
        newRecentlyPlayed.unshift(action.payload.newAlbum); // add to front of list
      }

      return {
        ...state,
        recentlyPlayed: newRecentlyPlayed
      };
    default:
      return initialState;
  }
};

export default userReducer;
