module.exports.register = function (Handlebars, options, param) {

  Handlebars.registerHelper('secondHalf', function (collection) {
    var arg = arguments,
      argLength = arg.length - 1,
      content = arguments[argLength];

    var list = collection.slice(Math.ceil((collection.length) / 2)),
      result = '';

    list.forEach(function (val) {
      result += content.fn(val);
    });

    return result;
  });
};
