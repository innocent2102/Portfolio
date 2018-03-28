import { Component, ViewChild, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('menuBtn') menuBtn;

    ngOnInit() {
        $('a[href^="#"]').on('click', function(event) {
            const target = $( $(this).attr('href'));
            if ( target.length ) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        });
    }

    closeMobileMenu() {
        this.menuBtn.nativeElement.checked = false;
      }
 }


