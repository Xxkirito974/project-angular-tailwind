import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css',
})
export class EditorComponent {
  data = { id: 1, name: 'Nom existant', description: 'Description existante' };

  onSubmit(updatedData: any) {
    console.log('Données mises à jour :', updatedData);
    // Ajoute ici la logique pour enregistrer les modifications

}
}
