((OJ) ->
  module 'x-tabs', setup: ->
    OJ['GENERATE_UNIQUE_IDS'] = true
    OJ.nodes.div()
  
  test 'Test the tabs component', ->
    expect 4
    
    tabs = OJ.body.tabs tabs: tabA: 'tabA', tabB: 'tabB'
    
    
    # Test 1: componentName is address
    deepEqual tabs.componentName is 'x-tabs', true, 'Component is a tabs'
    
    nodeId = tabs.getId() 
    dNode = document.getElementById nodeId
    # Test 2: node is in the DOM
    ok dNode, 'Node is in the DOM' 
    
    # Test 3: IDs are equal
    deepEqual nodeId, dNode.id, 'Element IDs are equal'
    
    tabs.remove()
    # Test 4: node is removed
    equal `undefined`, document.getElementById nodeId, 'tabs has been removed'
    
    return

  

  return
 
) ((if typeof global isnt 'undefined' and global then global else (if typeof window isnt 'undefined' then window else this))).OJ