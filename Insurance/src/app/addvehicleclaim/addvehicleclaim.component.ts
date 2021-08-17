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
  vehiclepolicy:any;
  id1:number|undefined;
  constructor(private claimService:ClaimService) { 
    this.vehicleclaim=new Vehicleclaim;

    this.claimService.getHighestUserId1().subscribe(
      (data:any)=>{
        console.log(data); 
       // this.id=data.toString();
       this.id1=data+1;
        console.log(this.id1);
        this.vehicleclaim.claimid=this.id1;
        console.log("Inside method:"+this.vehicleclaim.claimid);
      });
  }

  ngOnInit(): void {
    this.claimService.getbyidvehicleinsurance(3).subscribe((data)=>{
      console.log(data);
      this.cm=data;
      console.log("cm=",this.cm);
     });

     this.claimService.getbyidvehicleinsurance(1).subscribe((data)=>{
      console.log(data);
      this.vehiclepolicy=data;
      console.log("vehiclepolicy",this.vehiclepolicy);
    });

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
