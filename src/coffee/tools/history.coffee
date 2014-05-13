﻿((OJ) ->

  if OJ.global.addEventListener
    eventName = 'addEventListener'
    eventInfo = ''
  else 
    eventName = 'attachEvent'
    eventInfo = 'on'
  
  OJ.history.register 'pushState', (pageName, event) ->
    if pageName
      # keep the link in the browser history
      history.pushState null, null, '#' + pageName
      
      # here can cause data loading, etc.
    
      if event    
        # do not give a default action
        if event.preventDefault
          event.preventDefault()
        else
          event.returnValue = false
    false
  
  OJ.history.register 'restoreState', (location) ->
    pageName = location.hash
    if not pageName
      pageName = location.href.split('#')[1]
    if pageName
      pageName = pageName.replace '#', ''
      OJ.publish 'restoreState', pageName: pageName, location: location
    return
  
  ### 
  hang on the event, all references in this document
  ###
  OJ.document[eventName] eventInfo + 'click', ((event) ->
    event = event or window.event
    target = event.target or event.srcElement
    
    # looking for all the links with 'ajax' class found
    if target and target.nodeName is 'A' and (' ' + target.className + ' ').indexOf('ajax') >= 0
      OJ.pushState target.href, event
      
    event.preventDefault()
    event.stopPropagation()
  ), false

  ###
  hang on popstate event triggered by pressing back/forward in browser
  ###
  OJ.global[eventName] eventInfo + 'popstate', ((event) ->
    
    # we get a normal Location object
    
    ###
    Note, this is the only difference when using this library,
    because the object document.location cannot be overriden,
    so library the returns generated 'location' object within
    an object window.history, so get it out of 'history.location'.
    For browsers supporting 'history.pushState' get generated
    object 'location' with the usual 'document.location'.
    ###                     
    returnLocation = history.location or document.location
    
    ###
    here can cause data loading, etc.
    ###
    OJ.history.restoreState returnLocation
    
    return
  ), false 
  
  return
) ((if typeof global isnt 'undefined' and global then global else (if typeof window isnt 'undefined' then window else this))).OJ 