import { Component, OnInit } from '@angular/core';
import { RolService } from "../../services/rol.service";
import { GlobalService } from "../../services/global.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UtilService } from "../../services/util.service";

declare var $: any;

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

  constructor(private service: RolService, private global: GlobalService,
    private util: UtilService, private router: Router,
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

  delete() {
    let user = this.rolselect
    this.service.delete(user)
      .subscribe((data: any) => {
        if (data.success == true) {
          this.util.showNotification('pe-7s-check', 'success', data.message);
          this.deleteOfArray();
        }
      }, (error) => {
        this.util.showNotification('pe-7s-info', 'error', 'Ha ocurrido un error al intentar borrar el usuario.');
      })
  }

  showConfirmDelete(rol) {
    $('#modalConfirmDelete').modal();
    this.rolselect = rol;
  }

  deleteOfArray() {
    let myArray = this.rols;
    let id = this.rolselect._id;
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i]._id === id) {
        myArray.splice(i, 1);
        break
      }
    }
  }
}
