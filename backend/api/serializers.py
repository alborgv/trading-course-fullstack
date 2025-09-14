from .models import *
from rest_framework import serializers

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['id', 'amount', 'currency', 'stripe_payment_id', 'created_at', 'user_email']

class CourseImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseImage
        fields = ('id', 'image', 'alt_text')

class CourseSerializer(serializers.ModelSerializer):
    images = CourseImageSerializer(many=True, read_only=True)
    
    class Meta:
        model = Course
        fields = ('id', 'name', 'description', 'price', 'images', 'created_at')


class CourseCreateSerializer(serializers.ModelSerializer):
    photos = serializers.ListField(
        child=serializers.ImageField(), write_only=True
    )

    class Meta:
        model = Course
        fields = ['id', 'name', 'description', 'price', 'images']

    def create(self, validated_data):
        photos_data = validated_data.pop('images')
        Course = Course.objects.create(**validated_data)
        for photo_data in photos_data:
            CourseImage.objects.create(Course=Course, image=photo_data)
        return Course

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('id', 'name', 'email', 'message', 'created_at')
