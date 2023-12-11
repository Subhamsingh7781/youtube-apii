console.log("hello")
fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCkS7Vxu4PjM99w0Is6idjcg&maxResults=10&order=date&key=AIzaSyB0J4DasTX0xq2oxmESciHSkg30QmECEhY")
.then((result)=>{
   return result.json()
}).then((data)=>{
    console.log(data)
    let videos = data.items;
    let videoContainer = document.querySelector(".youtube-container")
    for(video of videos){
       videoContainer.innerHTML +=`
       <h3> ${video.snippet.title}</h3>
       <img src = "${video.snippet.thumbnails.default.url}">
       `
    }

})