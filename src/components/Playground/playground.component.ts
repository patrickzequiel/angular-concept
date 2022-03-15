import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent {
  firstname = 'Patrick';
  lastname = 'Cruz';
  age = 65;
  error = '';
  active = false;
  items: People[] = [];

  @Input() name = 'Regina';

  changeValue = new EventEmitter<string>();
  loadPeople() {
    this.items = [
      {
        firstname: 'Patrick',
        lastname: 'Cruz',
      },
      {
        firstname: 'Patrick',
        lastname: 'Cruz',
      },
    ];
  }

  public get isSeniorAge(): boolean {
    return this.age > 60;
  }

  increaseAge() {
    this.age += 1;
  }

  decreaseAge() {
    this.age -= 1;
  }

  isActive() {
    this.loadPeople();
    this.active = !this.active;
  }

  myClasses = {
    error: this.age <= 0 || !this.firstname || !this.lastname,
  };
}

interface People {
  firstname: string;
  lastname: string;
}
