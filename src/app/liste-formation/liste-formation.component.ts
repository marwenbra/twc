import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/formation' 
import { Sessions } from '../model/sessions';
import { Utulisateur } from '../model/utulisateur';
//import localstorage 
///importer model utilisateur

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.css']
})
export class ListeFormationComponent implements OnInit {

  listeformation: Formation[];
  choix :string;

  constructor(/*private injection de service local storage*/) {  } 
  
  ngOnInit(): void {


    //appel au donné user en utilisant localStorage

    
    var us = {
    
       Nom : "Brahem",
       Prenom : "marwen",
       Cin : 25065,
       Telephone :  25469874,
       Email : "brahem.marwen@gmail.com",
       Datenaissance : new Date ("1920-08-14"),
       Date_fin : new Date("2020-10-4"),
       idformation : [58,10,23]

    };

    var us_json = JSON.stringify(us);
    sessionStorage.setItem("utulisateur",us_json);


    var us_json = sessionStorage.getItem("utulisateur");
    var uss = JSON.parse(us_json);
  

    
 
    console.log(this.choix);

    this.listeformation = [

      { Id: 1, Description : 'Formation en angular', Theme : 'développement web', Prix :880, Session:[{id:1,Date_debut:new Date("2022-10-4"),Date_fin:new Date("2020-10-4")}]},
      { Id: 2, Description : 'Formation en management', Theme : 'gestion de projet', Prix : 480,Session:[{id:2,Date_debut:new Date("2022-10-4"),Date_fin:new Date("2021-10-4")}]},
      { Id: 3, Description : 'Formation en business intelligence', Theme : 'Devops', Prix : 980,Session:[{id:3,Date_debut:new Date("2021-10-4"),Date_fin:new Date("2020-10-4")}]},
      { Id: 4, Description : 'Formation en android', Theme : 'développement mobile', Prix : 280,Session:[{id:4,Date_debut:new Date("2022-10-4"),Date_fin:new Date("2022-10-4")}]}
      ];
  }

chekidformation(format: Formation){

  // format.id is existe us.idformlation //si existe)
      return false;

  //else return true;

}
 

}

