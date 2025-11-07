import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  dark = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    const saved = localStorage.getItem('theme-dark');
    this.dark = saved === 'true';
    this.applyDarkClass(this.dark);
  }

  setDarkMode(value: boolean) {
    this.dark = value;
    localStorage.setItem('theme-dark', String(this.dark));
    this.applyDarkClass(this.dark);
  }

  toggleDarkMode() {
    this.setDarkMode(!this.dark);
  }

  private applyDarkClass(on: boolean) {
    const cls = 'dark-mode';
    const el = this.document.body || this.document.documentElement;
    if (on) {
      el.classList.add(cls);
    } else {
      el.classList.remove(cls);
    }
  }
}

