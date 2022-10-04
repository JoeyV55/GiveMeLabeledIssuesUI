# GiveMeLabeledIssuesUI
This is the user-facing web interface to discover new open source issues within supported projects. The web interface communicates with the backend of the system, [a Django REST API](https://github.com/JoeyV55/GiveMeLabeledIssuesAPI) that provides access to both the BERT and TF-IDF (coming soon!) text classification models. 

# Main User Flow
1. The user selects a project they are interested in from the drop down menu. 
2. The user selects their domains from the checkbox list of labels that are within that project's issues.
3. The user submits their choices of project and labels and is then presented with a list of labeled, open issues that they are then able to navigate to and/or save for later. 

# Architecture
Proof of Concept Architecture

# How to install

Run these commands to install the packages and run the Angular app

1. npm i (To install the node modules)
2. ng serve --port 5000 (To run the app on localhost:5000)
3. view the app on your browser by going to link: http://localhost:5000/
