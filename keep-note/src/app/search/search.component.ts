import { Component,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText:string="";
  @Output()

  pro=new EventEmitter();
  search(){
  this.pro.emit(this.searchText)
  }
  reset(){
    this.searchText="";
    this.pro.emit(this.searchText)
  }  
}
