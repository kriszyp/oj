﻿((OJ) ->
  nodeName = 'x-infograph'
  className = 'infograph'
  
  OJ.components.members[nodeName] = className
  OJ.components.register className, (options, owner) ->
    defaults = 
      icon: 'male'
      height: 10
      width: 10
      active: 90
      inactive: 10
      disabled: 0
      unknown: 0
      props: 
        class: 'infograph'
      styles:
        color: '#4193d0'
    
    OJ.extend defaults, options
    ret = OJ.component defaults, owner, nodeName 
    
    #table = cmpnt.table defaults
    
    count = defaults.width * defaults.height
    total = defaults.active + defaults.inactive + defaults.disabled + defaults.unknown          
    if total > count then throw new Error 'Total members exceeds dimensions of infographic'
    
    unknown = defaults.unknown
    disabled = defaults.disabled                
    inactive = defaults.inactive
    active = defaults.active                            
                                                                        
    for rowNum in [defaults.height..1]
      for colNum in [defaults.width..1]
        icon = 'fa fa-fw fa-' + defaults.icon + ' text-' + defaults.icon
        
        if inactive > 0
          inactive -= 1
          icon += '-light'
        else if disabled > 0
          disabled -= 1
          icon += ' text-error'
        else if unknown > 0
          unknown -= 1  
          icon += ' text-warning'  
        else if active > 0
          active -= 1
        #table.cell rowNum, colNum  
        ret.i props: class: icon              
               
                         
    ret

  return
) ((if typeof global isnt 'undefined' and global then global else ((if typeof window isnt 'undefined' then window else this)))).OJ
