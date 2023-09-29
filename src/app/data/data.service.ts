import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 fetchData():string{
  return 'This data should be injected from data service.';
 }
}
