import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DeleteAuthor } from './../Store/action/Author.action';
import { State } from './../Store/Store';

@Component({
  selector: 'app-dialog-remove',
  templateUrl: './dialog-remove.component.html',
  styleUrls: ['./dialog-remove.component.css']
})
export class DialogRemoveComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  private store: Store<State>,) { 
    console.log('aaa',data)
  }

  ngOnInit(): void {
  }
  delete(){
    console.log('id',this.data.id)
this.store.dispatch(DeleteAuthor({id: this.data.id}))
  }
}
