import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular-dynamic-table';

	datas = [
		{ id: 1, name: 'John Doe', age: 21, email: 'john.doe@email.com' }, 
		{ id: 2, name: 'Mary Doe', age: 19, email: 'mary.doe@email.com' }, 
		{ id: 3, name: 'Jim Doe', age: 16, email: 'jim.doe@email.com' }, 
		{ id: 4, name: 'Martha Doe', age: 25, email: 'martha.doe@email.com' }
  ];
  
  headline = Object.keys(this.datas[0]);
}
