from rest_framework import authentication
from consultancy.models import Project, ConsultancySession
from .serializers import ConsultancySessionSerializer, ProjectSerializer
from rest_framework import viewsets


class ConsultancySessionViewSet(viewsets.ModelViewSet):
    serializer_class = ConsultancySessionSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = ConsultancySession.objects.all()


class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Project.objects.all()
