((OJ) ->
  module 'x-infograph', setup: ->
    OJ['GENERATE_UNIQUE_IDS'] = true
    if not OJ.body.make then OJ.nodes.div()
  
  test 'Test the infograph component', ->
    expect 4
    
    infograph = OJ.body.make 'infograph'
    
    
    # Test 1: componentName is infograph
    deepEqual infograph.componentName is 'x-infograph', true, 'Component is an infograph'
    
    nodeId = infograph.getId() 
    dNode = document.getElementById nodeId
    # Test 2: node is in the DOM
    ok dNode, 'Node is in the DOM' 
    
    # Test 3: IDs are equal
    deepEqual nodeId, dNode.id, 'Element IDs are equal'
    
    infograph.remove()
    # Test 4: node is removed
    equal `undefined`, document.getElementById nodeId, 'infograph has been removed'
    
    return
    
  

  

  return
 
) ((if typeof global isnt 'undefined' and global then global else (if typeof window isnt 'undefined' then window else this))).OJ