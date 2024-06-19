from rest_framework import authentication
from integration.models import APIIntegration, Webhook
from .serializers import APIIntegrationSerializer, WebhookSerializer
from rest_framework import viewsets


class APIIntegrationViewSet(viewsets.ModelViewSet):
    serializer_class = APIIntegrationSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = APIIntegration.objects.all()


class WebhookViewSet(viewsets.ModelViewSet):
    serializer_class = WebhookSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Webhook.objects.all()
