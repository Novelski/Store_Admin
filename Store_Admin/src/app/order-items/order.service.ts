import { Injectable } from '@angular/core';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
 private order: Order[] = [
    {
      id: '1',
title:'Detergent',
imageUrl:'https://m.media-amazon.com/images/I/81YakxRZLzL._SL1500_.jpg',
quantity:'120'
    },
    {
      id: '2',
title:'Soap',
imageUrl:'https://image.shutterstock.com/image-photo/kedah-malaysia-april-5-2020-260nw-1715023702.jpg',
quantity:'200'
    },
    {
      id: '3',
title:' Oil ',
imageUrl:'https://image.shutterstock.com/image-photo/kedah-malaysia-april-5-2020-260nw-1715023702.jpg',
quantity:'120'
    },
    {
      id: '4',
title:'Detergent',
imageUrl:'https://m.media-amazon.com/images/I/81YakxRZLzL._SL1500_.jpg',
quantity:'120'
    },
    {
      id: '5',
title:'Soap',
imageUrl:'https://image.shutterstock.com/image-photo/kedah-malaysia-april-5-2020-260nw-1715023702.jpg',
quantity:'200'
    },
    {
      id: '6',
title:' Oil ',
imageUrl:'https://image.shutterstock.com/image-photo/kedah-malaysia-april-5-2020-260nw-1715023702.jpg',
quantity:'120'
    },
    {
      id: '7',
title:'Detergent',
imageUrl:'https://m.media-amazon.com/images/I/81YakxRZLzL._SL1500_.jpg',
quantity:'120'
    },
    {
      id: '8',
title:'Soap',
imageUrl:'https://image.shutterstock.com/image-photo/kedah-malaysia-april-5-2020-260nw-1715023702.jpg',
quantity:'200'
    },
    {
      id: '9',
title:' Oil ',
imageUrl:'https://image.shutterstock.com/image-photo/kedah-malaysia-april-5-2020-260nw-1715023702.jpg',
quantity:'120'
    },

  ];
  constructor() { }

  getAllOrders(){
    return [...this.order]
  }

  getOrder(id:string){
    return {
      ...this.order.find(order=> {
      return order.id === id;
    })
  };
  }
}
