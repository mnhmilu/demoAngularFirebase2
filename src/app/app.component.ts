import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { Teacher } from './teacher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  db: AngularFireDatabase;
  dd: Teacher;

  teachers$: any;
  teacher$;
  constructor(db: AngularFireDatabase) {
    this.db = db;

    this.db.object('/Teachears/Teacher3').snapshotChanges().subscribe((snapshot) => {
      console.log('KEY : ' + snapshot.key);
    });

    db.database.ref('/Teachears/Teacher3').once('value').then(function (snapshot) {
      var username = (snapshot.val() && snapshot.val().name) || 'Anonymous';
      console.log("name is" + username);
      // ...
    });


    var updates = {};

  }


  list()
  {
    this.db.list('/Teachears').snapshotChanges().subscribe((snapshots) => {

      this.teachers$ = snapshots;

    });

  }

  add(teacher: HTMLInputElement, address: HTMLInputElement) {
    this.db.list('/Teachears').push({ name: teacher.value, address: address.value });
  }


  update(teacher: any) {
    console.log("Update operation is on going");
    console.log(teacher.val());
    console.log(teacher['key']);
    console.log("debug 1" + teacher.val().name);
    console.log("debug 2" + teacher.val().address);

    this.db.list('Teachears').update(teacher['key'],{
      name:teacher.val().name+' updated',
      address:teacher.val().address
    
    });

  }

  delete(teacher: any) {

    console.log("Delete operation is on going");
    console.log(teacher['key']);
    console.log("debug 1" + teacher.name);
    console.log("debug 2" + teacher.$key);

   //this.db.list

    this.db.list('Teachears').remove( teacher['key']).then(x=>console.log("deleted"));


  }




}
