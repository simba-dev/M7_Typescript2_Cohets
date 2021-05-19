"use strict";
var f = document.getElementById("playButton");
f.addEventListener('click', function (e) {
    changePage("mainpage-container", "playpage-container");
    return false;
});
var f2 = document.getElementById("newRocket");
f2.addEventListener('click', function (e) {
    changePage("playpage-container", "newrocketpage-container");
    return false;
});
function changePage(page1, page2) {
    document.getElementById(page1).classList.add("hide");
    setTimeout(function () {
        document.getElementById(page1).hidden = true;
        document.getElementById(page2).hidden = false;
    }, 1000);
    setTimeout(function () {
        document.getElementById(page2).classList.remove("hide");
    }, 1100);
    return false;
}
