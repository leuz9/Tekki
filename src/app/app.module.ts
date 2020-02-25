import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './shared/component/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './shared/component/home/home.component';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VideoComponent } from './shared/component/video/video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FooterComponent } from './shared/component/footer/footer.component';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { StudentComponent } from './front-office/components/student/student.component';
import { SchoolComponent } from './front-office/components/school/school.component';
import { EnterpriseComponent } from './front-office/components/enterprise/enterprise.component';
import { OtherComponent } from './front-office/components/other/other.component';
import { SigninComponent } from './front-office/components/student/signin/signin.component';
import { SignupComponent } from './front-office/components/student/signup/signup.component';
import { DashboardComponent } from './front-office/components/student/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, HomeComponent, VideoComponent, FooterComponent, FrontOfficeComponent, StudentComponent, SchoolComponent, EnterpriseComponent, OtherComponent, SigninComponent, SignupComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    YouTubePlayerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
