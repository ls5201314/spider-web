import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collect-list',
  templateUrl: './collector-list.component.html',
  styleUrls: ['./collector-list.component.css']
})
export class CollectListComponent implements OnInit {
  _allChecked = false;
  _indeterminate = false;
  _displayData = [];
  data = [ {
    name   : 'John Brown',
    url    : 32,
    status: 'New York No. 1 Lake Park',
    lastTime: '2018/2/23 18:05:00',
  }, {
    name    : 'Jim Green',
    url   : 42,
    status    : 'London No. 1 Lake Park',
    lastTime: '2018/2/23 18:55:00',
  }, {
    name   : 'Joe Black',
    url    : 32,
    status: 'Sidney No. 1 Lake Park',
    lastTime: '2018/2/23 19:05:00',
  } ];

  constructor() { }

  _displayDataChange($event) {
    this._displayData = $event;
    this._refreshStatus();
  }

  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);
    const allUnChecked = this._displayData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
  }

  _checkAll(value) {
    if (value) {
      this._displayData.forEach(data => {
        data.checked = true;
      });
    } else {
      this._displayData.forEach(data => {
        data.checked = false;
      });
    }
    this._refreshStatus();
  }
  ngOnInit() {
  }

}
