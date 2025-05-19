Ext.data.JsonP.String({
    "meta": {},
    "superclasses": [],
    "tagname": "class",
    "extends": null,
    "requires": [],
    "component": false,
    "mixins": [],
    "uses": [],
    "mixedInto": [],
    "alternateClassNames": [],
    "members": [{
            "meta": {},
            "tagname": "method",
            "owner": "String",
            "name": "toggle",
            "id": "method-toggle"
        }, {
            "meta": {},
            "tagname": "method",
            "owner": "String",
            "name": "trim",
            "id": "method-trim"
        }, {
            "meta": { "static": true },
            "tagname": "method",
            "owner": "String",
            "name": "escape",
            "id": "static-method-escape"
        }, {
            "meta": { "static": true },
            "tagname": "method",
            "owner": "String",
            "name": "format",
            "id": "static-method-format"
        }, {
            "meta": { "static": true },
            "tagname": "method",
            "owner": "String",
            "name": "leftPad",
            "id": "static-method-leftPad"
        }],
    "aliases": {},
    "parentMixins": [],
    "autodetected": {},
    "private": null,
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Ext-more.html#String' target='_blank'>Ext-more.js</a></div><div class='dependency'><a href='source/Ext.html#String' target='_blank'>Ext.js</a></div></pre><div class='doc-contents'><p>These functions are available as static methods on the JavaScript String object.</p>\n        <p>Available since: <b>1.1.0</b></p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-toggle' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='String'>String</span><br/><a href='source/Ext-more.html#String-method-toggle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/String-method-toggle' class='name expandable'>toggle</a>( <span class='pre'>value, other</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Utility function that allows you to easily switch a string between two alternating values. ...</div><div class='long'><p>Utility function that allows you to easily switch a string between two alternating values.  The passed value\nis compared to the current string, and if they are equal, the other value that was passed in is returned.  If\nthey are already different, the first value passed in is returned.  Note that this method returns the new value\nbut does not change the current string.</p>\n\n<pre><code>// alternate sort directions\nsort = sort.toggle('ASC', 'DESC');\n\n// instead of conditional logic:\nsort = (sort == 'ASC' ? 'DESC' : 'ASC');\n</code></pre>\n\n        <p>Available since: <b>1.1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The value to compare to the current string</p>\n</div></li><li><span class='pre'>other</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The new value to use if the string already equals the first value passed in</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The new value</p>\n</div></li></ul></div></div></div><div id='method-trim' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='String'>String</span><br/><a href='source/Ext-more.html#String-method-trim' target='_blank' class='view-source'>view source</a></div><a href='#!/api/String-method-trim' class='name expandable'>trim</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Trims whitespace from either end of a string, leaving spaces within the string intact. ...</div><div class='long'><p>Trims whitespace from either end of a string, leaving spaces within the string intact.  Example:</p>\n\n<pre><code>var s = '  foo bar  ';\nalert('-' + s + '-');         //alerts \"- foo bar -\"\nalert('-' + s.trim() + '-');  //alerts \"-foo bar-\"\n</code></pre>\n\n        <p>Available since: <b>2.3.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The trimmed string</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-escape' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='String'>String</span><br/><a href='source/Ext-more.html#String-static-method-escape' target='_blank' class='view-source'>view source</a></div><a href='#!/api/String-static-method-escape' class='name expandable'>escape</a>( <span class='pre'>string</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Escapes the passed string for ' and \\ ...</div><div class='long'><p>Escapes the passed string for ' and \\</p>\n        <p>Available since: <b>1.1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The string to escape</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The escaped string</p>\n</div></li></ul></div></div></div><div id='static-method-format' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='String'>String</span><br/><a href='source/Ext.html#String-static-method-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/String-static-method-format' class='name expandable'>format</a>( <span class='pre'>string, value1, value2</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens. ...</div><div class='long'><p>Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens.  Each\ntoken must be unique, and must increment in the format {0}, {1}, etc.  Example usage:</p>\n\n<pre><code>var cls = 'my-class', text = 'Some text';\nvar s = <a href=\"#!/api/String-static-method-format\" rel=\"String-static-method-format\" class=\"docClass\">String.format</a>('&lt;div class=\"{0}\">{1}&lt;/div>', cls, text);\n// s now contains the string: '&lt;div class=\"my-class\">Some text&lt;/div>'\n</code></pre>\n\n        <p>Available since: <b>1.1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The tokenized string to be formatted</p>\n</div></li><li><span class='pre'>value1</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The value to replace token {0}</p>\n</div></li><li><span class='pre'>value2</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Etc...</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The formatted string</p>\n</div></li></ul></div></div></div><div id='static-method-leftPad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='String'>String</span><br/><a href='source/Ext-more.html#String-static-method-leftPad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/String-static-method-leftPad' class='name expandable'>leftPad</a>( <span class='pre'>string, size, [char]</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Pads the left side of a string with a specified character. ...</div><div class='long'><p>Pads the left side of a string with a specified character.  This is especially useful\nfor normalizing number and date strings.  Example usage:</p>\n\n<pre><code>var s = <a href=\"#!/api/String-static-method-leftPad\" rel=\"String-static-method-leftPad\" class=\"docClass\">String.leftPad</a>('123', 5, '0');\n// s now contains the string: '00123'\n</code></pre>\n\n        <p>Available since: <b>1.1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The original string</p>\n</div></li><li><span class='pre'>size</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The total length of the output string</p>\n</div></li><li><span class='pre'>char</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The character with which to pad the original string (defaults to empty string \" \")</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The padded string</p>\n</div></li></ul></div></div></div></div></div></div></div>",
    "name": "String",
    "since": "1.1.0",
    "id": "class-String",
    "singleton": null,
    "subclasses": [],
    "files": [{ "filename": "Ext-more.js", "href": "Ext-more.html#String" }, {
            "filename": "Ext.js",
            "href": "Ext.html#String"
        }]
});
