
onmessage = event => {
    console.log(event.data);
    if (event.ports && event.ports.length > 0) {
        event.ports[0].postMessage('worker.messagePort: second');
    } else {
        self.postMessage('worker.globalScope: second');
    }
};
