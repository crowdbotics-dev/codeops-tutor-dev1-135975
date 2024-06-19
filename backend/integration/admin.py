from django.contrib import admin
from .models import APIIntegration, Webhook

admin.site.register(APIIntegration)
admin.site.register(Webhook)

# Register your models here.
