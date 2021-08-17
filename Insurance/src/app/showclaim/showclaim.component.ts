import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-showclaim',
  templateUrl: './showclaim.component.html',
  styleUrls: ['./showclaim.component.css']
})
export class ShowclaimComponent implements OnInit {

  claims:any;
  vehicleclaim:any;
  
  constructor(private claimService:ClaimService) { }

  ngOnInit(): void {
    this.claimService.getbyuserid(0).subscribe((data)=>{
      console.log(data);
      this.claims=data;
      console.log("getb id",this.claims);
    });


    this.claimService.getbyidvehicle1(0).subscribe((data)=>{
      console.log(data);
      this.vehicleclaim=data;
      console.log("cm=",this.vehicleclaim);
     })
  }

}
