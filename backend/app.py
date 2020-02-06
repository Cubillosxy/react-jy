import csv
from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin

app = Flask(__name__)
api = Api(app)
cors = CORS(app)


class ReadCsv(Resource):

    @cross_origin()
    def post(self):
        json_data = request.get_json(force=True)
        csv_data = json_data.get('csv_data')
        reader = csv.reader(csv_data.splitlines())
        headers = reader.next()
        headers = [i.strip() for i in headers] #remove spaces
        result = {i: [] for i in headers}
        lines = 0

        try:
            for row in reader:
                lines += 1
                for i in range(len(headers)):
                    result[headers[i]].append(row[i].strip())
        except IndexError:
            return {'error': 'Invalid CSV data'}

        response = {
            'headers': headers,
            'data': result
        }
        return response if lines > 0 else {'error': 'No data'}


api.add_resource(ReadCsv, '/')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
