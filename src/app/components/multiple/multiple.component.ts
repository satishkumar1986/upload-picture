import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/service/data.service';
import { Global } from 'src/app/shared/service/global';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss']
})
export class MultipleComponent implements OnInit {

  addForm: FormGroup;

  filesToUpload = [];

  constructor(private _fb: FormBuilder, private _dataService: DataService) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.addForm = this._fb.group({
      caption: ['', Validators.compose([Validators.required])],
      upload: ['', Validators.compose([Validators.required])]
    })
  }

  onChange(event) {
    // for(let i in event.target.files.length){
    //   console.log('s');
    // }

    for (let i = 0; i < event.target.files.length; i++) {
      this.filesToUpload.push(event.target.files[i]);
    }

    //this.filesToUpload.push(event.target.files);
    //console.log(this.filesToUpload);
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('caption', this.addForm.get('caption').value);

    for (let i = 0; i < this.filesToUpload.length; i++) {
      formData.append('upload[]', this.filesToUpload[i]);
    }

    this._dataService.post(Global.base_api_url + 'multiple.php', formData).subscribe(res => {
      console.log(res)
      alert('Picture Upload Succefully');
    }, error => {
      alert('Picture Upload Failed');
    })
  }

}
