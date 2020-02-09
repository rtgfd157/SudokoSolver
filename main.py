from flask import Flask
from flask import render_template,request,redirect,session,Session
from datetime import time
from random import randint
import datetime
app = Flask(__name__)




@app.route("/" ,methods=['GET', 'POST'])
def root():


    return render_template(
        'main.html', **locals())



if __name__ == "__main__":
    app.secret_key = 'super secret key'
    app.config['SESSION_TYPE'] = 'filesystem'

    app.run(debug=True, threaded = True,host='0.0.0.0', port=8000)