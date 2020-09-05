from flask import Flask
from flask_cors import CORS, cross_origin
from flask_restful import Api

from resources import Spot, SpotList 
from resources import Home
from resources import Register
from resources import Token
from resources import HomeAuth
from resources import StockTrend
from resourcesSPFH import AddSPFH
from resources import Database

app = Flask(__name__)
api = Api(app)
cors = CORS(app, resources={r"/*": {"origins": "*"}})


api.add_resource(Home, '/')
api.add_resource(SpotList, '/api_spots')
api.add_resource(Spot, '/api_spots/<int:spot_id>')
api.add_resource(Register, '/api_register')
api.add_resource(Token, '/api_token')
api.add_resource(HomeAuth, '/api_home_auth')
api.add_resource(AddSPFH, '/api_add_spfh')
api.add_resource(StockTrend, '/api_stock_trends')
api.add_resource(Database, '/api_database')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
