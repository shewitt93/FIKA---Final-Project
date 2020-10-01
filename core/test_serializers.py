import pytest

from core.models import Message
from core.serializers import MessageSerializer
from django.db import models
from django.test import TestCase
from rest_framework import serializers

# def test_serializer():

#     serializer = MessageSerializer()
#     f = serializer.fields['__all__']
#     obj = Message()

#     assert f.to_representation(obj) == '0.00'
#     obj.prop = 123
#     assert f.to_representation(obj) == '1.23'

class TestMessage(TestCase):
    def test_message(self):

        class TestSerializer(serializers.ModelSerializer):
            class Meta:
                model = Message
                fields = '__all__'

        class TestSerializer():
            message = 'hi'
            username = 'bhuma'
            created_at = '11:11'

        self.assertEqual(repr(TestSerializer()))