import { Component } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
//import {  FirebaseListObservable } from "angularfire2/database";
import {Teacher} from './teacher';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  db:AngularFireDatabase;
 dd:Teacher;
  /*
  subscription: Subscription;
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  } */
 
//  title = 'app';

//teachers:any[];

teachers$:any;
teacher$;

//to prevent memory leak


constructor(db:AngularFireDatabase) {

this.db=db;

// reading multiple list
//  this.db.list('/Teachears').subscribe(teachers=>{
//   this.teachers$=teachers;
//   });

  // this.db.list('/Teachears').snapshotChanges().subscribe(snapshots=>{
    
  //   snapshots.forEach(snapshot => {
  //     console.log('KEY : '+ snapshot.key);
  //     console.log('VALUE : '+ snapshot.payload.val());
      
      
  //   });
  // });


  // this.db.list('/Teachears').valueChanges().subscribe((snapshots: Teacher[])=>{
    
  //   snapshots.forEach(snapshot => {
  //     console.log(snapshot);
  //     console.log('KEY : '+ snapshot.$key);
  //     console.log('KEY : '+ snapshot.name);
      
      
  //   });
  // });

// reading one object

//var items =
db.list('/Teachears').snapshotChanges().subscribe((snapshots)=>{
    
  this.teachers$=snapshots;
   snapshots.forEach(snapshot => {
       
    console.log('KEY new : '+ snapshot.key);
       
       console.log("name "+snapshot.payload.val().name);
       
       console.log('address is : '+ snapshot.payload.val().address);
       
      
      
     });
   });

 this.db.object('/Teachears/Teacher3').snapshotChanges().subscribe((snapshot)=>{

  
    console.log('KEY : '+ snapshot.key);
    
    

 });

db.database.ref('/Teachears/Teacher3').once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().name) || 'Anonymous';
  console.log("name is"+username);
  // ...
});


 var updates = {};
 


 //db.list('/Teachears').push({name:'ttt',address:'dddd'});


  /* another way
  
this.subscription=db.list('/Teachears').valueChanges().subscribe(
    teachers=> {
      this.teachers=teachers;
      console.log(this.teachers);
  
    }
  );

  */


  


 
  /*
  courses=>{
    this.courses=courses;
    console.log(this.courses);

  })*/
}

add(teacher:HTMLInputElement,address:HTMLInputElement){
  this.db.list('/Teachears').push({name:teacher.value,address:address.value});
}


update(teacher:any)
{
 console.log(teacher['key']);
 console.log("debug 1"+ teacher.name);
 console.log("debug 2"+teacher.$key);

  this.db.object('/Teachears/'+teacher.$key).set(teacher.$value +'Updated');
}



}
