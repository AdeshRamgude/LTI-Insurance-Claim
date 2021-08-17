import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-addclaim',
  templateUrl: './addclaim.component.html',
  styleUrls: ['./addclaim.component.css']
})
export class AddclaimComponent implements OnInit {
  policyno:any;
  claims:Claim;
  cm:any;
  traveluser:any;
  id1:number|undefined;
  constructor(private claimService:ClaimService) { 
    this.claims=new Claim();

    this.claimService.getHighestUserId().subscribe(
      (data:any)=>{
        console.log(data); 
       // this.id=data.toString();
       this.id1=data+1;
        console.log(this.id1);
        this.claims.claimid=this.id1;
        console.log("Inside method:"+this.claims.claimid);
      });
  }

  ngOnInit(): void {
    this.claimService.getbyuserid(0).subscribe((data)=>{
      console.log(data);
      this.cm=data;
      console.log("cms=",this.cm);
     });

     this.claimService.getbyidtraveluser(3).subscribe((data)=>{
      console.log(data);
      this.traveluser=data;
      console.log("traveluser",this.traveluser);
    });
  }

  saveData()
  {
    console.log("in save",this.claims);
    this.claimService.addClaim(this.claims).subscribe(
      (data)=>{
        console.log("Return Value from REST"+data); 
      }
    )
    alert("data saved");
  }

}

