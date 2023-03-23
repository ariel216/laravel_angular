import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  //variable es para saber la ruta del backend
  url:any;

  // constructor se inicia cuando se crea clase
  //gracias al httpclient yo puedo utilizar los metodo de http
  //get post put delete
  constructor(private http:HttpClient)
  { 
    //url le asigno la ruta del backend que esta en el environment
    this.url = environment.baseURL;
  }

  //metodo para consumir a traves del metodo get la lista de posts
  listarPosts()
  {
    return this.http.get(`${this.url}/productos`);

  }

}
