from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS
from dotenv import load_dotenv
import os, subprocess, platform, re
from Helpers.cosine_sim_search import vector_search
system = platform.system()
username = os.getlogin()
folder_path = fr"C:\Users\{username}"

load_dotenv()

class Command(Resource):
    def post(self):
        data = request.get_json()

        command = data.get('command')
        command = re.sub(r'[^\w\s]', '', command)
        command = command.lower()
        command_arr = command.split(' ')

        print(command)

        # open _____
            # directory folder_name

        if command_arr[0] == 'open':
            if command_arr[1] == 'directory':
                if command_arr[2] == 'home':
                    subprocess.run([
                        'powershell', 
                        '-Command',
                        f'Start-Process "{folder_path}" -WindowStyle Normal'
                    ])
                else:
                    # similarity file search for directory in folder_path
                    pass

            elif command_arr[1] == 'application':
                application = ' '.join(command_arr[2:])
                print(application)

                file = vector_search(application, folder_path + '/Desktop/')
                print(file)
                subprocess.run([
                    'powershell', 
                    '-Command',
                    f'Start-Process "{folder_path + f'/Desktop/{file}'}" -WindowStyle Normal'
                ])

            else:
                print('hi')





            # application application_name




        # create ____


        # delete ____


        # _____ [ question term ]


        return {'message': 'success'}, 200
    

# # ----- ###########   Restful API   ########### ----- #

app = Flask(__name__)
api = Api(app)
CORS(app)
 
api.add_resource(Command, "/command")


if __name__ == "__main__":
    app.run(debug=True, port=5000)