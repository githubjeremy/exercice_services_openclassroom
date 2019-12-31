import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  constructor() { }

  private appareils = [
    {
      id: 1,
      name: 'Machine 1',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Machine 2',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Machine 3',
      status: 'éteint'
    },
  ];

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
  }

  switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
  }
}
