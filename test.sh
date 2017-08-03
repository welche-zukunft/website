#!/bin/sh

#rsync -aPh --del --exclude='.git' ./ alexh@alexh.name:~/vwww/threejs.alexh.name/
rsync -aPh --del --exclude='.git' ./ root@139.59.135.131:/var/www/html/
