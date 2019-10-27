
var pusher = new Pusher('7c0ae57426d90de7c792', {
  cluster: 'ap4',
  forceTLS: true
});

Pusher.logToConsole = true;


var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
  alert(JSON.stringify(data));
});
