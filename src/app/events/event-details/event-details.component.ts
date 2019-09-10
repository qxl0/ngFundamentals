import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/shared';

@Component( {
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left: 20px; pading-right: 20px; }
    .event-image {height: 100px; }
  `]
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  constructor(@Inject(forwardRef(() => EventService)) private es: EventService,
              @Inject(forwardRef(() => ActivatedRoute)) private route: ActivatedRoute)
  {

  }
  ngOnInit() {
    this.event = this.es.getEvent(+this.route.snapshot.params['id']);
  }
}
