
onmessage = event => {
    const array = new Uint8Array(event.data);                                      
    const index = 0;
    console.log(Atomics.load(array, index));
    Atomics.store(array, index, 2);
    console.log(Atomics.load(array, index));
    console.log(document);
    self.postMessage('');
};
