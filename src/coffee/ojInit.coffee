((OJ) ->

  # # OJ Post-Initialization

  subNameSpaces = [
    'errors'
    'enums'
    'is'
    'instanceOf'
    'to'
    'nodes'
    'db'
    'components'
    'controls'
    'inputs'
    'notifications'
    'history'
    'cookie'
    'async'
  ]

  # ## SubNameSpaces

  # Pre-allocate certain common namespaces to avoid future race conditions.
  # This does require that the order of operations loads OJ.coffee first and oJInit.coffee second
  _.each subNameSpaces, (name) ->
    OJ.makeSubNameSpace name
  
  # ## Configuration variables

  # Automatically generate unique IDs for each node (default false)
  OJ['GENERATE_UNIQUE_IDS'] = false
  # Default root node for components/controls (default 'div')
  OJ['DEFAULT_COMPONENT_ROOT_NODETYPE'] = 'div'
  # Whether to hook into the global on error event to write errors to console (default false)
  OJ['TRACK_ON_ERROR'] = false
  
  return
  
)  ((if typeof global isnt 'undefined' and global then global else (if typeof window isnt 'undefined' then window else this))).OJ
