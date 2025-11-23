import { ServerWindowRefService } from './services/server-window-ref.service';
import { NgModule } from '@angular/core';
import { ServerModule, provideServerRendering } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { WindowRefService } from './services/window-ref.service';

@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [AppComponent],
  providers: [
    provideServerRendering(),
    {
      provide: WindowRefService,
      useClass: ServerWindowRefService,
    },
  ],
})
export class AppServerModule {}
