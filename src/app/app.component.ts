import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
// localhost:4200/
//will always have, make sure html and css link match the file names
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//classes need constructor
export class AppComponent implements OnInit {
  public query: string;
  public queryString: string;
  public postList;
  title = 'WTT';

  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit() {

  }

  searchPosts() {
    console.log('bound!', this.query)
    // uses backtics ````
    this.queryString = `https://www.reddit.com/r/all/search.json?q=${this.query}&limit=5`
    console.log('queryString!', this.queryString)
    this.getPosts();
  }

  getPosts(): void {
    this.http.get<Post>(this.queryString)
      .subscribe(result => {
        this.postList = result.data.children;
        console.log('this.postList', this.postList);
        this.postList.forEach(post => {
          post.data.created = post.data.created * 1000;
        })
       });
  }
}


export class Post {
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
