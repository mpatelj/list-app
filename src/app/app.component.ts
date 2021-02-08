import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fruits: { id: number; name: string; isChecked: boolean; }[];
 
  ngOnInit() {
    this.setData();
  }

  toggleFruitsValue(fruit) {
    fruit.isChecked = !fruit.isChecked;
  };

  setData() {
    this.fruits = [
      { id: 100, name: 'Orange', isChecked: false },
      { id: 101, name: 'Apple', isChecked: false },
      { id: 102, name: 'Banana', isChecked: false },
      { id: 103, name: 'Kiwi', isChecked: false },
      { id: 104, name: 'Pineapple', isChecked: false },
      { id: 105, name: 'Cantaloupe', isChecked: false },
      { id: 106, name: 'Avocado', isChecked: false }
    ];
  };
}
