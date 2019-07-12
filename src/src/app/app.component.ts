import { Component, OnInit } from '@angular/core';
import { ApplicationInsightsService } from './services/common/application-insights.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'insights';
  private appInsights;

  constructor(private router: Router) {
    this.appInsights = new ApplicationInsightsService(router);
  }

  ngOnInit() {
    this.appInsights.loadAppInsights();
  }
}
