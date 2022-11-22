import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { EquipeService } from '../services/equipe.service';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {
  newEquipe = new Equipe();
  categires!: Categorie[] 
  newid!:number;
  newcategorie!:Categorie;
  addequipe(){
    this.newcategorie=this.equipeservices.consulterCategorie(this.newid);
    this.newEquipe.categorie=this.newcategorie;
    this.equipeservices.ajouterequipe(this.newEquipe);
    this.router.navigate(['equipe']);
  }
  constructor(private equipeservices: EquipeService,
    private router :Router) { }

  ngOnInit(): void {
    this.categires=this.equipeservices.listerCategorie();

  }

}
