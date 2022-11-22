import { EquipeService } from './../services/equipe.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
  equipe!:Equipe[];
  id! : number;
categories! : Categorie[];

  constructor(public  authService:AuthService,
   private equipeService:EquipeService) { }

  ngOnInit(): void {
    this.categories=this.equipeService.listerCategorie();
    this.equipe=this.equipeService.listeEquipe();
  }
  onChange()
  {
    this.equipe=this.equipeService.rechercherParlege(this.id);

  }
  supprimerequipe(e: Equipe)
  {
    let conf = confirm("Etes-vous sûr ?");
  if (conf)
  {
    this.equipeService.supprimerequipe(e);
    this.equipe=this.equipeService.rechercherParlege(this.id);
  }
  }

}
