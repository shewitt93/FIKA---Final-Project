from django.contrib import admin

# Register your models here.
from .models import TicTacToe, Message
admin.site.register(TicTacToe)

admin.site.register(Message)