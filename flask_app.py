
# A very simple Flask Hello World app for you to get started with...
from flask import Flask, redirect, render_template, request, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy
from random import randrange

app = Flask(__name__)
app.config["DEBUG"] = True
SQLALCHEMY_DATABASE_URI = "mysql+mysqlconnector://{username}:{password}@{hostname}/{databasename}".format(
    username="zewumpire",
    password="MySQL2416",
    hostname="zewumpire.mysql.pythonanywhere-services.com",
    databasename="zewumpire$scores",
)
app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
app.config["SQLALCHEMY_POOL_RECYCLE"] = 299
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

class Comment(db.Model):
    __tablename__ = "comments"
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(4096))

class Time(db.Model):
    __tablename__ = "time"
    name = db.Column(db.String(100), primary_key=True)
    time = db.Column(db.Float)

@app.route("/", methods = ["GET", "POST"])
def index():
    if request.method == "GET":
        return render_template("leaderboards.html", times=Time.query.all())

    return redirect(url_for('math'))

#   comment = Comment(content=request.form["contents"])

@app.route("/leaderboards", methods = ["GET", "POST"])
def leaderboards():
    if request.method == "GET":
        return render_template("leaderboards.html", times=Time.query.all())

    return redirect(url_for('math'))

@app.route("/math")
def math():
    return render_template("main_page.html")

@app.route("/sendAnswer", methods=["POST"])
def answer():
    answer = request.form['answer']
    correctanswer = request.form['correctanswer']
    math = getMath()
    return jsonify(result=math)

@app.route("/sendTime", methods=["POST"])
def time():
    settime = Time(name=request.form['name'], time=request.form['time'])
    db.session.add(settime)
    db.session.commit()


def getMath():
    num1 = randrange(1,15)
    num2 = randrange(1,15)
    eq = randrange(1,5)
    ans = 0
    if eq==1:
        equation="+"
        ans = num1 + num2
    elif eq==2:
        equation="-"
        ans = num1 - num2
    elif eq==3:
        equation="*"
        ans = num1 * num2
    elif eq==4:
        equation="/"
        ans = num1 / num2
    math = str(str(num1) +' '+ equation +' '+ str(num2) +' =')
    return {"answer": ans, "math": math}
