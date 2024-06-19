from django.conf import settings
from django.db import models


class IndividualUser(models.Model):
    "Generated Model"
    user = models.OneToOneField(
        "users.User",
        on_delete=models.CASCADE,
        related_name="individualuser_user",
    )
    enterprise = models.ForeignKey(
        "core.Enterprise",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="individualuser_enterprise",
    )
    role = models.CharField(
        max_length=50,
    )


class Enterprise(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    industry = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )
    size = models.IntegerField(
        null=True,
        blank=True,
    )


# Create your models here.
