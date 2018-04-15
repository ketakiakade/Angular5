import { 
  Component, 
  OnInit, 
  Input, 
  SimpleChange, 
  OnChanges, 
  SimpleChanges, 
  ContentChild, 
  ElementRef, 
  AfterContentInit, 
  ViewChild, 
  AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
  OnInit,
  OnChanges,
  AfterContentInit, AfterViewInit {
  @ContentChild('paraContent') paraContent: ElementRef;
  @Input('servEle') element: {type: string, name: string, content: string}
  @Input('name') name: string;
  @ViewChild('header') header: ElementRef;
  
  constructor() {
    console.log('Constructor called!');
   }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChange called!');
    console.log(changes);
  }

  ngAfterContentInit (){
    console.log('paraContent: ' + this.paraContent.nativeElement.textContent);
  }

  ngAfterViewInit () {
    console.log('header: ' + this.header.nativeElement.textContent);
  }
}
