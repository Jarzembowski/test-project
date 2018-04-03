import { Directive, HostListener, OnInit, ElementRef  } from '@angular/core';

@Directive({
  selector: '[appDropdownMenu]'
})
export class DropdownMenuDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event'])
    clickEvent(event) {
    this.el.nativeElement.classList.add('open');
  }

}
