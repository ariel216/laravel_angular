import { Component, OnInit } from '@angular/core';
import { PostService } from '../core/servicios/post.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {

 
  posts:any;

  constructor(public postService:PostService) {
    
  }
  ngOnInit(): void {
    this.listarPosts();
  }

  listarPosts()
  {
    this.postService.listarPosts().subscribe(data=>{

      this.posts = data;

    })

  }


}
