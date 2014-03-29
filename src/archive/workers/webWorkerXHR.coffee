# jshint undef: true, unused: true 

# global OJ:true, window:true, Ext:true, $: true, Q:true 
(->
  OJ.register "workers", OJ.makeNameSpace()
  
  ###
  Instance a web worker in an independent thread to make an AJAX POST request
  Returns an object with a promise to fulfill the request
  If web workers are supported, returns a handle on the worker
  else, returns the promise as a traditional AJAX promise
  ###
  OJ.workers.register "ajax", (url, data) ->
    ret = OJ.object()
    if window.Modernizr.webworkers #Chrome, FF, IE10+
      deferred = Q.defer()
      ret.promise = Q.promise
      ret.webWorker = new Worker("webworkers/xhrWorker.js")
      ret.listenTo = ret.webWorker.addEventListener
      ret.webWorker.addEventListener "message", ((e) ->
        if e.error
          deferred.reject new Error(e)
        else
          deferred.resolve e.data
        return
      ), false
      ret.webWorker.addEventListener "error", ((e) ->
        deferred.reject new Error(e)
        return
      ), false
      ret.webWorker.addEventListener "log", ((e) ->
        deferred.notify e
        return
      ), false
      ret.message =
        data: data
        url: "Services/" + url

      ret.webWorker.postMessage ret.message
    else #IE9
      throw new Error("Web Workers are not supported. Update to a modern browser.")
    ret

  return
)()
