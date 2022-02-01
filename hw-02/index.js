class post {
  constructor(_title, _body) {
    this.title = _title;
    this.body = _body;
  }
}

const postList = [
  new post("ilk post", "selam"),
  new post("javascript is awesome", "hi"),
  new post("hello nodejs", "hi"),
];

function addPost(post) {
  postList.push(post);
  console.table(postList);
}

addPost(new post("selam canlar", "hi loves"));
