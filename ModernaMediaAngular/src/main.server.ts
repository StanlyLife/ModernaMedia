import { enableProdMode, mergeApplicationConfig } from '@angular/core';
import {
  BootstrapContext,
  bootstrapApplication,
} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { appServerConfig } from './app/app.config.server';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const serverConfig = mergeApplicationConfig(appConfig, appServerConfig);

const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(AppComponent, serverConfig, context);

export default bootstrap;
