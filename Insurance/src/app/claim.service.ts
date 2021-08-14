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

  getAllStatus()
  {
    return this.httpClient.get(this.baseurl+"/admin");
  } 

  addStatus(stat:any)
  {
    return this.httpClient.post(this.baseurl+"/admin",stat);
  }

  getAllVehicleClaims(){
    return this.httpClient.get(this.baseurl+"/vehicleclaim");
  }

  AddVehicleClaim(vehicleclaim:any){
    return this.httpClient.post(this.baseurl+"/vehicleclaim",vehicleclaim);
  }
 
  getbyid(id:any){
    return this.httpClient.get(this.baseurl+"/admin/"+id);
  }

  getbyidvehicle(id:any){
    return this.httpClient.get(this.baseurl+"/admin/vehicleclaim/"+id);
  }
  addVehicleStatus(statv:any)
  {
    return this.httpClient.put(this.baseurl+"/admin",statv);
  }
  addVehicleStatus1(statv:any)
  {
    return this.httpClient.put(this.baseurl+"/admin/vehicleclaim",statv);
  }

  getbyuserid(id:any){
    return this.httpClient.get("http://localhost:9898/insuranceRest/api/claim/traveluser/"+id);
  }

  getbyidtraveluser(id:any){
    return this.httpClient.get(this.baseurl+"/claim/traveluser/"+id);
  }
}
