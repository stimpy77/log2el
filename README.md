log2el
======

Logs text to an element for console-ish viewing. Includes a log/line gutter, and supports String.Format(s,args) string concatonation using "{0}", "{1}", etc. as parameter placeholders.

Requires jQuery.

Live demonstrations: 
- http://jsfiddle.net/rBnu7/18/ (observe the very bottom of the output panel)

## Syntax

    log2el([domElement,] string[, format args]);
    
The first argument is the element in which to append a log entry. It is optional; if not provided, an element with an ID of "log" will be located, and if that is not found then document.body will be used. The log entry is appended to the resulting container element.

The second argument is the text to insert into the log entry. This can be the first or sole argument if defaulting the container.

Subsequent arguments are inserted into the string at the locations of formatting placeholders of {0}, {1}, {2}, and so on.

## Other notes

If a div with an id of "log" is used, which is the default container, and the optiona log2el CSS is used, then the console will appear fix-positioned at the bottom of the window.
