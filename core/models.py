from django.db import models
from django.contrib.postgres.fields import ArrayField


class TicTacToe(models.Model):
    squares = ArrayField(models.CharField(max_length=10, blank=True))
# Create your models here.
