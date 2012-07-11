window.require.define({"views/templates/HomeViewTemplate": function(exports, require, module) {
  module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
    helpers = helpers || Handlebars.helpers;
    var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

  function program1(depth0,data) {
    
    var buffer = "", stack1;
    buffer += "\n	  	<li>";
    stack1 = depth0.content;
    if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
    else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "this.content", { hash: {} }); }
    buffer += escapeExpression(stack1) + "</li>\n	  	";
    return buffer;}

    buffer += "<!--\n	Author: \n	Date: \n\n	Description: Template Description\n-->\n\n<div id=\"content\">\n	<h1>WordpressBackbone</h1>\n  	<div id=\"name\">";
    foundHelper = helpers.content;
    stack1 = foundHelper || depth0.content;
    if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
    else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "content", { hash: {} }); }
    buffer += escapeExpression(stack1) + "</div>\n  	<ul>\n	  	";
    foundHelper = helpers.posts;
    stack1 = foundHelper || depth0.posts;
    stack2 = helpers.each;
    tmp1 = self.program(1, program1, data);
    tmp1.hash = {};
    tmp1.fn = tmp1;
    tmp1.inverse = self.noop;
    stack1 = stack2.call(depth0, stack1, tmp1);
    if(stack1 || stack1 === 0) { buffer += stack1; }
    buffer += "\n  	</ul>\n</div>\n";
    return buffer;});
}});

