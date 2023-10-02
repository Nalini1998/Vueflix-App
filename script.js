const movies = {
  "暗格里的秘密": {
    "id": '暗格里的秘密',
    "title": "Our Secret",
    "subtitle": "Our Secret",
    "description": `A story of a talented campus beau, Zhou Si Yue (Chen Zhe Yuan), and a determined Cinderella, Ding Xian (Xu Meng Jie), who accompany each other through the lows and lost of their youth and eventually become better selves. In the day-to-day campus life, the two accompanied each other through a low and lost period, and finally grew and changed together.`,
    "largeImgSrc": `url('https://thegioidienanh.vn/stores/news_dataimages/hongnhung/112021/27/19/3832_008eSTYlly1gu7tp734zjj62bc1jlu0x02.jpg?rt=20211127193907')`,
    "smallImgSrc": 'https://thegioidienanh.vn/stores/news_dataimages/hongnhung/112021/27/19/3832_008eSTYlly1gu7tp734zjj62bc1jlu0x02.jpg?rt=20211127193907',
    "releaseDate": 'July 21 2017',
    "duration": '25 episodes',
    "genre": 'Action, Drama, History',
    "trailerPath": 'https://www.youtube.com/embed/sA7SYWn2CqY',
    "favorite": false
  },
  
  "The Social Network": {
    "id": 'The Social Network',
    "title": "The Social Network",
    "subtitle": "The Social Network",
    "description": `In 2010, “The Social Network,” with its egomaniacal antihero, seemed overdramatic, too pessimistic in the way it examined the birth of one of the biggest social media sites. Facebook was still in its infancy, far removed from what it would eventually become.`,
    "largeImgSrc": `url('https://static01.nyt.com/images/2020/10/05/arts/05social-network01/05social-network01-superJumbo-v3.jpg')`,
    "smallImgSrc": 'https://static01.nyt.com/images/2020/10/05/arts/05social-network01/05social-network01-superJumbo-v3.jpg',
    "releaseDate": 'November 7 2010',
    "duration": '2hr 49min',
    "genre": 'Adventure, Drama',
    "trailerPath": 'https://www.youtube.com/embed/lB95KLmpLR4',
    "favorite": false
  },
  
  
  "Source Code": {
    "id": 'Source Code',
    "title": "Source Code",
    "subtitle": "Source Code",
    "description": `When decorated soldier Captain Colter Stevens (Jake Gyllenhaal) wakes up in the body of an unknown man, he discovers he's part of a mission to find the bomber of a Chicago commuter train. In an assignment unlike any he's ever known, he learns he's part of a government experiment called the "Source Code," a program that enables him to cross over into another man's identity in the last 8 minutes of his life...`,
    "smallImgSrc": 'https://3.bp.blogspot.com/-ZyPYHuILvu8/Up9FC2VE1aI/AAAAAAAABCA/OxjDZ7SOJNo/s1600/The-Source-Code-Desktop-Wallpaper.jpg',
    "largeImgSrc": `url('https://3.bp.blogspot.com/-ZyPYHuILvu8/Up9FC2VE1aI/AAAAAAAABCA/OxjDZ7SOJNo/s1600/The-Source-Code-Desktop-Wallpaper.jpg')`,
    "releaseDate": 'July 20 2011',
    "duration": '1hr 33min',
    "genre": 'Action, Thriller',
    "trailerPath": 'https://www.youtube.com/embed/mnJegNyAb1w',
    "favorite": false
  },
  
  "Cute Programmer": {
    "id": 'Cute Programmer',
    "title": "Cute Programmer",
    "subtitle": "Cute Programmer",
    "description": `After falling in love with genius programmer Jiang Yi Cheng, Lu Li enrolls into the school he once studied at, and also took up the same major - computer programming. Setting Jiang Yi Cheng as her role model in her heart, she achieves good grades in school. However after graduation, she did not expect that Jiang Yi Cheng's company does not recruit female employees. Lu Li decides to disguise as a man and enter the company.`,
    "smallImgSrc": 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/4f7f0195e021a553044c621602477982cd9127a2ac034a6da8ac522f23e41390._RI_TTW_.jpg',
    "largeImgSrc": `url('https://images-na.ssl-images-amazon.com/images/S/pv-target-images/4f7f0195e021a553044c621602477982cd9127a2ac034a6da8ac522f23e41390._RI_TTW_.jpg')`,
    "releaseDate": 'September 10 2021',
    "duration": '30 episodes',
    "genre": 'Romantic',
    "trailerPath": 'https://www.youtube.com/embed/gdKdzkqffBI',
    "favorite": false
  },
  
  "Don't Disturb My Study": {
    "id": "Don't Disturb My Study",
    "title": "Don't Disturb My Study",
    "subtitle": "Don't Disturb My Study",
    "description": `In 2020, at the age of 28, Nan Xiangwan, who is the human resource director of a world-renowned company, is also a patient with academic discrimination. She seems like a master of life, but is full of anxiety in her heart. A high-tech psychotherapy brought Nan Xiangwan's memories back to 20 years ago, allowing her to review her senior year in high school and face Class 7 which she was incompatible with.`,
    "smallImgSrc": 'https://pic-bstarstatic.akamaized.net/ugc/eaf47add73b8afc9181d1e5026c9f791.jpg',
    "largeImgSrc": `url('https://pic-bstarstatic.akamaized.net/ugc/eaf47add73b8afc9181d1e5026c9f791.jpg')`,
    "releaseDate": 'March 12 2021',
    "duration": '24 episodes',
    "genre": 'Romantic',
    "trailerPath": 'https://www.youtube.com/embed/_NP_SgKiFo0',
    "favorite": false
  }
}

// 1. Define route components.
const Intro = {
  template: `
    <div class="hero-body" style="background: #1e1d1d">
      <div class="container has-text-centered">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter vertical-align">
            <b><h1 class="home-intro">
              MeowTube
            </h1></b>
            <img src="https://1.bp.blogspot.com/-dhlhU8ilzsc/Xl7jN7X5xVI/AAAAAAAW78k/ftFGGIewFe8WieY7Aqhz_gNhiG340Wl9ACLcBGAsYHQ/s1600/AW4146982_00.gif" style="width: 200px"/><br>
            <b><p class="home-subintro">Let's Netflix and Chill!</p></b>
          </div>
        </div>
      </div>
    </div>`
}

const Movie = {
  template: 
    `<div :class="[{ 'favorite-shadow': selectedMovie.favorite }, 'hero-body']" :style="{ 'background-image': selectedMovie.largeImgSrc }">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <a class="nav-item">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </a>
              <router-link to="/" class="nav-item is-active">
                Home
              </router-link>
              <a class="nav-item is-active">
                <span class="tag is-rounded">
                Films
                </span>
              </a>
              <a class="nav-item is-active">
                Short
              </a>
              <a class="nav-item is-active">
                Trending
              </a>
              <a class="nav-item is-active">
                Music
              </a>
              <a class="nav-item is-active">
                Subscription
              </a>
              <a class="nav-item is-active">
                Your Channel
              </a>
              <a class="nav-item is-active">
                Watch Later
              </a>
              <a class="nav-item is-active">
                History
              </a>
            </div>
            <div class="nav-right desktop">
              <span class="nav-item">
                <router-link to="/"  class="title">
                  MeowTube
                </router-link>
              </span>
            </div>
          </div>
        </header>
        <div class="container description-container">
          <div class="columns">
            <div class="column is-three-quarters">
              <h1 class="title">
                {{ selectedMovie.title }}
              </h1>
              <h4 class="subtitle">
                <p class="subtitle-tag">{{ selectedMovie.duration }} |</p>
                <p class="subtitle-tag">{{ selectedMovie.genre }} |</p>
                <p class="subtitle-tag">{{ selectedMovie.releaseDate }}</p>
              </h4>
              <p class="description">{{ selectedMovie.description }}</p>
              <div class="links">
                <router-link :to="{path: '/' + $route.params.id + '/trailer'}" class="button play-button"> Play  <i class="fa fa-play"></i></router-link>
                <a class="button is-link favorites-button" @click="addToFavorites(selectedMovie)">
                  <span :class="[{ 'hide': selectedMovie.favorite }]">Add to</span><span :class="[{ 'hide': !selectedMovie.favorite }]">Remove from </span>&nbsp;favorites <i class="fa fa-plus-square-o"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>`,
  data () {
    return {
      selectedMovie: movies[this.$route.params.id]
    }
  },
  watch: {
    $route () {
      this.selectMovie()
    }
  },
  methods: {
    selectMovie () {
      this.selectedMovie = movies[this.$route.params.id]
    },
    addToFavorites (selectedMovie) {
      movies[this.$route.params.id].favorite = !movies[this.$route.params.id].favorite
    }
  }
}

const MovieTrailer = {
  template: `
    <div class="trailer-body" style="background: #1e1d1d">
      <div class="has-text-centered">
        <div class="columns">
          <div class="column vertical-align">
            <iframe
              allowFullScreen
              frameborder="0"
              height="376"
              :src="trailerUrlPath"
              style="width: 100%; min-width: 936px"
            />
          </div>
        </div>
      </div>
    </div>`,
  data () {
    return {
      trailerUrlPath: movies[this.$route.params.id].trailerPath
    }
  }
}

// 5. Define routes
const routes = [
  { path: '/', component: Intro },
  { path: '/:id', component: Movie },
  { path: '/:id/trailer', component: MovieTrailer }
]

const router = new VueRouter({
  routes
})

const rootApp = new Vue({
  el: '#app',
  router: router,
  data () {
    return {
      movieChoices: movies
    }
  },
})