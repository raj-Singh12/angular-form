import { Directive, ElementRef, HostListener, Component } from '@angular/core';

@Directive({
  selector: "img[appHideMissing]",
})

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

export class AppComponent {
  title = 'angularForm';
  constructor(private el: ElementRef) {}

  @HostListener("error")
  private onError() {
    this.el.nativeElement.style.display = "none";
  }
}
