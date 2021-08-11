import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../claim.service';
import { Vehicleclaim } from '../vehicleclaim';

@Component({
  selector: 'app-addvehicleclaim',
  templateUrl: './addvehicleclaim.component.html',
  styleUrls: ['./addvehicleclaim.component.css']
})
export class AddvehicleclaimComponent implements OnInit {

  cm:any;
  vehicleclaim:Vehicleclaim;
  constructor(private claimService:ClaimService) { 
    this.vehicleclaim=new Vehicleclaim;
  }

  ngOnInit(): void {
    this.claimService.getAllVehicleClaims().subscribe((data)=>{
      console.log(data);
      this.cm=data;
      console.log("cm=",this.cm);
     })
  }

  saveVehicleData(){ 
    console.log("in save",this.vehicleclaim);
    this.claimService.AddVehicleClaim(this.vehicleclaim).subscribe(
    (data)=>{
      console.log("Return Value from REST"+data); 
    })
  alert("data saved");
}

}
