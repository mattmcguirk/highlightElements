// highlightElements.js
//
// Configuration takes two values, wrapper and color
// wrapper: determines the element to apply the effect to.
//          children of that element will be higlighted
//          when moused over. 
// color:   what color the higlight should be. 
//
// TODO:    - change behavior so that most nested child
//            is highlighted rather than first child
//            (nice for ULs and such)
           
var highlightElements = {
    config: { 
        wrapper: "body", 
        color: "LightYellow" 
    },
    
    // init: get passed configuration if necessary 
    // and call bindEvents
    init: function(config) {
        //apply the config passed in, if it exists
        if(typeof config === "object")
            $.extend(this.config, config); 
       
        this.bindEvents(); 
    },
    
    // helper function, changes background colors
    changeBackgroundColor: function(element, color) {
      $(element).css("background-color", color); 
    },

    //helper function, changes background color back to the  
    //color of the parent element
    clearBackground: function(element) {
        color = $(element).parent().css("background-color");
        $(element).css("background-color", color); 
    },
    
    //bind functions to the mouseenter and mouseleave events
    bindEvents: function() {
        //setup a copy of the scope for later
        _this = this;
        $(this.config.wrapper)
            .children() 
            .on("mouseenter", function() {
                _this.changeBackgroundColor(this, _this.config.color);
            }); 
        $(this.config.wrapper)
            .children()
            .on("mouseleave", function() {
                _this.clearBackground(this); 
            }); 
    }
};
