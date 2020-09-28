from django.db import models
from django.contrib.postgres.fields import ArrayField


class TicTacToe(models.Model):
    squares = ArrayField(models.CharField(max_length=10, blank=True))
# Create your models here.


class Chat(models.Model):
    # username = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.CharField(max_length=200, blank=True)
    time = models.TimeField(auto_now_add=True)