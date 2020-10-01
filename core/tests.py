from django.test import TestCase
from .models import Message

# Create your tests here.

class MessageModelTest(TestCase):

    def test_string_representation(self):
        # entry = Message(message="My entry title", username='bhuma', created_at='11:11')
        # self.assertEqual(str(entry), entry.message, entry.username, entry.created_at)
        entry = Message(message="Hello")
        self.assertEqual(str(entry), entry.message)

