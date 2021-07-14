import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OhmPhService {

  conf: any
  
  constructor(
    private http: HttpClient
    ) { }
    
  public get config(){
    return this.conf;
  }

  load() {
    console.log('loading');
    this.http.get("/assets/conf.json").pipe(
      tap(conf => { this.setConf(conf) })
    ).subscribe();
  }

  public setConf(value: any): void{
    this.conf = value;
  }

}
