import loremIpsum from 'lorem-ipsum';

function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let data = {
  status: 'OK',
  news: []
};

for(var i = 0; i < 30; i++) {
  data.news.push({
    id: i,
    username: loremIpsum({
      units: 'words',
      count: 1
    }),
    comments: rand(0, 15),
    up: rand(0, 10),
    down: rand(0, 5),
    ctime: Date.now() + i,
    url: 'http://www.example.com',
    title: loremIpsum({
      units: 'sentences',
      count: 1
    })
  });
}

console.log(JSON.stringify(data, null, 2));

export default data;
