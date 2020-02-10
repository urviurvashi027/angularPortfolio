import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public fruitList = ['Lemons','Raspberries','Strawberries','Blackberries','Kiwis','Grapefruit','Avocado','Watermelon','Cantaloupe','Oranges',
                'Peaches'];

  public contactList = [{
    name: 'Jon Snow',
    designation:'King',
    pic: '',
  },
  {
    name: 'Jaime Lannister',
    designation:'Actor',
    pic: '',
  },
  {
    name: 'Bran Stark',
    designation:'Doctor',
    pic: '',
  },
  {
    name: 'Darwin',
    designation: 'Doctor',
    pic: '',
  },
  {
    name: 'Rogue',
    designation:'Teacher',
    pic: '',
  },
  {
    name: 'Cecilia Reyes',
    designation:'CTO',
    pic: '',
  },
  {
    name: 'Colossus',
    designation:'Accoutant',
    pic: '',
  },
  {
    name: 'Forge',
    designation:'CEO',
    pic: '',
  }];
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
  constructor() {
    this.getInaitils();
   }

  ngOnInit() {
  }

  getInaitils(){
    for(var i = 0; i< this.contactList.length;i++){
      var nameArr = this.contactList[i].name.split(" ");
      if(nameArr.length < 2){
        this.contactList[i]['initials'] = nameArr[0].charAt(0);
        console.log(this.contactList[i]);
      }
      else{
        this.contactList[i]['initials'] = nameArr[0].charAt(0) +  nameArr[1].charAt(0)
        console.log(nameArr,"2");
        console.log(this.contactList[i]);
      }
    }
  }
}
