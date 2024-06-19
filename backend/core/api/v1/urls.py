from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import EnterpriseViewSet, IndividualUserViewSet

router = DefaultRouter()
router.register("individualuser", IndividualUserViewSet)
router.register("enterprise", EnterpriseViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
