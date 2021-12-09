import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  public Compteur: number = 0;

  @Output() changementCompteur = new EventEmitter();

  public add() {
    this.Compteur++;
    this.changementCompteur.emit({ value: this.Compteur });
  }
  public remove() {
    this.Compteur--;
    this.changementCompteur.emit({ value: this.Compteur });
  }

  constructor() {}

  ngOnInit() {}
}
