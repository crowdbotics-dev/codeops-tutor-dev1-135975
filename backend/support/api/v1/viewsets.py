from rest_framework import authentication
from support.models import FAQ, Ticket
from .serializers import FAQSerializer, TicketSerializer
from rest_framework import viewsets


class FAQViewSet(viewsets.ModelViewSet):
    serializer_class = FAQSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = FAQ.objects.all()


class TicketViewSet(viewsets.ModelViewSet):
    serializer_class = TicketSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Ticket.objects.all()
