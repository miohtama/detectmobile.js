.. contents :: :local:

Introduction
--------------

``detectmobile.js`` allows you create intelligent mobile redirects in cache safe manner.

* Mobile detection is based on the screen size: you get "devices smaller than this diameter" which
  is actually the thing you want to know to send visitors to the small screen optimized site
  
* detectmobile.js is cache friendly, as it is not doing any cache varying by HTTP user agent header

Requirements
-------------

* You need to be able to control both web and mobile site and be able to add in new Javascripts
  in HTML code
   
Usage
------

The Javascript file must be loaded on *both* web site and mobile site.

Link to the web site
======================

You need to add ``force-web`` HTTP GET query parameter to create a sticky cookie
which will make the mobile browser stay in the web version.

Use the following code on the mobile site to make browsers go to the full web version::

        <a href="yoursite.com/page?force-web">
                Full site
        </a>
               
Link to a mobile site
======================

You need to add ``force-mobile`` HTTP GET query parameter to clear any sticky cookies
which will make the mobile browser stay in the web version.

Use the following code on the web site to make browsers go to the mobile web version::

        <a href="m.yoursite.com/page?force-mobile">
                Full site
        </a>        

Compatibility
---------------

All HTML capable mobile browsers.

Opera Mini is supported. Other thin clients are also supported if they execute DOM on ready / window loaded Javascript events.   

Background
-----------

History
-----------

This code was isolated from `Mobilize.js <https://github.com/mobilizejs/mobilize.js>`_.

Author
--------

mikko@opensourcehacker.com

License
--------

MIT 