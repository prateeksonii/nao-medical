import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit {
  showHeader: boolean;
  initialScrollHeight: number;

  @ViewChild('header') header: ElementRef;

  constructor() {
    this.showHeader = true;
  }

  ngAfterViewInit(): void {
    this.initialScrollHeight = this.header.nativeElement.scrollHeight;
  }

  onScroll(event: Event) {
    const { deltaY } = event as WheelEvent;
    if (deltaY > 0) this.showHeader = false;
    else this.showHeader = true;
  }
}
