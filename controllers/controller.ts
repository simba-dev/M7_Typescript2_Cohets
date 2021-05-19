
let f = document.getElementById("playButton") as HTMLButtonElement;
f.addEventListener('click', (e: Event) => {
   changePage("mainpage-container","playpage-container")
   return false;
}
)



let f2 = document.getElementById("newRocket") as HTMLButtonElement;
f2.addEventListener('click', (e: Event) => {
  changePage("playpage-container","newrocketpage-container");
  
  return false;
}
)



function changePage(page1 : string, page2: string){
  (<HTMLDivElement>document.getElementById(page1)).classList.add("hide");
  
  setTimeout(function(){ 
    (<HTMLDivElement>document.getElementById(page1)).hidden=true;
    (<HTMLDivElement>document.getElementById(page2)).hidden=false;
   }, 1000);
   setTimeout(function(){ 
    (<HTMLDivElement>document.getElementById(page2)).classList.remove("hide");
   }, 1100);
   return false;

}
