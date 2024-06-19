#!/bin/bash

python manage.py migrate --noinput

waitress-serve --port=$PORT codeops_tutor_dev1_135975.wsgi:application
