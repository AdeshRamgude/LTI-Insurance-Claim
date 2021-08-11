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
  constructor(private claimService:ClaimService) { 
    this.claims=new Claim();
  }

  ngOnInit(): void {
    this.claimService.getAllClaims().subscribe((data)=>{
      console.log(data);
      this.cm=data;
      console.log("cm=",this.cm);
     })
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
