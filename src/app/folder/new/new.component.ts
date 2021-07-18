import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from '../../../environments/environment';
import { Octokit, App } from "octokit";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

data = {
  id: '8e060bd7-8291-4216-942f-3272ecf7cf71',
  name:'Folder test',
  slug:'folder_test',
  private: false,
  mode: 'single',

}

octokit: Octokit;

  title = APP_CONFIG.name;
  constructor() { }

  ngOnInit(): void {
    this.octokit = new Octokit();
  }

  

  submitNew(){
    this.octokit.rest.repos.createForAuthenticatedUser({
      name: this.data.slug,
      description: this.data.name,
      has_issues: true,
      has_wiki: true,
      license_template: 'MIT',
      private: this.data.private,
      homepage: 'https://ph.openhistorymap.org/'+this.data.id
    }).then(x=> {
      console.log(x);
    })
  }

}
