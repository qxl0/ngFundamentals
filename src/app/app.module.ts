import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { EventsAppComponent } from './events-app.component';
import { ToastrService } from './common/toastr.service';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

import { appRoutes } from './routes';
import {  EventsListComponent,
          EventThumbnailComponent,
          EventService,
          EventDetailsComponent,
          CreateEventComponent,
          EventRouteActivator,
          EventListResolver} from './events/index'

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ToastrService,
    EventService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtryState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtryState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
