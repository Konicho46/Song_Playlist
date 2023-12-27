// Data contoh playlist (dapat diganti dengan data sebenarnya)
const songs = [
  { 
    title: 'In The Night',
    singer: 'Fly by Midnight',
    album: { 
      name: 'In The Night Album', 
      image: 'Album_Image/in the night.jpg' // Ganti dengan lokasi yang sesuai
    },
    genre: 'Pop',
    duration: '3:30',
    youtubeLink: 'https://www.youtube.com/watch?v=YOUR_YOUTUBE_VIDEO_ID'
  },
  // Tambahkan lagu lain sesuai kebutuhan
];

// Function untuk menampilkan lagu dalam playlist
function displayPlaylist() {
  const songListContainer = document.getElementById('songList');

  // Iterate through songs and create song cards
  songs.forEach(song => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col-md-4', 'mb-4');

    const card = `
      <div class="card">
        <div class="square-img-container">
          <img src="${song.album.image}" class="card-img-top square-img img-fluid w-100" alt="${song.album.name}">
        </div>
        <div class="card-body">
          <h5 class="card-title">${song.title}</h5>
          <p class="card-text">${song.singer}</p>
          <p class="card-text">${song.album.name}</p>
          <p class="card-text">${song.genre}</p>
          <p class="card-text">${song.duration}</p>
        </div>
      </div>
    `;

    cardDiv.innerHTML = card;
    songListContainer.appendChild(cardDiv);
  });
}

// Panggil fungsi untuk menampilkan playlist saat halaman dimuat
window.onload = displayPlaylist;
