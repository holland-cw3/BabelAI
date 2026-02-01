from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

class Login(Resource):
    def post(self):
        # data = request.get_json()
        # field = data.get("field")        
        
        return {'message': 'message', 'blah': 'blah'}, 200
       
  
# ----- ###########   Restful API   ########### ----- #

app = Flask(__name__)
api = Api(app)
CORS(app)
 
api.add_resource(Login, "/Login")


if __name__ == "__main__":
    app.run(debug=True, port=5000)