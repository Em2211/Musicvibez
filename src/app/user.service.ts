import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userLoginStatus=false;
  dataSource=new BehaviorSubject<any>(0)
    dataObservable=this.dataSource.asObservable();
     updateDataObservable(data){
       this.dataSource.next(data)
    }

  //inject http client object
  constructor(private hc:HttpClient) { 
    if(localStorage.getItem('username')!==null){
      this.userLoginStatus=true;
    }
  }

  loginUser(credentials):Observable<any>{
    return this.hc.post("/user/login",credentials)
  }
  createUser(userObj):Observable<any>{
    return this.hc.post("/user/createuser",userObj)
  }
  getUser(username):Observable<any>{
    return this.hc.get(`/user/getuser/${username}`)
  }
  deleteUser(){

  }
  updateUser(){

  }
  sendProductToUserCart(userProductObj):Observable<any>{
    return this.hc.post("/user/add-to-cart",userProductObj)
  }

  getProductsFromUserCart(username):Observable<any>{
    return this.hc.get(`/user/getproducts/${username}`)
  }
}
