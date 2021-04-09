import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from '../model/formation'
import { Sessions } from '../model/sessions';
import { Utulisateur } from '../model/utulisateur';



@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  us : Utulisateur[];
  forma : Formation;
  nom:string;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
     this.forma.Session.Date_debut = params['Date_debut'];
     this.forma.Session.Date_fin = params['Date_fin'];
    
       }
  
  ngOnInit(): void {

     //  this.Date_debut = this.route.snapshot.paramMap.get('Date_debut');
     //  this.Date_fin = this.route.snapshot.paramMap.get('Date_fin');

    // recupération de la valeur de formation passé par paramétre passe par lien /route et snapshot
    //extraction de la date debut et fin de la session
    // tableau inscription
    // ajouter l'id de la nouvelle  formation dans la table us , attribut table "idformation"

    this.us = [
    {Nom :'Brahem', Prenom :'marwen', Telephone : 25469874, Cin : 25065, 
    Email : 'brahem.marwen@gmail.com', Datenaissance:new Date ("1920-08-14"), 
    Diplome :'ingenieur', motpasse:'rghjnj25',
     idformation:[58,10,23]}]
     this.nom = this.us[0].Nom
     
    }

    
}
