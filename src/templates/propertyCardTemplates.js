(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['propertyCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "    <article class=\"propertyCard\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n        <div class=\"propertyCard__overlay\" style=\"background-color: "
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.agency : depth0)) != null ? stack1.brandingColors : stack1)) != null ? stack1.primary : stack1), depth0))
    + "\">\r\n            <input type=\"button\" class=\"propertyCard__overlay__button\" value=\"Save\">\r\n            <p class=\"propertyCard__overlay__button__notification\"></p>\r\n        </div>\r\n        <div class=\"propertyCard__header\" style=\"background-color:"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.agency : depth0)) != null ? stack1.brandingColors : stack1)) != null ? stack1.primary : stack1), depth0))
    + "\"><img src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.agency : depth0)) != null ? stack1.logo : stack1), depth0))
    + "\"/></div>\r\n        <div class=\"propertyCard__image\"><img src=\""
    + alias4(((helper = (helper = helpers.mainImage || (depth0 != null ? depth0.mainImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mainImage","hash":{},"data":data}) : helper)))
    + "\"/></div>\r\n        <div class=\"propertyCard__price\">"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</div>\r\n    </article>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options;

  stack1 = ((helper = (helper = helpers.properties || (depth0 != null ? depth0.properties : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"properties","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.properties) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"useData":true});
})();