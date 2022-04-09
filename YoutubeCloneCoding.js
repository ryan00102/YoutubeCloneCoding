const like = document.querySelector(".like_count");
const counter = document.querySelector(".info_menu_like")
let likeCount = 0;
let liker = "like";
like.onclick = function(){
    likeCount++;
    counter.innerHTML = likeCount;
}