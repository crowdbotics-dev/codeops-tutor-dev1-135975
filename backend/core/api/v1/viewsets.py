from rest_framework import authentication
from core.models import IndividualUser, Enterprise
from .serializers import EnterpriseSerializer, IndividualUserSerializer
from rest_framework import viewsets


class IndividualUserViewSet(viewsets.ModelViewSet):
    serializer_class = IndividualUserSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = IndividualUser.objects.all()


class EnterpriseViewSet(viewsets.ModelViewSet):
    serializer_class = EnterpriseSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Enterprise.objects.all()
