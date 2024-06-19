from django.contrib import admin
from .models import Metric, Report

admin.site.register(Report)
admin.site.register(Metric)

# Register your models here.
