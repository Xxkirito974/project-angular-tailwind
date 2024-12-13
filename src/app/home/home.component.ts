import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dataList = [
    {
      id: 1,
      title: 'Produit 1',
      description: 'Une brève description du produit ou du service 1.',
      imageUrl: 'https://www.lascom.com/wp-content/uploads/2021/03/Bland_Cosmetic_Product_Packaging_Unit_500x400.jpg',
    },
    {
      id: 2,
      title: 'Produit 2',
      description: 'Une brève description du produit ou du service 2.',
      imageUrl: 'https://d2aabgjce9enf.cloudfront.net/main/media/content/5/d/5d85c6fc71a6f180e10da000287864e185249b21--md-noborder.webp',
    },
    {
      id: 3,
      title: 'Produit 3',
      description: 'Une brève description du produit ou du service 3.',
      imageUrl: 'https://www.bcparis.com/img/c/52.jpg',
    },
    {
      id: 4,
      title: 'Produit 4',
      description: 'Une brève description du produit ou du service 4.',
      imageUrl: 'https://assets.ricaud.com/v7/medias/api/airtable/fiches/c230_2.jpg?w=381&h=381&org_if_sml=1',
    },
  ];
}
