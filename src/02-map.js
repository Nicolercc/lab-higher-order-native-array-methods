/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns an array of all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are song titles.
 */
function getSongTitles(songs) {
  let titles = [];
  const result = songs.map((song) => titles.push(song.title));
  return titles;
}

/**
 * Returns an array of all of the song titles with the artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are in the format "<TITLE> by <ARTIST>".
 *
 * EXAMPLE:
 *  getSongDetails(songs);
 *  //> [ "Berlin Tsukin by Taiyo Ky", "Up by Sebastian Kamae", ... ]
 */
function getSongDetails(songs) {
  let titleAndArtist = [];
  let song = songs.map((element) => {
    return `${element.title} by ${element.artist}`;
  });
  return song;
}

/**
 * Returns an array of objects, where each object has a key that is the song title and has a value that is the song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 *
 * EXAMPLE:
 *  getTitleAndArtist(songs);
 *  //> [ { "Berlin Tsukin": "Taiyo Ky" }, { Up: "Sebastian Kamae" }, ... ]
 */
function getTitleAndArtist(songs) {
  let obj = ({} = songs.map((element) => {
    return { [element.title]: element.artist };
  }));
  return obj;
}

module.exports = {
  getSongTitles,
  getSongDetails,
  getTitleAndArtist,
};
