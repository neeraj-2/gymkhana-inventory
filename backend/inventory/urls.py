from django.urls import include, path
from . import views

urlpatterns = [
  path('getequipment',views.get_equipment_by_society),
  path('addequipment', views.add_equipment),
  path('updateequipment/<int:id>',views.update_equipment)
]