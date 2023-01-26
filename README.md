# GiveMeLabeledIssuesUI
This is the user-facing web interface to discover new open source issues within supported projects. The web interface communicates with the backend of the system, [a Django REST API](https://github.com/JoeyV55/GiveMeLabeledIssuesAPI) that provides access to both the BERT and TF-IDF (coming soon!) text classification models. 

[![DOI](https://zenodo.org/badge/545266562.svg)](https://zenodo.org/badge/latestdoi/545266562)


# How to install

Run these commands to install the packages and run the Angular app

1. npm i (To install the node modules)
2. ng serve --port 5000 (To run the app on localhost:5000)
3. view the app on your browser by going to link: http://localhost:5000/

# Main User Flow
1. The user selects a project they are interested in from the drop down menu. 
2. The user selects their domains from the checkbox list of labels that are within that project's issues.
3. The user submits their choices of project and labels and is then presented with a list of labeled, open issues that they are then able to navigate to and/or save for later. 


# Architecture

### Proof of Concept
![alt text](https://github.com/JoeyV55/GiveMeLabeledIssuesAPI/blob/master/GiveMeLabeledIssuesPOC.png "POC Architecture")

GiveMeLabeledIssues is a fully integrated Open Source Issue recommendation system. GiveMeLabeledIssues gives an interface to utilize the trained and tested BERT and TF-IDF machine learning models to label OSS issues. The system starts with a front end web application that prompts users to input their domains of expertise, such as Databases (DB), Machine Learning (ML), User Interface (UI), etc, along with the names of any supported projects they are interested in. Once these items are selected, the front end sends this to the backend REST API endpoint. The backend then proceeds to mine the current open issues for the inputted project(s) and then classifies them by domain label. These classified issues and labels are then compared to the user’s desired domain labels to determine which issues are relevant to the user’s expertise. Once this matching process concludes, the list of relevant issues is sent back to the user on the front end. Overall, GiveMeLabeledIssues is a POC of a greater architecture to facilitate the usage of our machine learning models for issue recommendation.



### Full Product

![alt text](https://github.com/JoeyV55/GiveMeLabeledIssuesAPI/blob/master/GiveMeLabeledIssuesFull.png "POC Architecture")

The fully realized product for GiveMeLabeledIssues will use a database to store mined issues and their classified domain labels for quick access. Additionally, the full product will support both the BERT and TF-IDF models to achieve the most accurate and timely classification. This full product will be implemented directly after the POC for GiveMeLabeledIssues is completed and integrated. 


# The Team
#### Joseph Vargovich, Fabio Marcos Santos, Jacob Penney, Hanish Parthasarathy, Dr. Marco Gerosa. 




