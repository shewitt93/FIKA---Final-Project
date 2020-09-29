from django.db import models
from django.contrib.postgres.fields import ArrayField


class TicTacToe(models.Model):
    squares = ArrayField(models.CharField(max_length=10, blank=True))


class Message(models.Model):
    username = models.CharField(max_length=100)
    message = models.CharField(max_length=500, blank=True)
