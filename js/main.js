const scrollProgresselement = document.querySelector("#scroll-progress");
const scrollP = document.querySelector("#scrollp");

function scrollProgress(){
  const Totalheightofwebpage = document.body.scrollHeight;
  const currentdistancefromTop = document.documentElement.scrollTop;
  const windowheight = document.documentElement.clientHeight;


  /*we are getting percentage here*/
  const scrolledPercentage = (currentdistancefromTop / (Totalheightofwebpage - windowheight))*100;

  /*appending percentage to progress bar indicator*/
  scrollProgresselement.style.width = Math.round(scrolledPercentage) + '%';

  scrollP.innerHTML = scrollProgresselement.style.width;


}

document.addEventListener("scroll", scrollProgress);
