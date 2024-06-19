from rest_framework import serializers
from consultancy.models import ConsultancySession, Project


class ConsultancySessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConsultancySession
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"
