import { EventService } from 'src/app/shared/event.service';
import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
import { Injectable, Inject, forwardRef } from '@angular/core';

@Injectable()
export class EventRouteActivator implements CanActivate{
  constructor(@Inject(forwardRef(() => EventService))  private eventService: EventService,
              @Inject(forwardRef(() => Router)) private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot) {
      const eventExists = !! this.eventService.getEvent(+route.params['id']);
      if (!eventExists)
        this.router.navigate(['/404']);

      return eventExists;
  }
}
