import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Claim } from './claim';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private httpClient:HttpClient) { }

  baseurl:string="http://localhost:9898/insuranceRest/api/";

  getAllClaim()
  {
    return this.httpClient.get(this.baseurl+"/claim");
  }

  addClaim(res:any)
  {
    return this.httpClient.post(this.baseurl+"/claim",res);
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

  getbyidvehicle1(id:any){
    return this.httpClient.get(this.baseurl+"/claim/vehicleclaim/"+id);
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
    return this.httpClient.get(this.baseurl+"/claim/"+id);
  }

  getbyidtraveluser(id:any){
    return this.httpClient.get(this.baseurl+"/claim/traveluser/"+id);
  }

  getbyidvehicleinsurance(id:any){
    return this.httpClient.get(this.baseurl+"vehicleinsurance/"+id);
  }

  getHighestUserId()
   {
    return this.httpClient.get(this.baseurl+"/highestid");
   }

   getHighestUserId1()
   {
    return this.httpClient.get(this.baseurl+"/highestid1");
   }
}
