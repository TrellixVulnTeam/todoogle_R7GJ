import { Component, OnInit } from '@angular/core';
//import { Calendar } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
import {CalendarOptions, FullCalendarModule} from "@fullcalendar/angular";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import {EditEventComponent} from "../edit-event/edit-event.component";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
//import interactionPlugin from "@fullcalendar/interaction";
//import dayGridPlugin from "@fullcalendar/daygrid";

/*FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  //dayGridPlugin,
  //interactionPlugin,
  //listPlugin
]);*/

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
export class ListviewComponent implements OnInit {

  modalRef: BsModalRef;

  static events = [{}]

  static addEvent(id,title,start,end) {
    let event = {
      id: id,
      title: title,
      start: start,
      end: end
    }
    ListviewComponent.events.push(event)
  }

  constructor(private modalService: BsModalService) { }

  calendarOptions: CalendarOptions = {
    initialView: 'listDay',
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.openModal.bind(this),
    plugins: [ listPlugin,googleCalendarPlugin ],
    googleCalendarApiKey: 'AIzaSyAp_Insk0JjH4oxZ4I0-PLIydIno9jZEZ8',
    events: ListviewComponent.events
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  openModal(arg) {
    EditEventComponent.id = arg.event.id ;
    EditEventComponent.title = arg.event.title ;
    EditEventComponent.start = arg.event.start ;
    EditEventComponent.end = arg.event.start ;
    this.modalRef = this.modalService.show(EditEventComponent);
  }

  ngOnInit(): void {
  }

}
