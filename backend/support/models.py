from django.conf import settings
from django.db import models


class FAQ(models.Model):
    "Generated Model"
    question = models.CharField(
        max_length=255,
    )
    answer = models.TextField()


class Ticket(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=255,
    )
    description = models.TextField()
    status = models.CharField(
        max_length=100,
    )
    created_at = models.DateTimeField(
        null=False,
        blank=False,
    )
    user = models.ForeignKey(
        "core.IndividualUser",
        on_delete=models.CASCADE,
        related_name="ticket_user",
    )


# Create your models here.
