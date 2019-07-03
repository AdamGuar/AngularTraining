import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  create(key,object){
    localStorage.setItem(key,JSON.stringify(object));
  }

  read(key){
    const item = localStorage.getItem(key);
    try{
      return JSON.parse(item);
    }catch{
      return item;
    }
  }

  delete(key){
    localStorage.removeItem(key);
  }

  update(key,object){
    this.create(key,object);
  }

  clear(){
    localStorage.clear();
  }

}
