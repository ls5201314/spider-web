import { Component, OnInit } from '@angular/core';
import {CollectorService} from '../collector.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-collect-detail',
  templateUrl: './collector-detail.component.html',
  styleUrls: ['../../style/index.less']

})
export class CollectDetailComponent implements OnInit {
  loading = false;
  assortments = [
    { id: 1,
      name: '新闻'
    },
    { id: 2,
      name: '论坛'
    },
    { id: 3,
      name: '专家'
    }
  ];

  plugs = [
    { id: 1,
      name: '插件1'
    },
    { id: 2,
      name: '插件2'
    },
    { id: 3,
      name: '插件3'
    }
  ];
  settingInfo = {
    name: '',
    url: '',
    assortment: '',
    domain: '',
    userAgent: '',
    saveDir: '',
    cookie: '',
    referer: '',
    sleepTime: '',
    thread: '',
    depth: '',
    plug: '',
    download: '',
    duplicateRemoval: '',
    agent: '',
    ip: '',
    port: '',
    rule: '',
    startupMode: '',
    listUrlRegex: '',
    contentUrlRegex: '',
    titleXPath: '',
    contentXPath: '',
    dateXPath: '',
    dateRegex: '',
    abstractXPath: '',
    pagination: '',
    startPage: '',
    endPage: '',
    titleFiltering: '',
    webTitle: '',
    linkTitle: '',
    num: '',
    image: ''

};

  submitForm() {
    console.log(this.settingInfo);
    this.collectorService.add().subscribe(data => {
      this.message.create('success', '操作成功');
    }, err => {
      this.message.create('error', '操作失败');
    });
  }
  constructor(private collectorService: CollectorService,
              private message: NzMessageService) { }

  ngOnInit() {
  }
}
