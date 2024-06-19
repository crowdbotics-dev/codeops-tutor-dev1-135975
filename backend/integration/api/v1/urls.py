from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import APIIntegrationViewSet, WebhookViewSet

router = DefaultRouter()
router.register("apiintegration", APIIntegrationViewSet)
router.register("webhook", WebhookViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
