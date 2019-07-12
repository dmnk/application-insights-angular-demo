# application-insights-angular-demo
Monitoring a minimal Angular App with the Application Insights Web SDK

# based on a minimal angular 8 bootstrap

```bash
npm install -g @angular/cli
ng new insights
cd insights
ng update @angular/cli @angular/core
ng update
ng update rxjs
npm audit fix --force
npm i @microsoft/applicationinsights-web
ng g service services/common/ApplicationInsights
```

after that modify the [ApplicationInsights.service, app.module.ts](https://github.com/dmnk/application-insights-angular-demo/commit/d602fd01153b614e49b9d195b8286017520308e8) as described in [Julien Dubois - Using Azure Application Insights with Angular (5/7)](https://dev.to/azure/using-azure-application-insights-with-angular-5-7-4kej) and additionally show the changes required in  **app.component.ts** so that the service is actually used.

As bonus: [different instrumentationKeys](https://github.com/dmnk/application-insights-angular-demo/commit/ed1da771e26393a6f3eb9a2088dbc70328dc2980) for different environments.