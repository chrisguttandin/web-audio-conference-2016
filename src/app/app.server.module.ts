import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server'; // tslint:disable-line:no-implicit-dependencies
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
    bootstrap: [AppComponent],
    imports: [AppModule, ServerModule]
})
export class AppServerModule {}
