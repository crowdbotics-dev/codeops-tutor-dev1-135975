from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CertificationViewSet, ModuleViewSet

router = DefaultRouter()
router.register("certification", CertificationViewSet)
router.register("module", ModuleViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
