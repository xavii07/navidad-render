from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('quienes/', views.quienes),
    path('contacto/', views.contacto),
    path('videos/', views.videos),
    path('historia/', views.historia),
    path('cuentos/', views.cuentos),
    path('villancicos/', views.villancicos),
    path('cocina/', views.cocina),
    path('actividades/', views.actividades),
    path('cartaasanta/', views.carta_santa),
]
