import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  pais : any;

  constructor(public paisesServices:PaisesService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.paisesServices.getPaisPorId(id).then( pais => {

        if (!pais){        //.params
          return this.router.navigateByUrl('/')
        }

        this.pais = pais;
    })
  }

}
