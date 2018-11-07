const appWorker = (function(){
    var _workers = {};
    var _toFunc = function(func){
        return { func:func }
    };
    return {
        make: function(name,scriptURL){
            _workers[name] = new Worker(scriptURL);
        },
        view: function(){
            return _workers;
        },
        stop: function(name){
            _workers[name].terminate();
        },
        run: function(name,message,callBack){
            _workers[name].onmessage = function(e){
                // console.log(e)
                _toFunc(callBack).func(e.data)
            };
            _workers[name].postMessage(message);
        },
        remove: function(name){
            delete _workers[name];
        }
    }
}());
