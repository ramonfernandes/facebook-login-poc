import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider
} from "angularx-social-login";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

//Replace the string on the provider for your Application's ID
const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("xxxxxxxxxxxxxxxx ")
  }
]);

export function provideConfig() {
  return config;
}
