from flask import render_template
from blog import app

@app.route('/')
def index():
    return render_template('index.html')
    # return 'Hello Jeffrey'