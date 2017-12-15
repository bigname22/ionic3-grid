# ionic3-grid
ionic3如何使用ion-grid,如何实现两列多行...

# ionic3 grid网格基础使用

# [csdn地址](http://blog.csdn.net/bigname22/article/details/78812986)

解除ionci不久，需要开发一个页面，两列多行。大哥，这要是android，闭着眼睛都能写出来，脑子废了都没问题的事。可偏偏，这要用ionic来实现。

所以只能走正常流程了《百度》，结果全是写死的一个个`<ion-col>`，我需要的效果是，根据返回的数据集合，动态的生成。我当时也是脑子抽了一下，一直以为，ion-grid或者ion-row等等能够直接设置列数之类的，然后把我的集合给她就好了的设置，但不太如意。

百度的结果也很不满意，要重新怀疑一下国内ionic的活跃程度

最后还是github上找案例吧。终于解决了这个问题。(小白来的，要体谅)

```
<ion-grid>
    <ion-row *ngFor="let rowList of getRowListByGridList(2)">
      <ion-col *ngFor="let colItem of rowList">
        {{colItem.name}}
      </ion-col>
    </ion-row>
```
当初怎么都没忘这个方向想，哈哈。思路就是：遍历行，然后遍历列，将数据集合拆分为多个集合。例如：【1，2，3，4，5，6】，分为两列，【1，2】，【3，4】，【5，6】。

```
/*
 * size : 一行分为size列
 * 原理  : 假设size=2，则【1,2,3,4,5,6,7,8,9】=>【1，2】,【3,4】,【5，6】，【7，8】，【9】
 * */
  getRowListByGridList(size) {
    var rowList = []
    for (var i = 0; i < this.gridList.length; i += size) {
      rowList.push(this.gridList.slice(i, i + size));
    }
    return rowList
  }
```
集合拆分的逻辑也非常简单。最后附上效果图：
![这里写图片描述](http://img.blog.csdn.net/20171215144018220?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmlnbmFtZTIy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
