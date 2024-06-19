from django.contrib import admin
from .models import Enterprise, IndividualUser

admin.site.register(IndividualUser)
admin.site.register(Enterprise)

# Register your models here.
