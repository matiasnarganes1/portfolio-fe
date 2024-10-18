import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    FontAwesomeModule
  ]
})
  .catch((err) => console.error(err));
