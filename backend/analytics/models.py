from django.conf import settings
from django.db import models


class Report(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=255,
    )
    generated_on = models.DateTimeField(
        null=False,
        blank=False,
    )
    content = models.TextField()


class Metric(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    value = models.FloatField(
        null=True,
        blank=True,
    )
    report = models.ForeignKey(
        "analytics.Report",
        on_delete=models.CASCADE,
        related_name="metric_report",
    )


# Create your models here.
