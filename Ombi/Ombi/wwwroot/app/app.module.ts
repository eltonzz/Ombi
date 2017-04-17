import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { InfiniteScrollModule } from 'ngx-infinite-scroll'

import { SearchComponent } from './search/search.component';
import { RequestComponent } from './requests/request.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './errors/not-found.component';

// Services
import { SearchService } from './services/search.service';
import { RequestService } from './services/request.service';
import { NotificationService } from './services/notification.service';
import { SettingsService } from './services/settings.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { IdentityService } from './services/identity.service';
import { StatusService } from './services/status.service';


// Modules
import { SettingsModule } from './settings/settings.module';
import { WizardModule } from './wizard/wizard.module';

import { ButtonModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/components/growl/growl';
import { DataTableModule, SharedModule } from 'primeng/primeng';

const routes: Routes = [
    { path: '*', component: PageNotFoundComponent },
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
    { path: 'requests', component: RequestComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        GrowlModule,
        ButtonModule,
        FormsModule,
        SettingsModule,
        DataTableModule,
        SharedModule,
        InfiniteScrollModule,
        AuthModule,
        WizardModule
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        SearchComponent,
        RequestComponent,
        LoginComponent
    ],
    providers: [
        SearchService,
        RequestService,
        NotificationService,
        AuthService,
        AuthGuard,
        SettingsService,
        IdentityService,
        StatusService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
