import numpy as np
import sqlalchemy

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, request

postgresStr = ("postgresql://postgres:password@localhost:5432/sfpdcrime")
engine = create_engine(postgresStr)
Base = automap_base()
Base.prepare(engine, reflect=True)
Base.classes.keys()
Crimedata = Base.classes.crimedata_ext

app = Flask(__name__)

@app.route("/")
def welcome():
    """Here is a comprehensive list of available API routes for this Flask App."""
    return (
        f"available routes - in development:<br/>"
        f"/api/v1.0/all<br/>"
        f"/api/v1.0/dotw<br/>"
        f"/api/v1.0/category<br>"
        f"/api/v1.0/month/<br/>"
        f"/api/v1.0/dotw_qry?q=[specific_day]<br/>"
        f"/api/v1.0/month_qry?q=[specific_month]<br/>"
    )


@app.route("/api/v1.0/all_test")
def all_test():
    session = Session(engine)
    results = session.query(Crimedata.descript).limit(1000).all()
    session.close()
    all_data = list(np.ravel(results))
    return jsonify(all_data)


@app.route("/api/v1.0/all")
def all():
    session = Session(engine)
    results = session.query(
            Crimedata.category, 
            Crimedata.descript, 
            Crimedata.dayofweek,
            Crimedata.longitude,
            Crimedata.latitude,
            Crimedata.crime_year,
            Crimedata.crime_month
            ).limit(10000).all()
    session.close()
    all_crimes = []
    for category, descript, dayofweek, longitude, latitude, crime_year, crime_month in results:
        crime_dict = {}
        crime_dict["category"] = category
        crime_dict["descript"] = descript
        crime_dict["dayofweek"] = dayofweek
        crime_dict["longitude"] = float(longitude)
        crime_dict["latitude"] = float(latitude)
        crime_dict["crime_year"] = crime_year
        crime_dict["crime_month"] = crime_month
        all_crimes.append(crime_dict)

    return jsonify(all_crimes)

@app.route("/api/v1.0/dotw")
def all_dotw():
    session = Session(engine)
    results = session.query(Crimedata.dayofweek, \
        func.count(Crimedata.descript).label("crime_count")) \
            .group_by(Crimedata.dayofweek) \
                .all()
    session.close()
    all_crimes = []
    for dayofweek, crime_count in results:
        crime_dict = {}
        crime_dict["dayofweek"] = dayofweek
        crime_dict["crime_count"] = crime_count
        all_crimes.append(crime_dict)
    return jsonify(all_crimes)

@app.route("/api/v1.0/category")
def all_cat():
    session = Session(engine)
    results = session.query(Crimedata.category, \
        func.count(Crimedata.descript).label("crime_count")) \
            .group_by(Crimedata.category) \
                .all()
    session.close()
    all_crimes = []
    for category, crime_count in results:
        crime_dict = {}
        crime_dict["category"] = category
        crime_dict["crime_count"] = crime_count
        all_crimes.append(crime_dict)
    return jsonify(all_crimes)

@app.route("/api/v1.0/month")
def all_mon():
    session = Session(engine)
    results = session.query(Crimedata.crime_month, \
        func.count(Crimedata.descript).label("crime_count")) \
            .group_by(Crimedata.crime_month) \
                .all()
    session.close()
    all_crimes = []
    for crime_month, crime_count in results:
        crime_dict = {}
        crime_dict["crime_month"] = crime_month
        crime_dict["crime_count"] = crime_count
        all_crimes.append(crime_dict)
    return jsonify(all_crimes)

@app.route("/api/v1.0/dotw_qry") 
def dotw_qty():
    dotw = request.args.get("q")
    session = Session(engine)
    results = session.query(
            Crimedata.category, 
            Crimedata.descript, 
            Crimedata.dayofweek,
            Crimedata.longitude,
            Crimedata.latitude,
            Crimedata.crime_year,
            Crimedata.crime_month
            ) \
                .filter(func.lower(Crimedata.dayofweek) == func.lower(dotw)) \
                    .limit(10000) \
                        .all()
    session.close()
    all_crimes = []
    for category, descript, dayofweek, longitude, latitude, crime_year, crime_month in results:
        crime_dict = {}
        crime_dict["category"] = category
        crime_dict["descript"] = descript
        crime_dict["dayofweek"] = dayofweek
        crime_dict["longitude"] = float(longitude)
        crime_dict["latitude"] = float(latitude)
        crime_dict["crime_year"] = crime_year
        crime_dict["crime_month"] = crime_month
        all_crimes.append(crime_dict)

    return jsonify(all_crimes)

@app.route("/api/v1.0/month_qry") 
def mon_qty():
    mon_id = request.args.get("q")
    session = Session(engine)
    results = session.query(
            Crimedata.category, 
            Crimedata.descript, 
            Crimedata.dayofweek,
            Crimedata.longitude,
            Crimedata.latitude,
            Crimedata.crime_year,
            Crimedata.crime_month
            ) \
                .filter(func.lower(Crimedata.crime_month) == func.lower(mon_id)) \
                    .limit(10000) \
                        .all()
    session.close()
    all_crimes = []
    for category, descript, dayofweek, longitude, latitude, crime_year, crime_month in results:
        crime_dict = {}
        crime_dict["category"] = category
        crime_dict["descript"] = descript
        crime_dict["dayofweek"] = dayofweek
        crime_dict["longitude"] = float(longitude)
        crime_dict["latitude"] = float(latitude)
        crime_dict["crime_year"] = crime_year
        crime_dict["crime_month"] = crime_month
        all_crimes.append(crime_dict)

    return jsonify(all_crimes)

if __name__ == '__main__':
    app.run(debug=True)
