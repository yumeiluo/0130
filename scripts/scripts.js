var el = document.querySelector(".list"); //選取到 class="list"
var link = "https://www.google.com.tw/"; //a 連結網址
var text = "用 Javascript 渲染 li 的內容在網頁上"; // a 連結文字

el.innerHTML = '<li class="fa-2x fa fa-cat"> <a href="' + link + '">' + text + "</a></li>";