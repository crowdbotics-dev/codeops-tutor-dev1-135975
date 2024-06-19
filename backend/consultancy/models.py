from django.conf import settings
from django.db import models


class ConsultancySession(models.Model):
    "Generated Model"
    consultant = models.ForeignKey(
        "core.IndividualUser",
        on_delete=models.CASCADE,
        related_name="consultancysession_consultant",
    )
    enterprise = models.ForeignKey(
        "core.Enterprise",
        on_delete=models.CASCADE,
        related_name="consultancysession_enterprise",
    )
    date = models.DateTimeField(
        null=False,
        blank=False,
    )
    focus_area = models.CharField(
        max_length=255,
    )


class Project(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    description = models.TextField()
    start_date = models.DateField(
        null=True,
        blank=True,
    )
    end_date = models.DateField(
        null=True,
        blank=True,
    )
    enterprise = models.ForeignKey(
        "core.Enterprise",
        on_delete=models.CASCADE,
        related_name="project_enterprise",
    )


# Create your models here.
