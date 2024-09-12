import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HP Store - The Online Needs';

  property:any = {
    "Id":1,
    "name":"Books",
    "description":"Explore our diverse book collection, including fiction, non-fiction, academic, and reference materials. Available in print, e-books, and audiobooks, our selection caters to all ages and interests. From timeless classics to contemporary bestsellers, find your next great read here. Visit our store to discover more."
  }
}
