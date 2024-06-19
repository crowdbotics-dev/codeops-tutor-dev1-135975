from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import FAQViewSet, TicketViewSet

router = DefaultRouter()
router.register("faq", FAQViewSet)
router.register("ticket", TicketViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
