import { Component, ElementRef, HostListener } from '@angular/core';
import {CommonModule} from "@angular/common";
import {LogOut, LucideAngularModule, Settings} from "lucide-angular";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  dropdownOpen = false;

  /* Icons lucide */
  readonly parametres = Settings;
  readonly logout = LogOut;

  constructor(private eRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    // Ferme le dropdown si on clique en dehors
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.dropdownOpen = false;
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  protected readonly Settings = Settings;
}
