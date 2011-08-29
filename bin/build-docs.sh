#!/bin/sh

jsduck src --verbose --output docs/apidocs \
        --title="detectmobile.js API documentation" \
        --footer="<a href='http://opensourcehacker.com'>opensourcehacker.com</a>" \
        --template=docs/template 
        
        