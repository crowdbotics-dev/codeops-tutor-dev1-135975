from django.conf import settings
from django.db import models


class APIIntegration(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    description = models.TextField()
    integration_type = models.CharField(
        max_length=100,
    )


class Webhook(models.Model):
    "Generated Model"
    url = models.URLField()
    event = models.CharField(
        max_length=255,
    )


# Create your models here.
