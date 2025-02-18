from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/optimal_sites')
def get_optimal_sites():

    #sample data in JSON format
    sample_data = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {"type": "Point", "coordinates": [-118.2437, 34.0522]},
                "properties": {"score": 85}
            }
        ]
    }
    return jsonify(sample_data)


if __name__=='__main__':
    app.run(debug=True)
    

