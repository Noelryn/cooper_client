import { PersonProvider } from '../../providers/person/person';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ResultsPage } from '../results/results';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any = {};

  constructor(
    public navCtrl: NavController,
    public person: PersonProvider,
    public modalCtrl: ModalController,
    ) {
    this.user = { distance: 1000, age: 20, gender: 'female' };
    }

  calculate() {
    this.person.age = this.user.age;
    this.person.gender = this.user.gender;
    this.person.doAssessment(this.user.distance);
  }
  showResults() {
    this.modalCtrl.create(ResultsPage).present();
  }
}
