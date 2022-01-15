const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");
const playBtnmenu = $(".btn-toggle-play-menu");
const homePage = $(".home-page")
const sidebarMenu = $(".sidebar-menu")
const bar= $(".bar")
const searchIcon =$(".search-icon")
const search =$(".search")


const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},
  // (1/2) Uncomment the line below to use localStorage
  // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
  songs: [
    {
      name: "Yêu là cưới ",
      singer: "PHÁT HỒ X2X",
      path: "./asset/music/song1.mp3",
      image: "./asset/img/img1.png"
    },
    {
      name: "Cưa là đổ ",
      singer: "PHÁT HỒ X2X",
      path: "./asset/music/song2.mp3",
      image:
        "./asset/img/img2.png"
    },
    {
      name: "Ái Nộ",
      singer: "Masew x Khoi Vu",
      path:
        "./asset/music/song3.mp3",
      image: "./asset/img/img3.png"
    },
    {
      name: "Ái nộ X Lạc   ",
      singer: "Yling x Prod HuyLee Remix   ",
      path: "./asset/music/song41.mp3",
      image:
        "./asset/img/img41.png"
    },
    {
      name: "Đế vương    ",
      singer: "Đình Dũng  ",
      path: "./asset/music/song43.mp3",
      image:
        "./asset/img/img44.png"
    },
    {
      name: "Biết tìm đâu  ",
      singer: "Tuấn Hưng ",
      path: "./asset/music/song44.mp3",
      image:
        "./asset/img/img45.png"
    },
    {
      name: "Không bằng    ",
      singer: "Na  ",
      path: "./asset/music/song45.mp3",
      image:
        "./asset/img/img46.png"
    },
    {
      name: "Vách ngọc ngà ",
      singer: "Hương ly cover",
      path: "./asset/music/song4.mp3",
      image:
        "./asset/img/img4.png"
    },
    {
      name: "Em có yêu anh không ",
      singer: "Trung Quân idol",
      path: "./asset/music/song5.mp3",
      image:
        "./asset/img/img5.png"
    },
    {
      name: "Cô đơn dành cho ai",
      singer: "Lee Ken x Nai",
      path:
        "./asset/music/song6.mp3",
      image:
        "./asset/img/img6.png"
    },
    {
      name: "Đường tôi chở em về  ",
      singer: "Bùi Trường Linh",
      path: "./asset/music/song9.mp3",
      image:
        "./asset/img/img9.png"
    },
    {
      name: "Váy cưới   ",
      singer: "Trung Tự",
      path: "./asset/music/song8.mp3",
      image:
        "./asset/img/img8.png"
    },
    {
      name: "Lỗi tại anh ",
      singer: "ALEX Lam",
      path: "./asset/music/song49.mp3",
      image:
        "./asset/img/img50.png"
    },
    {
      name: "Tình thương phu thê ",
      singer: "Chí Hướng",
      path: "./asset/music/song46.mp3",
      image:
        "./asset/img/img47.png"
    },
    {
      name: "Đổi tình đổi áo đổi anh   ",
      singer: "Thành Đạt",
      path: "./asset/music/song47.mp3",
      image:
        "./asset/img/img48.png"
    },
    {
      name: "Chạnh lòng mà thương cô 2   ",
      singer: "Huy Vạc",
      path: "./asset/music/song48.mp3",
      image:
        "./asset/img/img49.png"
    },
    {
      name: "Câu hứa chưa vẹn tròn   ",
      singer: "Phát Huy T4 ",
      path: "./asset/music/song50.mp3",
      image:
        "./asset/img/img51.png"
    },
    {
      name: "Thay lòng",
      singer: "Nal ,Hương Ly",
      path: "./asset/music/song51.mp3",
      image:
        "./asset/img/img52.png"
    },
    {
      name: "Run Free   ",
      singer: "Deep chill ",
      path: "./asset/music/song52.mp3",
      image:
        "./asset/img/img53.png"
    },
    {
      name: "Gác lại lo âu  ",
      singer: "DA LAB ft.Miu Lê",
      path: "./asset/music/song14.mp3",
      image:
        "./asset/img/img14.png"
    },
    {
      name: "Hạ còn vương nắng  ",
      singer: "DATKAA, KIDO ",
      path: "./asset/music/song15.mp3",
      image:
        "./asset/img/img15.png"
    },
    {
      name: "Anh có muốn đưa em về không  ",
      singer: "Ngô Lan Hương ",
      path: "./asset/music/song18.mp3",
      image:
        "./asset/img/img18.png"
    },
    {
      name: "Bạc phận  ",
      singer: "K-ICM ft. Jack",
      path: "./asset/music/song19.mp3",
      image:
        "./asset/img/img19.png"
    },
    {
      name: "Sóng gió  ",
      singer: "K-ICM ft. Jack",
      path: "./asset/music/song20.mp3",
      image:
        "./asset/img/img20.png"
    },
    {
      name: "Hồng nhan   ",
      singer: "Jack(G5R)",
      path: "./asset/music/song21.mp3",
      image:
        "./asset/img/img21.png"
    },
    {
      name: "Chiều thu họa bóng nàng ",
      singer: "DATKAA x QT BEATZ",
      path: "./asset/music/song22.mp3",
      image:
        "./asset/img/img22.png"
    },
    {
      name: "Đom Đóm  ",
      singer: "Jack ",
      path: "./asset/music/song23.mp3",
      image:
        "./asset/img/img23.png"
    },
    {
      name: "Đoạn tuyệt nàng đi  ",
      singer: "Phát Huy T4 ",
      path: "./asset/music/song24.mp3",
      image:
        "./asset/img/img24.png"
    },
    {
      name: "Hoàng hoa ký   ",
      singer: "Long nón lá",
      path: "./asset/music/song25.mp3",
      image:
        "./asset/img/img25.png"
    },
    {
      name: "Gõ cửa trái tim  ",
      singer: "H2K ",
      path: "./asset/music/song26.mp3",
      image:
        "./asset/img/img26.png"
    },
    {
      name: "Sầu tím thiệp hồng   ",
      singer: "H2K ",
      path: "./asset/music/song27.mp3",
      image:
        "./asset/img/img27.png"
    },
    {
      name: "Người tình mùa đông  ",
      singer: "H2K",
      path: "./asset/music/song28.mp3",
      image:
        "./asset/img/img28.png"
    },
    {
      name: "Họ yêu ai mất rồi  ",
      singer: "Doãn hiếu  ",
      path: "./asset/music/song29.mp3",
      image:
        "./asset/img/img29.png"
    },
    {
      name: "Kẹo bông gòn ",
      singer: "H2K",
      path: "./asset/music/song30.mp3",
      image:
        "./asset/img/img30.png"
    },
    {
      name: "Tình yêu khủng long ",
      singer: "FAY x Ryan ",
      path: "./asset/music/song31.mp3",
      image:
        "./asset/img/img31.png"
    },
    {
      name: "Ngân lang   ",
      singer: "Jombie x Duy Khiêm ",
      path: "./asset/music/song32.mp3",
      image:
        "./asset/img/img32.png"
    },
    {
      name: "Phận duyên lỡ làng  ",
      singer: "Phát HuyT4 xTRUZG",
      path: "./asset/music/song33.mp3",
      image:
        "./asset/img/img33.png"
    },
    {
      name: "Tình yêu màu hồng  ",
      singer: "Hồ Văn Quý x Xám  ",
      path: "./asset/music/song34.mp3",
      image:
        "./asset/img/img34.png"
    },
    {
      name: "Tương tư nàng ca sĩ  ",
      singer: "Mike x Tamke  ",
      path: "./asset/music/song35.mp3",
      image:
        "./asset/img/img35.png"
    },
    {
      name: "Thế thái   ",
      singer: "Hương Ly",
      path: "./asset/music/song36.mp3",
      image:
        "./asset/img/img36.png"
    },
    {
      name: "Trú mưa remix   ",
      singer: "Umie x Teddy x Smile x mechill  ",
      path: "./asset/music/song37.mp3",
      image:
        "./asset/img/img37.png"
    },
    {
      name: "Tình đẹp đến mấy cũng tàn   ",
      singer: "Như Việt  ",
      path: "./asset/music/song38.mp3",
      image:
        "./asset/img/img38.png"
    },
    {
      name: "Vô duyên  ",
      singer: "Suzie x DR.A ",
      path: "./asset/music/song39.mp3",
      image:
        "./asset/img/img39.png"
    },
    {
      name: "Nắng ấm xa dần   ",
      singer: "Sơn tùng MTP  ",
      path: "./asset/music/song40.mp3",
      image:
        "./asset/img/img40.png"
    },
    {
      name: "Không phải dạng vừa đâu  ",
      singer: "Mộc vy cover ",
      path: "./asset/music/song42.mp3",
      image:
        "./asset/img/img42.png"
    },
    {
      name: "At my worst ",
      singer: "Pink Sweat $",
      path: "./asset/music/song16.mp3",
      image:
        "./asset/img/img16.png"
    },
    {
      name: "Dancing with your ghost  ",
      singer: "Sasha Sloan",
      path: "./asset/music/song17.mp3",
      image:
        "./asset/img/img17.png"
    },
    {
      name: "Maroon 5 - 'Memories'  ",
      singer: "Cover by. Blue.D",
      path: "./asset/music/song10.mp3",
      image:
        "./asset/img/img10.png"
    },
    {
      name: "Leemon Tree ",
      singer: "DJ DESA Remix",
      path: "./asset/music/song11.mp3",
      image:
        "./asset/img/img11.png"
    },
    {
      name: "Play Date  ",
      singer: "Melanie Martinez",
      path: "./asset/music/song12.mp3",
      image:
        "./asset/img/img12.png"
    },
    {
      name: "Lalala ",
      singer: "Naughty boy",
      path: "./asset/music/song13.mp3",
      image:
        "./asset/img/img13.png"
    },
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    // (2/2) Uncomment the line below to use localStorage
    // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
                    <div class="song ${index === this.currentIndex ? "active" : ""
        }" data-index="${index}">
                        <div class="thumb"
                            style="background-image: url('${song.image}')">
                        </div>
                        <div class="body">
                            <h3 class="title">${song.name}</h3>
                            <p class="author">${song.singer}</p>
                        </div>
                        <div class="option">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                `;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    // Xử lý CD quay / dừng
    // Handle CD spins / stops
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 seconds
      iterations: Infinity //lặp lại bao nhiêu lần
    });
    cdThumbAnimate.pause();

    // Xử lý phóng to / thu nhỏ CD
    // Handles CD enlargement / reduction
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };
    //xử lí home page
    homePage.onclick= function(){
      document.body.scrollTop=0;
      document.documentElement.scrollTop=0;
    }
    //Xử lí mở siderbar
    bar.onclick =function(){
      sidebarMenu.classList.toggle("hide")
    }
    // Xử lí đóng mở search
    searchIcon.onclick = function(){
      search.classList.toggle("search-close")
    }

    // Xử lý khi click play
    // Handle when click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };
    playBtnmenu.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Khi song được play
    // When the song is played
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };

    // Khi song bị pause
    // When the song is pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };

    // Khi tiến độ bài hát thay đổi
    // When the song progress changes
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };

    // Xử lý khi tua song
    // Handling when seek
    progress.oninput = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    // Khi next song
    // When next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Khi prev song
    // When prev song
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Xử lý bật / tắt random song
    // Handling on / off random song
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };

    // Xử lý lặp lại một song
    // Single-parallel repeat processing
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };

    // Xử lý next song khi audio ended
    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // Lắng nghe hành vi click vào playlist
    // Listen to playlist clicks
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Xử lý khi click vào song option
        // Handle when clicking on the song option
        if (e.target.closest(".option")) {
        }
      }
    };
  },

  activeSong :function(){
    var loopSongs = $$('.song');
    for (song of loopSongs){
            song.classList.remove('active')
    }
    const activeSong = loopSongs[this.currentIndex]
    activeSong.classList.add('active')
  },
  scrollToActiveSong: function(){
    if (this.currentIndex === 0) {
        document.documentElement.scrollTop = 0
    };
    setTimeout(() =>{
        $('.song.active').scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
        })
    })
},

  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();

  },

  start: function () {
    // Gán cấu hình từ config vào ứng dụng
    // Assign configuration from config to application
    this.loadConfig();

    // Định nghĩa các thuộc tính cho object
    // Defines properties for the object
    this.defineProperties();

    // Lắng nghe / xử lý các sự kiện (DOM events)
    // Listening / handling events (DOM events)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    // Load the first song information into the UI when running the app
    this.loadCurrentSong();

    // Render playlist
    this.render();

    // Hiển thị trạng thái ban đầu của button repeat & random
    // Display the initial state of the repeat & random button
    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  }

};



app.start();
