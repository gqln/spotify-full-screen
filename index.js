document.body.onload = function() {

  const my_client_id = 'd010d54caf214a22ae20044fcccb2b8d'
  const scopes = 'user-read-currently-playing user-read-playback-state' 
  const redirect_uri = 'http://personal.psu.edu/gxg5186/spotify/logged_in.html'

  const redirect_uri_test = 'http://localhost:3005/logged_in.html'

   var url = 'https://accounts.spotify.com/authorize' +
    '?response_type=token' +
    '&client_id=' + my_client_id +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(redirect_uri);

  var link = document.getElementById("linky")

  link.href = url
}