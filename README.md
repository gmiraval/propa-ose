# PROPA Library -  Rest API
by Guillermo Miravalles

Version: 1.0.0

Date: 20180423

e-mail: miravallesg@gmail.com

This is a Rest API that implements the different functions provided by the propa library to compute propagation losses according to the ITU-R P. Recommendations

NOTE:This version has been modified without heroku's newrelic add on to work on openshift.com

You can find the documentation & test the API @ http://<app_host>:<app_port>/api-doc

lib source: https://logiciels.cnes.fr/en/content/propa

Deploy in openshift:

oc new-project propa-ose

oc new-app https://github.com/gmiraval/propa-ose.git

oc expose svc propa-ose

sample API:

https://propa-ose-propa-ose.apps.us-east-1.online-starter.openshift.com/version

https://propa-ose-propa-ose.apps.us-east-1.online-starter.openshift.com/api-docs/
