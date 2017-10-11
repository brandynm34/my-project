import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public postList;
  title = 'WTT';

constructor(
    private http: HttpClient,
  ) {}
  ngOnInit() {
    this.http.get<Post>('https://www.reddit.com/r/php/search.json?q=cats&limit=5')
      .subscribe(result => {
        this.postList = result;
        console.log('this.postList', this.postList);

      })
  }
}


export class Post {
 kind: string;
 data: PostData;
}

export class PostData {
 children: PostChildren[];
}

export class PostChildren {
 data: PostChildrenData;
}

export class PostChildrenData {

}
