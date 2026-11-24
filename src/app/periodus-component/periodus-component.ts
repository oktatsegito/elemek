import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-periodus-component',
  styleUrl: './periodus-component.css',
  templateUrl: './periodus-component.html',
})
export class PeriodusComponent {
  kemiaiElemek = signal<any[]>([
    { nev: 'Hidrogén', vegyjel: 'H', rendszam: 1, atomtomeg: 1.008, allapot: 'Gáz' },
    { nev: 'Hélium', vegyjel: 'He', rendszam: 2, atomtomeg: 4.003, allapot: 'Gáz' },
    { nev: 'Lítium', vegyjel: 'Li', rendszam: 3, atomtomeg: 6.94, allapot: 'Szilárd' },
    { nev: 'Szén', vegyjel: 'C', rendszam: 6, atomtomeg: 12.011, allapot: 'Szilárd' },
    { nev: 'Nitrogén', vegyjel: 'N', rendszam: 7, atomtomeg: 14.007, allapot: 'Gáz' },
    { nev: 'Oxigén', vegyjel: 'O', rendszam: 8, atomtomeg: 15.999, allapot: 'Gáz' },
    { nev: 'Fluor', vegyjel: 'F', rendszam: 9, atomtomeg: 18.998, allapot: 'Gáz' },
    { nev: 'Neon', vegyjel: 'Ne', rendszam: 10, atomtomeg: 20.180, allapot: 'Gáz' }
  ]);

  gazAllapotuElemek = computed(() => {
    return this.kemiaiElemek().filter(elem => elem.allapot === 'Gáz');
  });
}
