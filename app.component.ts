import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation : ViewEncapsulation.None
})
export class AppComponent {

ngOnInit(){
fname : string = 'Swati';
lname : string = 'Shankar';
}
getFname( fname, lanme ){
	console.log(fname);
	console.log(lname);
	}

}
