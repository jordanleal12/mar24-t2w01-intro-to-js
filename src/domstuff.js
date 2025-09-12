console.log("domstuff.js loaded");

function paragraphTagUpdater() {
  let targetPtag = document.querySelector("p");

  console.log(targetPtag);

  targetPtag.innerText = "Some cool message here!";
}

paragraphTagUpdater();
