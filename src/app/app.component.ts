import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { IssueData } from './issuedata/issuedata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'GiveMeLabeledIssues';
  baseurl = 'http://127.0.0.1:8000/Query/'

  projectModel = [
    {
      'projectName': 'jabref',
      projectLabel: 'JabRef,jabref',
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
          bertDomainLabel: 'Network'
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
          label: 'Microservices',
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
      projectLabel: 'microsoft,PowerToys',
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
          label: 'Microservices',
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
      'projectName': 'audacity',
      projectLabel: 'audacity,audacity',
      'checks': [
        {
          id: 'utility',
          label: 'Utility (Util)',
          selected: false,
          bertDomainLabel: 'Util'
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
          id: 'event-handling',
          label: 'Event Handling',
          selected: false,
          bertDomainLabel: 'Event.Handling'
        },
        {
          id: 'application',
          label: 'Application (App)',
          selected: false,
          bertDomainLabel: 'App'
        },
        {
          id: 'geo-info-sys',
          label: 'Geographic Information Systems (GIS)',
          selected: false,
          bertDomainLabel: 'GIS'
        },
        {
          id: 'multimedia',
          label: 'Multimedia',
          selected: false,
          bertDomainLabel: 'Multimedia'
        },
        {
          id: 'computer-graphics',
          label: 'Computer Graphics (CG)',
          selected: false,
          bertDomainLabel: 'CG'
        },
      ]
    }
  ];

  checks = []

  issuesData = []

  displayLabels = []

  projectLabel = ""

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data: NgForm) {
    let endpointUrl = this.baseurl;
    endpointUrl += this.projectLabel + "/"
    let selectedChecks = []
    this.checks.forEach(check => {
      if (check.selected)
        selectedChecks.push(check.bertDomainLabel)
    });

    let index = 0;
    selectedChecks.forEach(label => {
      endpointUrl += label
      if (index != selectedChecks.length - 1)
        endpointUrl += ","
      index++;
    })
    console.log("Sending request to backend. Url: " + endpointUrl);

    this.http.get(endpointUrl)
      .pipe(map(responseData => {
        const issuesArray = [];
        console.log(responseData["issues"]);
        for (var issue of responseData["issues"]) {
          //Build issueData objects. 
          console.log(issue["issueNumber"])
          let link = "https://github.com/" + this.projectLabel.replace(",", "/") + "/issues/" + issue["issueNumber"];
          let currIssue = new IssueData(issue["issueTitle"], issue["issueNumber"], issue["issueLabels"], link);
          issuesArray.push(currIssue);
        }
        console.log("ResponseData: " + responseData['issues']);
        console.log(issuesArray);


        return issuesArray;
      }))
      .subscribe(data => {
        this.issuesData = data
      });
  }

  onChange(projectName: string) {
    this.projectModel.forEach((element) => {
      if (element.projectName === projectName) {
        this.checks = element.checks
        this.projectLabel = element.projectLabel
      }
    })
  }

}
