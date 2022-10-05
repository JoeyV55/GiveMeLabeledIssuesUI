import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'GiveMeLabeledIssues';

  projectModel = [
    {
      'projectName': 'jabref',
      bertLabel: 'JabRef,jabref',
      checks: [
        {
          id: 'utility',
          label: 'Utility (Util)',
          selected: false,
          bertDomainLabel: 'Util'
        },
        {
          id: 'natural-language-processing',
          label: 'Natural Language Processing (NLP)',
          selected: false,
          bertDomainLabel: 'NLP'
        },
        {
          id: 'application-performance-manager',
          label: 'Application performance Manager (APM)',
          selected: false,
          bertDomainLabel: 'APM'
        },
        {
          id: 'network',
          label: 'Network',
          selected: false,
          bertDomainLabel: 'network'
        },
        {
          id: 'databases',
          label: 'Databases (DB)',
          selected: false,
          bertDomainLabel: 'DB'
        },
        {
          id: 'interpreter',
          label: 'Interpreter',
          selected: false,
          bertDomainLabel: 'Interpreter'
        },
        {
          id: 'logging',
          label: 'Logging',
          selected: false,
          bertDomainLabel: 'Logging'
        },
        {
          id: 'data-structure',
          label: 'Data Structure',
          selected: false,
          bertDomainLabel: 'Data.Structure'
        },
        {
          id: 'internationalization',
          label: 'Internationalization (il8n)',
          selected: false,
          bertDomainLabel: 'il8n'
        },
        {
          id: 'software-dev-and-it-operations',
          label: 'Software Development and IT Operations (DevOps)',
          selected: false,
          bertDomainLabel: 'DevOps'
        },
        {
          id: 'logic',
          label: 'Logic',
          selected: false,
          bertDomainLabel: 'Logic'
        },
        {
          id: 'microservices',
          label: 'Microservices/Services',
          selected: false,
          bertDomainLabel: 'util'
        },
        {
          id: 'test',
          label: 'Test',
          selected: false,
          bertDomainLabel: 'Test'
        },
        {
          id: 'search',
          label: 'Search',
          selected: false,
          bertDomainLabel: 'Search'
        },
        {
          id: 'input-output',
          label: 'Input-Output (IO)',
          selected: false,
          bertDomainLabel: 'IO'
        },
        {
          id: 'user-interface',
          label: 'User Interface (UI)',
          selected: false,
          bertDomainLabel: 'UI'
        },
        {
          id: 'parser',
          label: 'Parser',
          selected: false,
          bertDomainLabel: 'Parser'
        },
        {
          id: 'security',
          label: 'Security',
          selected: false,
          bertDomainLabel: 'Security'
        },
        {
          id: 'application',
          label: 'Application (App)',
          selected: false,
          bertDomainLabel: 'App'
        }
      ]
    },
    {
      'projectName': 'powertoys',
      bertLabel: 'microsoft,PowerToys',
      'checks': [
        {
          id: 'application-performance-manager',
          label: 'Application performance Manager (APM)',
          selected: false,
          bertDomainLabel: 'APM'
        },
        {
          id: 'interpreter',
          label: 'Interpreter',
          selected: false,
          bertDomainLabel: 'Interpreter'
        },
        {
          id: 'logging',
          label: 'Logging',
          selected: false,
          bertDomainLabel: 'Logging'
        },
        {
          id: 'data-structure',
          label: 'Data Structure',
          selected: false,
          bertDomainLabel: 'Data.Structure'
        },
        {
          id: 'internationalization',
          label: 'Internationalization (il8n)',
          selected: false,
          bertDomainLabel: 'il8n'
        },
        {
          id: 'setup',
          label: 'Setup',
          selected: false,
          bertDomainLabel: 'Setup'
        },
        {
          id: 'logic',
          label: 'Logic',
          selected: false,
          bertDomainLabel: 'Logic'
        },
        {
          id: 'microservices',
          label: 'Microservices/Services',
          selected: false,
          bertDomainLabel: 'Microservices'
        },
        {
          id: 'test',
          label: 'Test',
          selected: false,
          bertDomainLabel: 'Test'
        },
        {
          id: 'search',
          label: 'Search',
          selected: false,
          bertDomainLabel: 'Search'
        },
        {
          id: 'user-interface',
          label: 'User Interface (UI)',
          selected: false,
          bertDomainLabel: 'UI'
        },
        {
          id: 'parser',
          label: 'Parser',
          selected: false,
          bertDomainLabel: 'Parser'
        },
        {
          id: 'application',
          label: 'Application (App)',
          selected: false,
          bertDomainLabel: 'App'
        }
      ]
    },
    {
      'projectName': 'rmca',
      bertLabel: 'nobodyczcz,MCA-RMCA',
      'checks': [
        {
          id: 'application-performance-manager',
          label: 'Application performance Manager (APM)',
          selected: false,
          bertDomainLabel: 'APM'
        },
        {
          id: 'network',
          label: 'Network',
          selected: false,
          bertDomainLabel: 'Network'
        },
        {
          id: 'databases',
          label: 'Databases (DB)',
          selected: false,
          bertDomainLabel: 'DB'
        },
        {
          id: 'error-handling',
          label: 'Error Handling',
          selected: false,
          bertDomainLabel: 'Error.Handling'
        },
        {
          id: 'logging',
          label: 'Logging',
          selected: false,
          bertDomainLabel: 'Logging'
        },
        {
          id: 'language',
          label: 'Language (Lang)',
          selected: false,
          bertDomainLabel: 'Lang'
        },
        {
          id: 'data-structure',
          label: 'Data Structure',
          selected: false,
          bertDomainLabel: 'Data.Structure'
        },
        {
          id: 'software-dev-and-it-operations',
          label: 'Software Development and IT Operations (DevOps)',
          selected: false,
          bertDomainLabel: 'DevOps'
        },
        {
          id: 'internationalization',
          label: 'Internationalization (il8n)',
          selected: false,
          bertDomainLabel: 'il8n'
        },
        {
          id: 'setup',
          label: 'Setup',
          selected: false,
          bertDomainLabel: 'Setup'
        },
        {
          id: 'microservices',
          label: 'Microservices/Services',
          selected: false,
          bertDomainLabel: 'Microservices'
        },
        {
          id: 'user-interface',
          label: 'User Interface (UI)',
          selected: false,
          bertDomainLabel: 'UI'
        },
        {
          id: 'parser',
          label: 'Parser',
          selected: false,
          bertDomainLabel: 'Parser'
        },
        {
          id: 'security',
          label: 'Security',
          selected: false,
          bertDomainLabel: 'Security'
        },
        {
          id: 'big-data',
          label: 'Big Data',
          selected: false,
          bertDomainLabel: 'Big.Data'
        },
        {
          id: 'event-handling',
          label: 'Event Handling',
          selected: false,
          bertDomainLabel: 'Event.Handling'
        }
      ]
    }
  ];

  checks = []

  issuesData = []

  displayLabels = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data: NgForm) {
    console.log("Sending request to backend.")
    this.http.get('http://127.0.0.1:8000/BERT/JabRef/UI,DB')
      .pipe(map(responseData => {
        const issuesArray = [];

        for (const key in responseData) {
          issuesArray.push(responseData[key])
        }
        console.log("ResponseData: " + responseData['issues']);
        //console.log(issuesArray);
        //Build issueData objects. 

        return issuesArray;
      }))
      .subscribe(data => {
        this.issuesData = data
      });
  }

  onChange(projectName: string) {
    console.log(projectName)

    this.projectModel.forEach((element) => {
      if (element.projectName === projectName) {
        this.checks = element.checks
      }
    })
  }
}
