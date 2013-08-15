(function() {
    var ilog = 0;
    var global = window;
    function strprepad(n,w,c) { 
        n=n.toString();
        while (n.length < w) n = c + n;
        return n;
    }
    global.log2el = function(targetel, s) {
      var args = $.makeArray(arguments);
      if (typeof(targetel) == 'string') {
        args.unshift($('#log').length > 0 ? $('#log') : $('body'));
      }
      targetel = args[0];
      s = args[1];
      for (var i=2; i<args.length; i++) {
          s = s.replace(new RegExp("\\{" + (i-2) + "\\}", 'g'), args[i]);
      }
      var el = $('<div><pre></pre></div>'); 
      el.find('pre').text(strprepad(++ilog,2, " ") + ': ' + s);
      $(targetel).append(el);
    };
})();
