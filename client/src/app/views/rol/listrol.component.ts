import { Component, OnInit } from '@angular/core';
import { RolService } from "../../services/rol.service";
//import { GlobalService } from "../../services/global.service";
import { ActivatedRoute, Router } from "@angular/router";
//import { UtilService } from "../../services/util.service";

@Component({
  selector: 'app-listrol',
  templateUrl: './listrol.component.html',
  styleUrls: ['./listrol.component.css']
})
export class ListrolComponent implements OnInit {

  public messagedelete: string = "Esta seguro que desea eliminar el rol seleccionado?"
  public rols: any = [];
  public rolselect: any = [];
  public url: string;

  constructor(private service: RolService, /*private global: GlobalService,*/
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
 
  }

  ngOnInit(): void {
    this.getAll(true);
  }

  getAll(active) {
    this.service.getAll(active)
      .subscribe(data => {
        this.rols = data;
      })
  }

}
