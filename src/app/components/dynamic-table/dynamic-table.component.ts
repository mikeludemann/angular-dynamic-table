import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None,
		selector: 'dynamic-table',
		templateUrl: './dynamic-table.component.html',
		styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@Input() id: string;

	@ViewChild('dt', {static: false}) el: ElementRef;

	constructor() { }

	ngOnInit() {
	}

	ngAfterViewInit(){

	}

}
