#!/bin/sh

#rsync -aPh --del --exclude='.git' ./ alexh@alexh.name:~/vwww/threejs.alexh.name/
rsync -aPh --del --exclude='.git' ./ root@welchezukunft.org:/var/www/html/
