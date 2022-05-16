import {Component, Input, OnInit} from '@angular/core';
import {CalendarOptions, FullCalendarModule} from "@fullcalendar/angular";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import {EditEventComponent} from "../edit-event/edit-event.component";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@Component({
  selector: 'app-calendarview',
  templateUrl: './calendarview.component.html',
  styleUrls: ['./calendarview.component.scss']
})
export class CalendarviewComponent implements OnInit {

  modalRef: BsModalRef;

  //@Input() calendarId: String;
  static events = [{ }]

  static addEvent(id,title,start,end) {
    let event = {
      id: id,
      title: title,
      start: start,
      end: end
    }
    CalendarviewComponent.events.push(event)
  }

  constructor(private modalService: BsModalService) {
  }

  openModal(arg) {
    EditEventComponent.id = arg.event.id ;
    EditEventComponent.title = arg.event.title ;
    EditEventComponent.start = arg.event.start ;
    EditEventComponent.end = arg.event.start ;
    this.modalRef = this.modalService.show(EditEventComponent);
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.openModal.bind(this),
    googleCalendarApiKey: 'AIzaSyAp_Insk0JjH4oxZ4I0-PLIydIno9jZEZ8',
    events: CalendarviewComponent.events
  };


  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }

  ngOnInit(): void {
  }

}
