from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS
from dotenv import load_dotenv
import os
import subprocess
import platform

system = platform.system()
username = os.getlogin()
folder_path = fr"C:\Users\{username}"


load_dotenv()

class Command(Resource):
    def post(self):
        data = request.get_json()


        command = data.get('command')
        command = command.replace('.', '')
        command = command.replace(',', '')
        command = command.replace(';', '')        

        if command.lower() == 'open home':
            if system == 'Windows':
                subprocess.run([
                    'powershell', 
                    '-Command',
                     f'Start-Process "{folder_path}" -WindowStyle Normal'
                ])

        if command.lower() == 'open cmsc 414':
            if system == 'Windows':
                subprocess.run([
                    'powershell', 
                    '-Command',
                     f'Start-Process "{folder_path + '/CMSC414'}" -WindowStyle Normal'
                ])
           
        return {'message': 'success'}, 200
    

# # ----- ###########   Restful API   ########### ----- #

app = Flask(__name__)
api = Api(app)
CORS(app)
 
api.add_resource(Command, "/command")


if __name__ == "__main__":
    app.run(debug=True, port=5000)