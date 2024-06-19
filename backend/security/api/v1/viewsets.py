from rest_framework import authentication
from security.models import Vulnerability, AuditLog
from .serializers import AuditLogSerializer, VulnerabilitySerializer
from rest_framework import viewsets


class AuditLogViewSet(viewsets.ModelViewSet):
    serializer_class = AuditLogSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = AuditLog.objects.all()


class VulnerabilityViewSet(viewsets.ModelViewSet):
    serializer_class = VulnerabilitySerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Vulnerability.objects.all()
