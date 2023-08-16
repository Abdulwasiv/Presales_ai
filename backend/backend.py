from flask import Flask, request
from flask_cors import CORS
import subprocess

app = Flask(__name__)
cors = CORS(app, resources={r"/run-python-script": {"origins": {"http://localhost:3000/","http://localhost:5000/run-python-script"}}})
@app.route('/run-python-script', methods=['POST'])
def run_python_script():
    
    command = "streamlit run \"presales.py\""

    try:
        # Run the command and capture its output
        result = subprocess.run(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

        # Print the output
        print("Output:", result.stdout)

        # Print the error (if any)
        print("Error:", result.stderr)

        # Print the return code
        print("Return Code:", result.returncode)

    except subprocess.CalledProcessError as e:
        # This exception is raised if the command returns a non-zero exit code
        print("Error:", e)

        return "Python script executed successfully"

if __name__ == '__main__':
    app.run()
