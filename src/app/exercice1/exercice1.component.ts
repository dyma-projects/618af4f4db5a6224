import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public result: number = 0;
  miseAjourCompteur(event: { value: number }) {
    console.log(event);
    this.result = event.value;
  }

  constructor() {}

  ngOnInit() {}
}
