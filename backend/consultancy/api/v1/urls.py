from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ConsultancySessionViewSet, ProjectViewSet

router = DefaultRouter()
router.register("consultancysession", ConsultancySessionViewSet)
router.register("project", ProjectViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
