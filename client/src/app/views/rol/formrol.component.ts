import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { GlobalService } from "../../services/global.service";
import { RolModel } from "../../models/rol";
import { RolService } from "../../services/rol.service";
import { LoginService } from "../../services/login.service";
import { UtilService } from "../../services/util.service";

@Component({
  selector: 'app-formrol',
  templateUrl: './formrol.component.html',
  styleUrls: ['./formrol.component.css']
})
export class FormrolComponent implements OnInit {
  edit: boolean = false;
  title: string = 'Nuevo Rol';
  showLoading: boolean = false;
  forma: FormGroup;
  public token: string;
  public rol: RolModel = new class implements RolModel {
    name: string;
    description: string;
    active: boolean = true;
  };

  constructor(private activateRoute: ActivatedRoute,
    private global: GlobalService,
    private router: Router,
    private rolService: RolService,
    private loginService: LoginService,
    private util: UtilService) {
    this.token = this.loginService.getToken();
    this.activateRoute.params.subscribe(params => {
      this.global.edit = false;
      this.title = 'Nuevo Rol';
      this.resetFields();
      if (params['id']) {
        this.global.edit = true;
        this.title = 'Editar Rol';
        let id = params['id'];
        this.getOne(id);
      }
      this.edit = this.global.edit;
    })
    this.forma = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      description: new FormControl(''),
      active: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  getOne(id) {
    this.rolService.getOne(id)
      .subscribe(data => {
        this.rol = data;
      })
  }

  insert(cerrar) {
    if (this.edit === true) {
      this.update();
      return;
    }
    this.showLoading = true;
    this.rolService.register(this.rol)
      .subscribe((data: any) => {
        this.showLoading = false;
        if (data.success === true) {
          this.util.showNotification('pe-7s-check', 'success', data.message);
          this.resetFields();
          if (cerrar)
            this.router.navigate(["rol/rols"]);
        } else {
          this.util.showNotification('pe-7s-info', 'danger', data.message);
        }
      })
  }

  update() {
    this.showLoading = true;
    this.rolService.update(this.rol)
      .subscribe((data: any) => {
        this.showLoading = false;
        if (data.success === true) {
          this.router.navigate(["rol/rols"]);
          this.util.showNotification('pe-7s-check', 'success', data.message);
        } else {
          this.util.showNotification('pe-7s-info', 'danger', data.message);
        }
      })
  }


  cancel() {
    this.router.navigate(["rol/rols"]);
  }

  resetFields() {
    this.rol.name = '';
    this.rol.description = '';
  }

}
