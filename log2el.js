(function() {
    var ilog = 0;
    var global = window;
    function strprepad(n,w,c) { 
        n=n.toString();
        while (n.length < w) n = c + n;
        return n;
    };
    global.log2el = function(s) {
        for (var i=1; i<arguments.length; i++) {
            s = s.replace(new RegExp("\\{" + (i-1) + "\\}", 'g'), arguments[i]);
        }
        var el = $('<div><pre></pre></div>');
        el.find('pre').text(strprepad(++ilog,2, " ") + ': ' + s);
        $('#log').append(el);
    };
})();