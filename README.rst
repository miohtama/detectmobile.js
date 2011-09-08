.. contents :: :local:

Introduction
--------------

``detectmobile.js`` allows you create intelligent mobile redirects in HTTP cache safe manner.

* Mobile detection is based on the screen size: you use "screens smaller than this diameter" 
  threshold which is actually the only thing you want to know to send visitors to the small screen optimized site.
  
* detectmobile.js is cache friendly, as it is not doing any cache varying by HTTP user agent header
  or HTTP redirects. Thus, you can safely use any static and anonymous caching with detectmobile.js.
  
The script will take care of the task::

        if user is using a mobile browser and comes to your web site then 
                go to a matching mobile site page
        else
                stay on the web site        
                
With the default settings the script is set up for the following configuration

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
  
* You can actually undestand the codebase  

Requirements
-------------

You need to be able to control **both** web and mobile site to include detectmobile.js
Javascript in HTML code.
   
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
               
Link to a mobile site
======================

You need to add ``force-mobile`` HTTP GET query parameter to clear any sticky cookies
which will make the mobile browser stay in the web version.

Use the following code on the **web site** to make browsers go to the **mobile web version**::

        <a href="m.yoursite.com/page?force-mobile">
                Full site
        </a>        

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

        detectmobile-stick-on-web
        
This cookie is used by Javascript only. Whether it is present or not should not affect the caching.        

Varnish
=======

Below is an example of configuring Varnish to strip out this cookie from the backend requests::

        TODO

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

Code: MIT.

The generated API documentation falls under GPL 3 license as it has been linked with Ext JS 4.0.

 