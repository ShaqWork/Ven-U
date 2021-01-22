import { Venue } from './../Models/venue';
import { VenuesService } from './../services/venues.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bookingcontent',
  templateUrl: './bookingcontent.component.html',
  styleUrls: ['./bookingcontent.component.css']
})
export class BookingcontentComponent implements OnInit {
  
 
  myArray: any[] = [];


  constructor(private firestore: AngularFirestore){

  }

  ngOnInit(){
 
  this.firestore
  .collection("Venues")
  .get()
  .subscribe((ss) => {
    ss.docs.forEach((doc) => {
      this.myArray.push(doc.data());
    });
  });
  }

}
