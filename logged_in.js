document.body.onload = function() {
	// Get provided access token from url
	var hash = window.location.hash.substring(1);
    var params = {}
    hash.split('&').map(hk => { 
      let temp = hk.split('='); 
        params[temp[0]] = temp[1] 
    });
    
    var token = params.access_token

	// Configure the spotify api wrapper
	this.spotify = new SpotifyWebApi()
	spotify.setAccessToken(token)

	show()
}

document.body.onclick = function() {
	if (document.webkitFullscreenElement) {
		document.webkitExitFullscreen()
	} else {
		document.body.webkitRequestFullscreen()
	}
}

function show() {

	this.spotify.getMyCurrentPlayingTrack(null, null).then(function(data) {
		var bg = document.getElementById("background")
		bg.style.background = "url(" + data.item.album.images[0].url + ")"

		var song = document.getElementById("song")
		song.innerHTML = data.item.name

		var info = document.getElementById("info")
		info.innerHTML = data.item.artists.map(artist => artist.name).join(", ")

		setTimeout(show, 1500)
	}).catch(function(err){
		console.log(err)
		// Lol this won't work
		var timeout = err["Retry-After"]
		setTimeout(show, timeout)
	})
}

