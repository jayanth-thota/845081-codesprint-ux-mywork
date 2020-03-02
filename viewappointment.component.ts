import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent  {


  constructor(private router:Router,private appointmentservice:AppointmentService) { }

  registerList: Observable<any[]>;
 
  ngOnInit() {
 
   this.appointmentservice.getAllcustomers("").subscribe(data=>{
 
    this.registerList=data;
 
  });
}
}