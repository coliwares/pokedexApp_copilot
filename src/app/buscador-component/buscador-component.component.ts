import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscador-component',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './buscador-component.component.html',
  styleUrl: './buscador-component.component.css'
})

export class BuscadorComponentComponent {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  pokemon: any;
  search: string = ''; // Initialize the 'search' property

  constructor(private http: HttpClient) { }

  getPokemon(idOrName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${idOrName}`);
  }

  searchPokemon() {
    this.getPokemon(this.search).subscribe(data => {
      this.pokemon = data;
    });
  }
}