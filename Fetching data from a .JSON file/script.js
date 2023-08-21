var Band = document.getElementById("band");
var Artist = document.getElementById("artist");
var xhr = new XMLHttpRequest();
xhr.open('GET',"rockbands.json");
xhr.send();
xhr.addEventListener("readystatechange",function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var bands=JSON.parse(xhr.responseText);
    //console.log(bands);
    for(var band in bands){
        // console.log(band);
        var opt=document.createElement("option");
        opt.innerHTML=band;
        Band.appendChild(opt);
}
}
})

Band.addEventListener("change",function(){
    Artist.innerHTML="";
    var selectedBand = Band.value;
    var bands = JSON.parse(xhr.responseText);
    var artists = bands[selectedBand];
    for (var i = 0; i < artists.length; i++) {
        var artist = artists[i];
        var opt = document.createElement("option");
        opt.value = artist.value;
        opt.innerHTML = artist.name;
        Artist.appendChild(opt);
    }
});
Artist.addEventListener("change",function(){
    var url = Artist.value;
    open(url)
})