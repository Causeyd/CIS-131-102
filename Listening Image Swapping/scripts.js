/*
function imageChange1(){
    document.getElementById('WildTalents').src ="Wild Talents.jpg";
}

function imageChange2(){
    document.getElementById('WildTalents').src ="Anima.jpg";
}

function imageChange3(){
    document.getElementById('WildTalents').src ="Cthulhu.gif";
}

function imageChange4(){
     document.getElementById('WildTalents').src ="Pathfinder.jpg";
}
*/


document.getElementById('lrgImage').addEventListener('dblclick', function(){
    document.getElementById('lrgImage').src = "MandM.jpg";
    document.getElementById('WildTalentsMini').src = "MandM.jpg";
    document.getElementById('AnimaMini').src = "Ragnarok.jpg";
    document.getElementById('CthulhuMini').src = "Shadowrun.jpg";
    document.getElementById('PathfinderMini').src = "Eclipse Phase.jpg";
  /*
    var image = document.getElementById('AnimaMini');
    image.src = "MandM.jpg";
    var image = document.getElementById('CthulhuMini');
    image.src = "Ragnarok.jpg";
    var image = document.getElementById('PathfinderMini');
    image.src = "Shadowrun.jpg";
    var image = document.getElementById('AnimaMini');
    image.src = "Eclipse Phase.jpg";
  */
})


/*
function imageChange(currentImage) {
  document.getElementById('lrgImage').src = currentImage;
}
*/