
const channel = new BroadcastChannel('channel_name');
channel.onmessage = event => {                                        
  console.log(event.data);
  channel.close();
};
self.postMessage('worker.broadCastChannel: Ready');
