import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MethodsService } from 'src/app/services/methods.service';
import { dateContact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css'],
  providers: [MethodsService]
})
export class FormEditComponent implements OnInit {

  public date_contact!: dateContact;
  public success:boolean;
  public id:any;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _route: Router,
    private _methodService:MethodsService
  ) {
    this.success = false;
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(params => {
      let { id, name, cell } = params;
      this.id = id;
      this.date_contact = new dateContact(name, cell);
      
      if(this.success){        
        this.editContact(this.id);
      }
    });

  }
  editContact(e: any) {
    this.success = true;

    if(this.success){
      this._methodService.editContact(this.id,this.date_contact).subscribe(
      result =>{
        this._route.navigate(['/home']);
      },err =>{
        console.log(err);
      }
    )
    }
  }
}
