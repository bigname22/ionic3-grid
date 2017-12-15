import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  gridList= [
    {
      name: '皇上',
      color: 'red'
    },
    {
      name: '臣妾',
      color: 'yellow'
    },
    {
      name: '贵妃',
      color: 'green'
    },
    {
      name: '娘娘',
      color: 'orange'
    },
    {
      name: '公主',
      color: 'blue'
    },
    {
      name: '奴婢',
      color: 'greenyellow'
    },
    {
      name: '皇后',
      color: 'black'
    },
    {
      name: '太皇后',
      color: 'pink'
    },
    {
      name: '格格',
      color: 'grey'
    },
    {
      name: '太妃',
      color: 'red'
    },
    {
      name: '侍女',
      color: 'green'
    },
    {
      name: '东房',
      color: 'red'
    },
    {
      name: '淑妃',
      color: 'yellow'
    },
    {
      name: '德妃',
      color: 'grey'
    },
    {
      name: '皇上',
      color: 'red'
    },
    {
      name: '臣妾',
      color: 'yellow'
    },
    {
      name: '贵妃',
      color: 'green'
    },
    {
      name: '娘娘',
      color: 'orange'
    },
    {
      name: '公主',
      color: 'blue'
    },
    {
      name: '奴婢',
      color: 'greenyellow'
    },
    {
      name: '皇后',
      color: 'black'
    },
    {
      name: '太皇后',
      color: 'pink'
    },
    {
      name: '格格',
      color: 'grey'
    },
    {
      name: '太妃',
      color: 'red'
    },
    {
      name: '侍女',
      color: 'green'
    },
    {
      name: '东房',
      color: 'red'
    },
    {
      name: '淑妃',
      color: 'yellow'
    },
    {
      name: '德妃',
      color: 'grey'
    }
    ]

  constructor(public navCtrl: NavController) {

  }

  /*
   * size : 一行分为size列
   * 原理  : 假设size=2，则【1,2,3,4,5,6,7,8,9】=>【1，2】,【3，4】,【5，6】，【7，8】，【9】
   * */
  getRowListByGridList(size) {
    console.log('网格集合', this.gridList)
    var rowList = []
    for (var i = 0; i < this.gridList.length; i += size) {
      rowList.push(this.gridList.slice(i, i + size));
    }
    return rowList
  }

}
