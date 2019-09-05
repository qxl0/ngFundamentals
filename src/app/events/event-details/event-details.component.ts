import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { EventService } from '../../shared/event.service';

@Component( {
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left: 20px; pading-right: 20px; }
    .event-image: {height: 100px; }
  `]
})
export class EventDetailsComponent implements OnInit {
  event: any;
  constructor(@Inject(forwardRef(() => EventService)) private es: EventService)
  {

  }
  ngOnInit() {
    this.event = this.es.getEvent(1);
  }
}
