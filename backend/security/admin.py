from django.contrib import admin
from .models import AuditLog, Vulnerability

admin.site.register(AuditLog)
admin.site.register(Vulnerability)

# Register your models here.
