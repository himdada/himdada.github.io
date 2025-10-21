var posts=["2025/10/14/himdada的今日摄影/","2025/10/14/himdada的小记/","2025/10/21/今日小记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };