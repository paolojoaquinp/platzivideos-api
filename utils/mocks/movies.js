const moviesMock = [
  {
    id: 'd2a4a062-d256-41bb-b1b2-9d915af6b75e',
    title: 'Notti bianche, Le (White Nights)',
    year: 2019,
    cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    duration: 66,
    contentRating: 'G',
    source: 'https://ovh.net/semper/rutrum/nulla/nunc.jsp',
    tags: [
      'Action|Adventure',
      'Action|Adventure|Thriller',
      'Horror|Western',
      'Horror|Thriller',
      'Comedy|Romance|Sci-Fi',
      'Adventure|Animation|Children|Comedy|Fantasy',
      'Drama'
    ]
  },
  {
    id: '3f951b6d-03fa-4fb0-a7a1-188c0abe9e06',
    title: "King Solomon's Mines",
    year: 2019,
    cover: 'http://dummyimage.com/800x600.png/dddddd/000000',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    duration: 77,
    contentRating: 'NC-17',
    source:
      'https://multiply.com/dui/proin/leo/odio/porttitor/id/consequat.jsp',
    tags: [
      'Comedy',
      'War',
      'Drama|Horror',
      'Comedy|Drama|Romance',
      'Drama|Thriller',
      'Comedy',
      'Action|Drama|War',
      'Drama'
    ]
  },
  {
    id: 'c030eed2-dad1-47f4-b660-9cfb7170eadb',
    title: 'Inhuman Resources (Redd Inc.)',
    year: 2018,
    cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    duration: 142,
    contentRating: 'PG',
    source: 'http://odnoklassniki.ru/porta/volutpat/erat.jsp',
    tags: ['Crime|Drama|Thriller']
  },
  {
    id: 'c672ff92-c373-49f4-9c5b-f0151d304361',
    title: 'Fortress',
    year: 2019,
    cover: 'http://dummyimage.com/800x600.png/cc0000/ffffff',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    duration: 172,
    contentRating: 'PG',
    source: 'https://un.org/tortor/id/nulla/ultrices/aliquet/maecenas.png',
    tags: ['Drama', 'Drama|Mystery|Thriller', 'Drama|Thriller']
  },
  {
    id: '5ec75811-1001-4612-9743-67296d90071a',
    title: 'Transylmania',
    year: 2018,
    cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    duration: 155,
    contentRating: 'G',
    source: 'http://pagesperso-orange.fr/varius/ut/blandit/non/interdum/in.js',
    tags: [
      'Crime|Drama|Mystery|Thriller',
      'Crime|Drama|Mystery|Thriller',
      'Comedy|Sci-Fi',
      'Adventure|Comedy|Sci-Fi',
      'Drama'
    ]
  },
  {
    id: '63d718f2-4e37-4090-ad57-dd2cf22393e6',
    title: "Big Girls Don't Cry... They Get Even (Stepkids)",
    year: 2018,
    cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    duration: 173,
    contentRating: 'R',
    source: 'https://nih.gov/erat/quisque/erat/eros.jpg',
    tags: ['Action|Drama', 'Comedy']
  },
  {
    id: 'e9093aaa-daf2-4e32-aa6b-c3d79d0d9120',
    title: 'Amreeka',
    year: 2018,
    cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    duration: 115,
    contentRating: 'R',
    source: 'https://umich.edu/cursus/id/turpis/integer/aliquet.aspx',
    tags: ['Comedy|Romance', 'Drama|Thriller', 'Animation|Children']
  },
  {
    id: '94f4fa76-fcf9-4aa3-a18f-f54bb7d462bc',
    title: 'Hollow Man',
    year: 2018,
    cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    duration: 158,
    contentRating: 'NC-17',
    source: 'https://psu.edu/duis/bibendum/morbi/non/quam.aspx',
    tags: ['Drama', 'Thriller']
  },
  {
    id: '9a2e5834-4eb5-4083-8c21-87fdfc0b3b52',
    title: 'Hard Target',
    year: 2018,
    cover: 'http://dummyimage.com/800x600.png/dddddd/000000',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    duration: 173,
    contentRating: 'PG',
    source: 'https://flavors.me/lorem/ipsum/dolor/sit.json',
    tags: [
      'Animation|Comedy',
      'Documentary',
      'Action|Fantasy|Horror',
      'Thriller',
      'Comedy|Crime',
      'Drama'
    ]
  },
  {
    id: '11fff70c-c312-4791-b8b4-1a0665edd79e',
    title: 'Siete minutos (Seven Minutes)',
    year: 2019,
    cover: 'http://dummyimage.com/800x600.png/5fa2dd/ffffff',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 62,
    contentRating: 'PG',
    source:
      'http://columbia.edu/eget/orci/vehicula/condimentum/curabitur/in/libero.html',
    tags: ['Action|Adventure|Comedy|Drama|War', 'Animation', 'Drama']
  }
];
/*const moviesMock = [
    {
      "id": "94156f00-db7d-42e3-b5eb-f26e256fcae1",
      "title": "CQ",
      "year": 2001,
      "cover": "http://dummyimage.com/130x249.png/ff4444/ffffff",
      "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      "duration": 1922,
      "contentRating": "PG-13",
      "source": "https://cbsnews.com/eleifend/pede.png",
      "tags": [
      "Drama|Romance"
      ]
    },
    {
      "id": "ce16b2c2-1dd0-4e69-8176-09040f11cc2d",
      "title": "Spanish Earth, The",
      "year": 2012,
      "cover": "http://dummyimage.com/143x154.jpg/dddddd/000000",
      "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      "duration": 1987,
      "contentRating": "PG-13",
      "source": "http://census.gov/volutpat.jsp",
      "tags": [
      "Horror",
      "Documentary",
      "Drama|Romance"
      ]
    },
    {
      "id": "0c008a69-b8bb-4c96-97b3-2031ad0fc758",
      "title": "Mean Streets",
      "year": 1996,
      "cover": "http://dummyimage.com/176x226.bmp/dddddd/000000",
      "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      "duration": 1947,
      "contentRating": "PG",
      "source": "http://auda.org.au/sapien/sapien/non/mi.png",
      "tags": [
      "Comedy|Drama"
      ]
    },
    {
      "id": "38436953-f828-4000-a1e3-5ed36c633ff2",
      "title": "Drop Dead Gorgeous",
      "year": 1968,
      "cover": "http://dummyimage.com/170x206.jpg/cc0000/ffffff",
      "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "duration": 1955,
      "contentRating": "R",
      "source": "http://prnewswire.com/aliquam/erat.html",
      "tags": [
      "Thriller"
      ]
    },
    {
      "id": "8ab2f271-5567-4d78-9fed-88ef660451fe",
      "title": "War and Peace (Voyna i mir)",
      "year": 2003,
      "cover": "http://dummyimage.com/240x228.png/ff4444/ffffff",
      "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      "duration": 1953,
      "contentRating": "G",
      "source": "https://fda.gov/non/velit/nec/nisi/vulputate/nonummy/maecenas.xml",
      "tags": [
      "Crime|Drama|Fantasy|Film-Noir|Mystery|Romance",
      "Action|Comedy|Crime|Drama"
      ]
    },
    {
      "id": "1dc54123-8186-4cb9-adbb-a145e235871d",
      "title": "Thérèse",
      "year": 2009,
      "cover": "http://dummyimage.com/173x237.jpg/cc0000/ffffff",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      "duration": 1912,
      "contentRating": "NC-17",
      "source": "https://1688.com/varius/ut.html",
      "tags": [
      "Drama|Film-Noir",
      "Comedy|Romance",
      "Action|Sci-Fi",
      "Comedy|Drama",
      "Comedy|Drama|Romance"
      ]
    },
    {
      "id": "1cdb6171-8d12-4aea-bd86-c181d6e8cc42",
      "title": "Hunky Dory",
      "year": 2012,
      "cover": "http://dummyimage.com/205x226.bmp/5fa2dd/ffffff",
      "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      "duration": 1968,
      "contentRating": "NC-17",
      "source": "http://amazonaws.com/augue/aliquam/erat/volutpat/in/congue/etiam.png",
      "tags": [
      "Action|Thriller",
      "Action|Adventure",
      "Drama|Romance|Sci-Fi"
      ]
    },
    {
      "id": "4c1c536a-f323-4feb-80c1-ca93b896ae70",
      "title": "Five Easy Pieces",
      "year": 1997,
      "cover": "http://dummyimage.com/153x246.png/cc0000/ffffff",
      "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      "duration": 2039,
      "contentRating": "PG",
      "source": "http://nhs.uk/maecenas/leo/odio/condimentum.jsp",
      "tags": [
      "Adventure|Animation|Children|Drama|Fantasy"
      ]
    },
    {
      "id": "a8c6c9fc-0107-494f-83ad-9ceadb11dc35",
      "title": "Other, The",
      "year": 1994,
      "cover": "http://dummyimage.com/242x134.jpg/ff4444/ffffff",
      "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      "duration": 1935,
      "contentRating": "G",
      "source": "https://nba.com/sit.png",
      "tags": [
      "Crime|Drama|Mystery|Thriller"
      ]
    },
    {
      "id": "5d448927-7d8e-49a7-a3bc-280938a05581",
      "title": "Todos eran culpables",
      "year": 1995,
      "cover": "http://dummyimage.com/167x148.jpg/ff4444/ffffff",
      "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "duration": 1901,
      "contentRating": "PG-13",
      "source": "http://google.cn/at/turpis/donec/posuere/metus/vitae/ipsum.jsp",
      "tags": [
      "Action|Adventure|Drama"
      ]
    }
];*/

const filteredMoviesMocks = (tag) => {
  return moviesMock.filter(movie => movie.tags.includes(tag));
};

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0])
  }
}

module.exports = {
    moviesMock,
    filteredMoviesMocks,
    MoviesServiceMock
};