var pic0 = "Shadowkeep_keyart_4K.jpg";
var pic1 = "Choice 2P.png";
var pic2 = "Choice 2H.png";
var pic3P = "Double Punch ending.png"
var pic4P = "Forgiveness.png"
var pic3H = "Eternity Hug.png"
var pic4H = "Eternal adventure.png"

Pusher.logToConsole = true;

    var pusher = new Pusher('7c0ae57426d90de7c792', {
      cluster: 'ap4',
      forceTLS: true
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      alert(JSON.stringify(data));
    });
