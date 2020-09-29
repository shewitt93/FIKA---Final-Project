from django.urls import path

from .views import current_user, UserList, MessageSet

urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('message/', MessageSet.as_view())
]