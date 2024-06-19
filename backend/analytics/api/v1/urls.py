from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import MetricViewSet, ReportViewSet

router = DefaultRouter()
router.register("report", ReportViewSet)
router.register("metric", MetricViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
