import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/service/data.service';
import { Global } from 'src/app/shared/service/global';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  addForm: FormGroup;

  filesToUpload;

  constructor(private _fb: FormBuilder, private _dataService: DataService) { }

  ngOnInit(): void {
    this.setAddForm();
  }

  setAddForm() {
    this.addForm = this._fb.group({
      caption: ['', Validators.compose([Validators.required])],
      upload: ['', Validators.compose([Validators.required])]
    })
  }

  onChange(event) {
    this.filesToUpload = event.target.files[0];
    console.log(this.filesToUpload);
  }

  onSubmit() {

    if (this.addForm.invalid) {
      alert('Please Fill Details');
      return false;
    }

    const formData = new FormData()
    formData.append('caption', this.addForm.get('caption').value);

    if (this.filesToUpload) {
      formData.append('upload', this.filesToUpload, this.filesToUpload.name)
    }

    this._dataService.post(Global.base_api_url + 'create.php', formData).subscribe(res => {
      console.log(res);
      alert('Data Upload Successfully');
    }, err => {
      alert('Data not upload');
    })
  }

}
