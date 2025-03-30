from flask import Flask, send_file

app = Flask(__name__)

@app.route('/openload/<path:filename>')
def openload(filename):
    return send_file(f'./pdfs/{filename}', as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)