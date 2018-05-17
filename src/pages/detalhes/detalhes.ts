import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PessoasProvider } from '../../providers/pessoas/pessoas';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  public pessoa: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pessoasProvider: PessoasProvider) {
    this.pessoa = pessoasProvider.loadByEmail(navParams.get("email"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }

}
