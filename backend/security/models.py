from django.conf import settings
from django.db import models


class AuditLog(models.Model):
    "Generated Model"
    action = models.CharField(
        max_length=255,
    )
    date = models.DateTimeField(
        null=False,
        blank=False,
    )
    user = models.ForeignKey(
        "core.IndividualUser",
        on_delete=models.CASCADE,
        related_name="auditlog_user",
    )


class Vulnerability(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    description = models.TextField()
    severity = models.CharField(
        max_length=50,
    )


# Create your models here.
