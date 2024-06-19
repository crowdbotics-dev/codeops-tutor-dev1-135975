from rest_framework import authentication
from analytics.models import Report, Metric
from .serializers import MetricSerializer, ReportSerializer
from rest_framework import viewsets


class ReportViewSet(viewsets.ModelViewSet):
    serializer_class = ReportSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Report.objects.all()


class MetricViewSet(viewsets.ModelViewSet):
    serializer_class = MetricSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Metric.objects.all()
