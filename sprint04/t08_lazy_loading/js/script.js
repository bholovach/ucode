let getServiceParent = document.getElementsByTagName("div")[0];

function addServiceNode (count) {
  getServiceParent.innerText = count + " images from 20";
}

let options = {
  rootMargin: '0px',
  threshold: 0.9
}

function hideService() {
  getServiceParent.style.display = "none";
}

let target = document.querySelector("img");
let countShown = 1;
addServiceNode(countShown);
let callback = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.setAttribute("src", entry.target.getAttribute("data-src"));
      if (countShown <= 20) {
        if (countShown == 20) {
          getServiceParent.style.background = "green";
          window.setTimeout(hideService, 3000);
        }
        addServiceNode(countShown);
        countShown++;
      }
    }
  })
}

let observer = new IntersectionObserver(callback, options);

let allTargets = document.querySelectorAll("img");
for (let i = 0; allTargets[i]; i++)
  observer.observe(allTargets[i]);

window.addEventListener('scroll', function (){
  let allTargets = document.querySelectorAll("img");
    for (let i = 0; allTargets[i]; i++)
      observer.observe(allTargets[i]);
})