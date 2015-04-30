# highlightElements.js #
**highlightElements.js** is an *extremely* simple JavaScript application
that was developed as an exercise in writing code using the Module design
pattern. It will higlight any element that is moused over so long as it is contained in For a good primer on the design pattern, the following links may
be useful: 

* [Mastering the Module Pattern](http://toddmotto.com/mastering-the-module-pattern/)
* [Using Objects to Organize Your Code](http://rmurphey.com/blog/2009/10/15/using-objects-to-organize-your-code/)

## Requirements ##
* jQuery 2.1.3 or better

## Usage ##
1. Include the higlightElement.js file in the `head` of your HTML document
2. Pass a configuration to `highlightElement.init()`. The configuration can take two arguments: 
   * `wrapper`: The element containing children which should be higlighted when moused over. The default is `body`.
   * `color`: The color of the highlight. Default is light yellow. 

And that's it!