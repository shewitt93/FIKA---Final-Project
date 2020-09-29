from django.db import models
from django.contrib.postgres.fields import ArrayField


class TicTacToe(models.Model):
    squares = ArrayField(models.CharField(max_length=10, blank=True))
# Create your models here.

class Message(models.Model):
    message = models.CharField(max_length=255)
    username = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.message}, {self.username}, {self.created_at}'
