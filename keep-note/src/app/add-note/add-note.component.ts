import { Component } from '@angular/core';
import{Note} from '../models/notes';
import{Notes} from '../models/notes-list';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  addNote(id1:string ,titleNote:string , contentNote:string) {

    let data : Note =
    {
        id: parseInt(id1) ,
        title:titleNote ,
        content:contentNote
    };
    alert("Note Added Succesfully")
    Notes.push(data)
  }
  
  
}
