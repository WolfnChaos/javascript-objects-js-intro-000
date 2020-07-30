var playlist = { artistName: 'songTitle' }

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName] = songTitle;
}

function rremoveFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}
