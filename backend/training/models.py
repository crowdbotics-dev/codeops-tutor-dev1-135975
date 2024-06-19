from django.conf import settings
from django.db import models


class Certification(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "core.IndividualUser",
        on_delete=models.CASCADE,
        related_name="certification_user",
    )
    module = models.ForeignKey(
        "training.Module",
        on_delete=models.CASCADE,
        related_name="certification_module",
    )
    date_earned = models.DateField(
        null=True,
        blank=True,
    )


class Module(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=255,
    )
    description = models.TextField()
    difficulty_level = models.CharField(
        max_length=50,
    )


# Create your models here.
