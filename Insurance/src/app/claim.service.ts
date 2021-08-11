import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Claim } from './claim';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private httpClient:HttpClient) { }

  baseurl:string="http://localhost:9898/insuranceRest/api/";

  getAllClaims()
  {
    return this.httpClient.get(this.baseurl+"/claim");
  }

  addClaim(claims:any)
  {
    return this.httpClient.post(this.baseurl+"/claim",claims);
  }

  getAllVehicleClaims(){
    return this.httpClient.get(this.baseurl+"/vehicleclaim");
  }

  AddVehicleClaim(vehicleclaim:any){
    return this.httpClient.post(this.baseurl+"/vehicleclaim",vehicleclaim);
  }
}
