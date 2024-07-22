import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title='Challenger-2';
  items = [
    {
      name: 'Aditya Singh ',
      description: 'Dude He is batman.He is Multi Billionare and saves the city at night.Doesnt Smiles often ',
      imageUrl: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
      role: 'Team Lead'
    },
    {
      name: 'Foram Raval',
      description: 'Leading Finance Expert.Manages Stocks.Beautiful',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzeqnyJukVW_2Ym9KVWtqBy4mHLULwxdnYkYuItraE9OzLhTRrPm22dFCR4tzMEf4JaWc&usqp=CAU',
      role: 'Finance'
    },
    {
      name: 'Margi Raval',
      description: 'Enhance User Experience.Create Anmazing Design.Nautanki',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIog2RhUsv73J8v0FdKKmx3CnuQNp_npONDO8oUKp-jfq9icTplEIwtwmxegnuVZe9Jc&usqp=CAU',
      role: 'UX/UI Designer'
    },
    {
      name: 'Vishal Rajput',
      description: 'Enhance functionality with AI.Integration Expert',
      imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp',
      role: 'AI Expert'
    }
    // {
    //   name: 'Amit Master',
    //   description: 'Test Validation',
    //   imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIog2RhUsv73J8v0FdKKmx3CnuQNp_npONDO8oUKp-jfq9icTplEIwtwmxegnuVZe9Jc&usqp=CAU',
    //   role: 'None Role'
    // },
    // ... other items with updated data
  ];
  
}

