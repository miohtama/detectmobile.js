Ext.data.JsonP.detectmobile({
  "docauthor": null,
  "singleton": true,
  "code_type": "assignment",
  "superclasses": [

  ],
  "mixins": [

  ],
  "static": false,
  "href": "detectmobile.html#detectmobile",
  "component": false,
  "inheritable": false,
  "alternateClassNames": [

  ],
  "statics": {
    "property": [

    ],
    "css_var": [

    ],
    "method": [

    ],
    "css_mixin": [

    ],
    "cfg": [

    ],
    "event": [

    ]
  },
  "protected": false,
  "tagname": "class",
  "mixedInto": [

  ],
  "members": {
    "property": [
      {
        "owner": "detectmobile",
        "type": "String",
        "static": false,
        "href": "detectmobile.html#detectmobile-property-cookieName",
        "inheritable": false,
        "protected": false,
        "tagname": "property",
        "private": false,
        "alias": null,
        "name": "cookieName",
        "linenr": 68,
        "deprecated": null,
        "doc": "<p>The cookie name set when we force the mobile browser to stick on the website.</p>\n",
        "filename": "src/detectmobile.js",
        "html_filename": "detectmobile.html"
      },
      {
        "owner": "detectmobile",
        "type": "String",
        "shortDoc": "Redirect target where mobile browsers coming to the website land. ...",
        "static": false,
        "href": "detectmobile.html#detectmobile-property-defaultMobileURL",
        "inheritable": false,
        "protected": false,
        "tagname": "property",
        "private": false,
        "alias": null,
        "name": "defaultMobileURL",
        "linenr": 31,
        "deprecated": null,
        "doc": "<p>Redirect target where mobile browsers coming to the website land.</p>\n\n<p>Example:</p>\n\n<pre><code>  detectmobile.defaultMobileURL = \"http://m.site.somewhere.else\";\n</code></pre>\n\n<p>Usually the website homepage. For dynamic URL mappings\ndefine <a href=\"#/api/detectmobile-property-redirectCallback\" rel=\"detectmobile-property-redirectCallback\" class=\"docClass\">redirectCallback</a> function.</p>\n",
        "filename": "src/detectmobile.js",
        "html_filename": "detectmobile.html"
      },
      {
        "owner": "detectmobile",
        "type": "String",
        "static": false,
        "href": "detectmobile.html#detectmobile-property-forceMobileParameter",
        "inheritable": false,
        "protected": false,
        "tagname": "property",
        "private": false,
        "alias": null,
        "name": "forceMobileParameter",
        "linenr": 82,
        "deprecated": null,
        "doc": "<p>Use this HTTP GET query parameter name to make browsers come back from the forced web site to the mobile site.</p>\n",
        "filename": "src/detectmobile.js",
        "html_filename": "detectmobile.html"
      },
      {
        "owner": "detectmobile",
        "type": "String",
        "static": false,
        "href": "detectmobile.html#detectmobile-property-forceWebParameter",
        "inheritable": false,
        "protected": false,
        "tagname": "property",
        "private": false,
        "alias": null,
        "name": "forceWebParameter",
        "linenr": 75,
        "deprecated": null,
        "doc": "<p>HTTP GET query parameter name used to detect forcing the web mode.</p>\n",
        "filename": "src/detectmobile.js",
        "html_filename": "detectmobile.html"
      },
      {
        "owner": "detectmobile",
        "type": "Array",
        "shortDoc": "If any of hostname domain parts matches this list assume we are on a mobile site. ...",
        "static": false,
        "href": "detectmobile.html#detectmobile-property-mobileSiteDomainIdentifiers",
        "inheritable": false,
        "protected": false,
        "tagname": "property",
        "private": false,
        "alias": null,
        "name": "mobileSiteDomainIdentifiers",
        "linenr": 46,
        "deprecated": null,
        "doc": "<p>If any of hostname domain parts matches this list assume we are on a mobile site.</p>\n\n<p>By default detect <strong>m.site.com</strong> and <strong>site.mobi</strong>.</p>\n",
        "filename": "src/detectmobile.js",
        "html_filename": "detectmobile.html"
      },
      {
        "owner": "detectmobile",
        "type": "Fuction",
        "static": false,
        "href": "detectmobile.html#detectmobile-property-redirectCallback",
        "inheritable": false,
        "protected": false,
        "tagname": "property",
        "private": false,
        "alias": null,
        "name": "redirectCallback",
        "linenr": 22,
        "deprecated": null,
        "doc": "<p>Function callback(mode, url) which is called when the mobile browser arrives\nto the website and must be redirected.</p>\n",
        "filename": "src/detectmobile.js",
        "html_filename": "detectmobile.html"
      },
      {
        "owner": "detectmobile",
        "type": "Number",
        "shortDoc": "How wide the screen must be in the pixels for the browser\nto be considered be a mobile browser. ...",
        "static": false,
        "href": "detectmobile.html#detectmobile-property-thresholdWidthInPixels",
        "inheritable": false,
        "protected": false,
        "tagname": "property",
        "private": false,
        "alias": null,
        "name": "thresholdWidthInPixels",
        "linenr": 57,
        "deprecated": null,
        "doc": "<p>How wide the screen must be in the pixels for the browser\nto be considered be a mobile browser.</p>\n\n<p>The default behavior is to put screens &lt; 960 to the mobile site.</p>\n",
        "filename": "src/detectmobile.js",
        "html_filename": "detectmobile.html"
      }
    ],
    "css_var": [

    ],
    "method": [
      {
        "owner": "detectmobile",
        "shortDoc": "Add new URL variables safely with or without existing '?' character ...",
        "static": false,
        "href": "detectmobile.html#detectmobile-method-addURLParameter",
        "inheritable": false,
        "protected": false,
        "tagname": "method",
        "private": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "name": "addURLParameter",
        "linenr": 243,
        "deprecated": null,
        "doc": "<p>Add new URL variables safely with or without existing '?' character</p>\n",
        "filename": "src/detectmobile.js",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "aURL",
            "doc": "\n"
          },
          {
            "type": "Object",
            "optional": false,
            "name": "aNewVar",
            "doc": "\n"
          }
        ],
        "html_filename": "detectmobile.html"
      },
      {
        "owner": "detectmobile",
        "shortDoc": "Create a new cookie\n\n@see http://www.quirksmode.org/js/cookies.html ...",
        "static": false,
        "href": "detectmobile.html#detectmobile-method-createCookie",
        "inheritable": false,
        "protected": false,
        "tagname": "method",
        "private": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "name": "createCookie",
        "linenr": 299,
        "deprecated": null,
        "doc": "<p>Create a new cookie</p>\n\n<p>@see http://www.quirksmode.org/js/cookies.html</p>\n",
        "filename": "src/detectmobile.js",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "name",
            "doc": "\n"
          },
          {
            "type": "Object",
            "optional": false,
            "name": "value",
            "doc": "\n"
          },
          {
            "type": "Object",
            "optional": false,
            "name": "days",
            "doc": "\n"
          }
        ],
        "html_filename": "detectmobile.html"
      },
      {
        "owner": "detectmobile",
        "shortDoc": "Core logic of detecting a mobile browser. ...",
        "static": false,
        "href": "detectmobile.html#detectmobile-method-detectMobile",
        "inheritable": false,
        "protected": false,
        "tagname": "method",
        "private": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>True if the current browser is a mobile browser</p>\n"
        },
        "name": "detectMobile",
        "linenr": 342,
        "deprecated": null,
        "doc": "<p>Core logic of detecting a mobile browser.</p>\n\n<p>Use user agent capabilities available in Javascript to\nmake a heurestic decision whether this browser is mobilish\nor not.</p>\n\n<p>I.e. check the screen size.</p>\n",
        "filename": "src/detectmobile.js",
        "params": [

        ],
        "html_filename": "detectmobile.html"
      },
      {
        "owner": "detectmobile",
        "shortDoc": "See: http://www.quirksmode.org/js/cookies.html ...",
        "static": false,
        "href": "detectmobile.html#detectmobile-method-eraseCookie",
        "inheritable": false,
        "protected": false,
        "tagname": "method",
        "private": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "name": "eraseCookie",
        "linenr": 334,
        "deprecated": null,
        "doc": "<p>See: http://www.quirksmode.org/js/cookies.html</p>\n",
        "filename": "src/detectmobile.js",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "name",
            "doc": "\n"
          }
        ],
        "html_filename": "detectmobile.html"
      },
      {
        "owner": "detectmobile",
        "shortDoc": "Rewrite URL for moving from the website to a mobile site or vice versa. ...",
        "static": false,
        "href": "detectmobile.html#detectmobile-method-getRedirectTarget",
        "inheritable": false,
        "protected": false,
        "tagname": "method",
        "private": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "name": "getRedirectTarget",
        "linenr": 143,
        "deprecated": null,
        "doc": "<p>Rewrite URL for moving from the website to a mobile site or vice versa.</p>\n\n<p>If detectmobile has no callback() set, just redirect to the\nsite root using defaultWebURL or defaultMobileURL</p>\n",
        "filename": "src/detectmobile.js",
        "params": [
          {
            "type": "String",
            "optional": false,
            "name": "mode",
            "doc": "<p>\"web\" or \"mobile\"</p>\n"
          },
          {
            "type": "String",
            "optional": false,
            "name": "url",
            "doc": "<p>The current URL</p>\n"
          }
        ],
        "html_filename": "detectmobile.html"
      },
      {
        "owner": "detectmobile",
        "shortDoc": "https://developer.mozilla.org/en/DOM/window.screen.width\n\nXXX: Add DPI detection http://stackoverflow.com/questions/4...",
        "static": false,
        "href": "detectmobile.html#detectmobile-method-getScreenDimensions",
        "inheritable": false,
        "protected": false,
        "tagname": "method",
        "private": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "name": "getScreenDimensions",
        "linenr": 362,
        "deprecated": null,
        "doc": "<p>https://developer.mozilla.org/en/DOM/window.screen.width</p>\n\n<p>XXX: Add DPI detection http://stackoverflow.com/questions/476815/can-you-access-sceen-displays-dpi-settings-in-a-javascript-function</p>\n",
        "filename": "src/detectmobile.js",
        "params": [

        ],
        "html_filename": "detectmobile.html"
      },
      {
        "owner": "detectmobile",
        "shortDoc": "Check if the current location is on a mobile site. ...",
        "static": false,
        "href": "detectmobile.html#detectmobile-method-isOnMobileSite",
        "inheritable": false,
        "protected": false,
        "tagname": "method",
        "private": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>true if the domain or the current window URL looks like it is a mobile site</p>\n"
        },
        "name": "isOnMobileSite",
        "linenr": 374,
        "deprecated": null,
        "doc": "<p>Check if the current location is on a mobile site.</p>\n\n<p>Use domain name based detection - check if the domain name resembles any common\nnames used for the mobile domains.</p>\n",
        "filename": "src/detectmobile.js",
        "params": [

        ],
        "html_filename": "detectmobile.html"
      },
      {
        "owner": "detectmobile",
        "shortDoc": "Do redirect to a new page using Javascript ...",
        "static": false,
        "href": "detectmobile.html#detectmobile-method-performRedirect",
        "inheritable": false,
        "protected": false,
        "tagname": "method",
        "private": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "name": "performRedirect",
        "linenr": 172,
        "deprecated": null,
        "doc": "<p>Do redirect to a new page using Javascript</p>\n",
        "filename": "src/detectmobile.js",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "url",
            "doc": "\n"
          }
        ],
        "html_filename": "detectmobile.html"
      },
      {
        "owner": "detectmobile",
        "shortDoc": "Handle mobile redirection logic. ...",
        "static": false,
        "href": "detectmobile.html#detectmobile-method-process",
        "inheritable": false,
        "protected": false,
        "tagname": "method",
        "private": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "name": "process",
        "linenr": 91,
        "deprecated": null,
        "doc": "<p>Handle mobile redirection logic.</p>\n\n<p>Perform a redirect to a mobile site if needed.\nSet sticky cookies for website if necessary URL parameters are present.</p>\n",
        "filename": "src/detectmobile.js",
        "params": [

        ],
        "html_filename": "detectmobile.html"
      },
      {
        "owner": "detectmobile",
        "shortDoc": "Get a cookie value by name\n\n@see http://www.quirksmode.org/js/cookies.html ...",
        "static": false,
        "href": "detectmobile.html#detectmobile-method-readCookie",
        "inheritable": false,
        "protected": false,
        "tagname": "method",
        "private": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "name": "readCookie",
        "linenr": 315,
        "deprecated": null,
        "doc": "<p>Get a cookie value by name</p>\n\n<p>@see http://www.quirksmode.org/js/cookies.html</p>\n",
        "filename": "src/detectmobile.js",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "name",
            "doc": "\n"
          }
        ],
        "html_filename": "detectmobile.html"
      },
      {
        "owner": "detectmobile",
        "shortDoc": "Helper function to rewrite domain name to URLs. ...",
        "static": false,
        "href": "detectmobile.html#detectmobile-method-replaceDomainName",
        "inheritable": false,
        "protected": false,
        "tagname": "method",
        "private": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>URL where domain part has been replaced by newDomain</p>\n"
        },
        "name": "replaceDomainName",
        "linenr": 189,
        "deprecated": null,
        "doc": "<p>Helper function to rewrite domain name to URLs.</p>\n\n<p>E.g. site.com -> m.site.com</p>\n\n<p>Port part is not touched in the domain name: site.com:8080 -> m.site.com:8080.</p>\n",
        "filename": "src/detectmobile.js",
        "params": [
          {
            "type": "String",
            "optional": false,
            "name": "url",
            "doc": "<p>Full http/https URL</p>\n"
          },
          {
            "type": "String",
            "optional": false,
            "name": "newDomain",
            "doc": "<p>New domain name to be injected, with optional</p>\n"
          },
          {
            "type": "Boolean",
            "optional": false,
            "name": "prefix",
            "doc": "<p>Append newDomain to the beginning of the domain name with dot separation, instead of replacing the old domain</p>\n"
          }
        ],
        "html_filename": "detectmobile.html"
      },
      {
        "owner": "detectmobile",
        "shortDoc": "Read URL parameters to dict. ...",
        "static": false,
        "href": "detectmobile.html#detectmobile-method-splitURLParameters",
        "inheritable": false,
        "protected": false,
        "tagname": "method",
        "private": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "name": "splitURLParameters",
        "linenr": 261,
        "deprecated": null,
        "doc": "<p>Read URL parameters to dict.</p>\n\n<p>See: http://jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html</p>\n",
        "filename": "src/detectmobile.js",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "aURL",
            "doc": "\n"
          }
        ],
        "html_filename": "detectmobile.html"
      }
    ],
    "css_mixin": [

    ],
    "cfg": [

    ],
    "event": [

    ]
  },
  "xtypes": [

  ],
  "private": false,
  "alias": null,
  "extends": null,
  "author": "Mikko Ohtamaa, Jussi Toivola",
  "allMixins": [

  ],
  "name": "detectmobile",
  "linenr": 1,
  "deprecated": null,
  "doc": "<p>detectmobile.js - simple mobile redirects with Javascript.</p>\n\n<p>This <strong>detectmobile</strong> object contains all configuration variables and methods for\nthis micro-framework.</p>\n\n<p><a href=\"#/api/detectmobile-method-process\" rel=\"detectmobile-method-process\" class=\"docClass\">process</a> is the entry point for the processing.</p>\n\n<p>Feel free to monkey-patch any functions to make this object suitable for your needs.</p>\n\n<p>For more information <a href=\"https://github.com/miohtama/detectmobile.js\">visit Github project page</a></p>\n",
  "subclasses": [

  ],
  "filename": "src/detectmobile.js",
  "html_filename": "detectmobile.html"
});