.. contents :: :local:

Introduction
--------------

``detectmobile.js`` allows you detect mobile browsers, create intelligent mobile redirects in HTTP cache safe manner
using Javascript.

Use cases
----------

* You have separate web and mobile site and want to redirect mobile visitors to the  mobile site automatically

* You want to customize the page layout for mobile and CSS is not enough 

* You want to have page features only for mobile browsers e.g. add download app from the app store links 

How it works
--------------

The script will take care of the task::

        if user is using a mobile browser and comes to your web site then 
                go to a matching mobile site page
        else
                stay on the web site     

* Mobile detection is based on the screen size: you use "screens smaller than this diameter" 
  threshold which is actually the only thing you want to know to send visitors to the small screen optimized site.
  
* detectmobile.js is cache friendly, as it is not doing any cache varying by HTTP user agent header
  or HTTP redirects. Thus, you can safely use any static and anonymous caching with detectmobile.js.
                   
With the default settings detectmobile.js is set up for the following configuration

* Website is hosted in the address like ``www.site.com`` or ``site.com``

* Mobile site is hosted in the address like ``m.site.com``     

Benefits
-------------
         
Using a Javascript feature based detection over HTTP User-agent header based detection like
`Wurfl <http://wurfl.sourceforge.net/>`_ offers several benefits

* Keep It Simple, Stupid

* Front end caching performance is not destroyed by the need for vary by user agents

* You do not need to maintain huge user agent database (thousands of devices)

* You need minimal amount of server-side code

* Compatible with any programming language or framework (Python, PHP, 
  C#, ASP.NET, Java, even static HTML files...)
  
* You can actually understand the codebase  

Requirements
-------------

You need to be able add new Javascript code on the website.

No changes on the mobile site required, besides adding a back link "Go to full website".
   
Usage
------

The Javascript file must be loaded on *both* web site and mobile site.

It is recommended to have this script as the first script of all Javascripts,
as when the mobile browser comes to website the redirect occurs before
any other media resources are loaded.

::

        <html>
                <head>
                        <script src="http://xxx.com/detectmobile.js"></script>
                        <script>
                                try {
                                        // This is the URL where mobile 
                                        detectmobile.defaultMobileURL = "http://m.xxx.com";
                                        detectmobile.process();                                
                                } catch(e) {
                                        // Make sure that in the fault modes
                                        // we do not interrupt execution of other Javascript code
                                }
                        </script>
                </head>


You can also configure ``detectmobile.redirectCallback()`` function doing 
dynamic mapping of the URLs between mobile site and website pages, so that
when mobile browser arrives to a website it will be redirected to the
corresponding mobile page, `not the site root <http://xkcd.com/869/>`_.

::

        <html>
                <head>
                        <script src="http://xxx.com/detectmobile.js"></script>
                        <script>
                                try {                       
                                        // Set up detectmobile.js                 
                                        detectmobile.redirectCallback = function(mode, url) {
                                                if(mode == "mobile") {
                                                        // We could have arrived directly to a news article
                                                        // from a search engine, not the site home page
                                                        // Redirect to a corresponding article mobile version
                                                        
                                                        // This example has some URL path for the article
                                                        // on both site.com and m.site.com, just different domain name.
                                                        // But you could any kind of URL rewrite here. 
                                                        return detectmobile.replaceDomainName(url, "m", true, true);
                                                } 
                                                
                                                // Take no action
                                                return url;
                                        }
                                                                 
                                
                                        // Execute mobile redirect                                             
                                        detectmobile.process();                                
                                } catch(e) {
                                        // Make sure that in the fault modes
                                        // we do not interrupt execution of other Javascript code
                                        if(console && console.exception) {
                                                console.exception(e);
                                        }
                                }
                        </script>
                </head>


Link to the web site
======================

Add the following code to your mobile site to have a backlink to the website.

You need to add ``force-web`` HTTP GET query parameter to create a sticky cookie
which will make the mobile browser stay in the web version.

Use the following code on the **mobile site** to make browsers go to the **full web version**::

        <a href="yoursite.com/page?force-web">
                Full website version
        </a>
               
This will use Javascript to set a cookie called ``detectmobilesticky`` (configurable)
on *yoursite.com*. Whenever the cookie is prevent, the automatic mobile redirect process
is suspended. 
               
Link to a mobile site
======================

This link will clear the sticky cookie and returning clients will 
automatically redirect to mobile site once again. 

        <a href="yoursite.com/?force-mobile">
                Mobile site
        </a>
        
The suggested mobile site link place is in the footer or some other non-visible place.
This link only should concern users who have used "full web site" link and then go back to the mobile site.
       
Further info
====================

See the `API documentation `GitHub pages <http://miohtama.github.com/detectmobile.js/#/api/detectmobile>`_.

Compatibility
---------------

All HTML capable mobile browsers are supported.

Opera Mini is supported. 
Other thin clients are also supported if they execute DOM on ready / window loaded Javascript events.   

Detection method
==================

In versio 0.1 we do a brute check of the screen width in the pixels. Everything 960 pixels wide and narrower
are considered as mobile screens. This covers iPhone, iPad, current Android phones and tables, etc.

However the plan is to include DPI detection using CSS trick for the future versions to support to
ignore PC screens of 800 pixels wide.

Impact on the caching
------------------------

The front end caching servers should be configured to ignore the following cookie::

        detectmobilesticky
        
This cookie is used by Javascript only. 

Whether the cookei is present or not should not affect the caching.
However, the frontend cache serves are usually configured not to cache any responses with the cookie.

If you are not aware of the situation the following might happen

* Browser loads a page from the server (cached)

* The page contains detectmobile.js

* Browser sets the mobile sticky cookie

* Browser loads the next page from the server. Since HTTP request now contains a cookie, set by Javascript on the previous page, 
  this request no longer comes from the cache and the further site performance for this particular user is destroyed   

Varnish
=======

Below is an example of configuring Varnish to strip out this cookie from the backend requests.

We do not want the sticky mobile cookie to mess the backend caching. 
This cookie is only corcern of the client (Javascript) and thus should not be visible on the server-side code::

        sub vcl_recv {
            # Remove cookie detectmobilesticky
            set req.http.cookie = regsub(req.http.cookie,"detectmobilesticky=[^;]*;?( |$)","");
        
            # Remove the cookie header if it's empty after cleanup
            if (req.http.cookie ~ "^ *$") {
                remove req.http.cookie;
            }
        }

This snippet was created using fabulous `cookie-stripper.sh <http://kristianlyng.wordpress.com/2010/08/13/stripping-cookies-with-vcl>`_.

Quality
---------------------

The script is on the production usage at least on the following sites

* http://mfabrik.com

* http://www.saariselka.fi

detectmobile.js works with PHP, Python, Wordpress, Joomla, Plone, Django, static HTML5, you name it... no hard dependencies to any backend system.

Questions & support
---------------------

Try grab Moo on #html5 IRC channel on freenode.net.

History
-----------

This code was isolated from `Mobilize.js <https://github.com/mobilizejs/mobilize.js>`_.

Documentation
---------------

API documents are available at `GitHub Pages <http://miohtama.github.com/detectmobile.js/#/api/detectmobile>`_.

Building API documentation
==============================

Installing prerequisitements (OSX)::

        sudo gem install rdiscount json parallel rspec

Installing JSDuck::

        # --pre installs 2.0 beta version
        sudo gem install --pre jsduck

Get ExtJS::

        wget http://extjs.cachefly.net/ext-4.0.2a-gpl.zip
        unzip ext-4.0.2a-gpl.zip  # takes time here....
        mkdir docs/template/extjs
        # Create dummy entry - actually we load everything
        # from Sencha CDN in custom index.html
        cp ext-4.0.2a/ext-all.js docs/template/extjs
        

SASS it::
       
        sudo gem install compass
        compass compile doc/template/resources/sass
                                                      
Building docs with JSDuck::
                
        bin/build-docs.sh

JSDuck has hardcored branding for Sencha. 
To get rid of this, the hacked file list is: index.html, Viewport.js.
 
JSDuck did not offer customization hooks, so I had to dump whole ExtJS Doc viewer
application tree to the source code.

More info

* https://github.com/nene/jsduck

Publishing API docs on Github
==================================

You need to create another clone of the repo::

         git clone git@github.com:miohtama/detectmobile.js.git detectmobiledocs
         cd detectmobiledocs
         git checkout -b gh-pages origin/gh-pages
         cp -r ../detectmobile.js/docs/apidocs/* .
         cp ../detectmobile.js/.gitignore . # Don't commit .sass cache files
         git add -A
         git commit -m "Updated API docs"
         git push

More info

* http://pages.github.com/

Tests
------

Below are short instructions for simple manual testing.

Add entry::

        m.localhost 127.0.0.1
        
.. to your */etc/hosts* file (UNIX).        

Start HTTP server in the project folder::

        python -m SimpleHTTPServer 7777
        
And then open with desktop browser::

        http://localhost:7777/tests/simple.html        
        
And another::

        http://m.localhost:7777/tests/simple.html        
        
Start iOS emulator and try::
        
        http://localhost:7777/tests/simple.html                
                      
You should end up to *m.localhost:7777/tests/simple.html* via Javascript redirect.                      


Author
--------

* `Mikko Ohtamaa <http://opensourcehacker.com>`_

* Additional work by Jussi Toivola

License
--------

Code: GPL 2.

The generated API documentation falls under GPL 3 license as it has been linked with Ext JS 4.0.

 