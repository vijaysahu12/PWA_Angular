import { Component, OnInit } from '@angular/core';
import { ToDo } from '../Modal/ToDo';
import { FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  list: Observable<any[]>;
  ToDoArray: ToDo[] = [];
  todo: ToDo;
  description = new FormControl('', Validators.required);
  constructor(private firebase: AngularFireDatabase) {  }
  todoList: AngularFireList<any>;
  
  ngOnInit() {
    this.GetToDoList();
  }

  GetToDoList() {
    this.todoList = this.firebase.list('todo');

    return this.todoList.snapshotChanges().subscribe(action => {

      this.ToDoArray = action.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
     }); // make it observable
  }
  AddToDoItem() {
    if (this.description.valid) {
      this.todoList.push({
        CreatedDate: new Date().toString(),
        Description: this.description.value,
        Status: true
      });
      this.description.reset();
    }
  }

}
