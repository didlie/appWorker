self.onmessage = function(e){
    var x = 1;
    setInterval(function(){
        self.postMessage(x);
        x++;
    },1000)
}
