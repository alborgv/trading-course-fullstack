from django.urls import path

from .views import *

urlpatterns = [
    path("create-checkout-session/", CreateCheckOutSession.as_view() , name="create-checkout-session"),
    path('webhooks/stripe/', stripe_webhook_view, name='stripe-webhook'),
    path("send_contact/", createContactView.as_view() , name="contact"),
    path("contact/", ContactView.as_view() , name="contact"),
    path("course/", CourseView.as_view() , name="course"),
    path("course/<int:pk>", CourseDetailView.as_view() , name="course_details"),
]