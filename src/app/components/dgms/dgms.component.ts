import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, NgIterable } from '@angular/core'; 
import { DataService } from 'src/app/service/data.service'; 
import { PostResponse } from 'src/app/model/post-response';
import { PostRequest } from 'src/app/model/post-request';
@Component({
  selector: 'app-dgms',
  templateUrl: './dgms.component.html',
  styleUrls: ['./dgms.component.css']
})
export class DgmsComponent implements OnInit {
 
  dgms : PostResponse[] = []; 
  private addInfo ?: PostRequest;
  submitted : boolean = false;
  constructor(private dataService: DataService, public fb : FormBuilder) { }

  ngOnInit(): void {
    this.getDgmData();
 
  }

  addForm = this.fb.group({
    titre : [],
    contenu: []
  })

  getDgmData() {
    this.dataService.getData().subscribe(res => {
      this.dgms = res.data;
    })
  } 
  selectionnerLigne(ligneId: any) {
    alert("Id est  :" + ligneId);
  }
  supprimer(ligneId:any){
    alert(ligneId);
    
  }



  ajoutData(){ 
    this.submitted=true;
    this.addInfo = new PostRequest()
    this.addInfo.titre =this.addForm.get('titre')?.value;
    this.addInfo.contenu =this.addForm.get('contenu')?.value;

     
    console.log(this.addInfo);

    this.dataService.addData(this.addInfo).subscribe(data => {
      this.getDgmData();
      this.submitted=false;
      this.addForm.reset({})
    })
  }

  
}
