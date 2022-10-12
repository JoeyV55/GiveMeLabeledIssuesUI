export class IssueData {
    title: string;
    number: string;
    description: string;
    body: string;
    labels: string;
    link: string;

    constructor(inTitle: string,
        inNumber: string, inLabels: string, inLink: string
        //inDesc: string, inBody: string,
    ) {
        this.title = inTitle;
        //this.description = inDesc;
        //this.body = inBody;
        this.labels = inLabels;
        this.number = inNumber;
        this.link = inLink;
    }
}