from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import AuditLogViewSet, VulnerabilityViewSet

router = DefaultRouter()
router.register("auditlog", AuditLogViewSet)
router.register("vulnerability", VulnerabilityViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
