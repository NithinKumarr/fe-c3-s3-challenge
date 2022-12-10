import { Component } from '@angular/core';
import {Notes} from '../models/notes-list';
import{Note} from '../models/notes';
@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent {
  property:Note[]=Notes;
  // searchText:string="";

datasearch(searchText:string){
if(searchText === "" || !searchText){
  this.property=Notes;
}
else{
  this.property=Notes;
  this.property=this.property.filter(note=>note.title?.startsWith(searchText))
}
}
}
