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
      $(function() { // defer to document init
        if (typeof(targetel) == 'string') {
          args.unshift($('#log').length > 0 ? $('#log') : $(document.body));
        }
        targetel = args[0];
        s = args[1];
        for (var i=2; i<args.length; i++) {
            s = s.replace(new RegExp("\\{" + (i-2) + "\\}", 'g'), args[i]);
        }
        var el = $('<div><pre></pre></div>'); 
        var pre = el.find('pre');
        pre.addClass('log-item');
        if (ilog % 2 == 0) pre.addClass('alt');
        pre.html('<span class="gutter">' 
            + strprepad(++ilog,4, " ") + ': ' + '</span><span class="log-data"></span>');
        el.find('.log-data').text(s);
        $(targetel).append(el);
      });
    };
})();
