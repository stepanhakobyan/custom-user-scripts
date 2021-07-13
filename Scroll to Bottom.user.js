// ==UserScript==
// @name        Scroll to Bottom
// @match       https://server2016.armsoft.am/Lists/Review/Flat.aspx*
// @version     1.0
// @author      -
// @description 4/26/2021, 12:06:22 PM
// @run-at       document-end
// ==/UserScript==

// //window.scrollTo(0,document.body.scrollHeight);

// //let div = document.getElementById("s4-workspace");
// //let div = document.getElementById("contentBox");


// //div.scrollTo(0,div.scrollHeight);
// //div.scrollTop = div.scrollHeight;


function scrollToBottom(id) {
    let div = document.getElementById(id);
    div.scrollTop = div.scrollHeight - div.clientHeight;
}

// scrollToBottom("s4-workspace");


window.addEventListener("load", () => {
  let downDiv = document.createElement("div");
  downDiv.style.position = "absolute";
  //downDiv.style.borderRadius = "15px";
  downDiv.style.zIndex = 999;
  downDiv.style.top = "0px";
  //downDiv.style.left = "2000px";
  downDiv.style.left = (document.body.clientWidth / 3).toString() + "px";
  downDiv.style.backgroundColor = "lightgray";
  //downDiv.style.padding = "0px";
  downDiv.style.cursor = "pointer";
  downDiv.style.border = "1px solid gray";
  //downDiv.style.width = "150px";
  downDiv.innerHTML = "<span style='font-family:\"Segoe UI\"; font-size:25pt; font-weight:bold;'>&nbsp;&nbsp;&nbsp;⮟&nbsp;&nbsp;&nbsp;</span>";

  downDiv.addEventListener("click", () => {
    scrollToBottom("s4-workspace");
  });

  let div = document.getElementById("s4-workspace");
  div.appendChild(downDiv);
});