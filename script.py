import pusher

channels_client = pusher.Pusher(
  app_id='884778',
  key='7c0ae57426d90de7c792',
  secret='01963719fe760bd46d54',
  cluster='ap4',
  ssl=True
)

channels_client.trigger('my-channel', 'my-event', {'message': 'hello world'})
