from django.shortcuts import render

# Create your views here.
def view_main(request):
    return render(request, 'main.html')