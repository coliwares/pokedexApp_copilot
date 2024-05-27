import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorComponentComponent } from './buscador-component.component';
import { of } from 'rxjs/internal/observable/of';
import { FormsModule } from '@angular/forms';

describe('BuscadorComponentComponent', () => {
  let component: BuscadorComponentComponent;
  let fixture: ComponentFixture<BuscadorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorComponentComponent,
        FormsModule
      ]
  
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscadorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search for a Pokemon', () => {
    const pokemonName = 'pikachu';
    const mockPokemon = { name: 'Pikachu', type: 'Electric' };

    spyOn(component, 'searchPokemon').and.callThrough();
    spyOn(component, 'getPokemon').and.returnValue(of(mockPokemon));

    component.search = pokemonName;
    component.searchPokemon();

    expect(component.getPokemon).toHaveBeenCalledWith(pokemonName);
    expect(component.pokemon).toEqual(mockPokemon);
  });

  //geneta un test que comprueba que se muestra la imagen del pokemon
  //segun este trozo de codigo 
  /** 
        <div *ngIf="pokemon">
        <h2>{{ pokemon.name }}</h2>
        <img [src]="pokemon.sprites.front_default" alt="{{ pokemon.name }}">
    </div>
  */
  it('should show the Pokemon image', () => {
    const pokemonName = 'pikachu';
    const mockPokemon = { name: 'Pikachu', type: 'Electric', sprites: { front_default: 'image.png' } };

    spyOn(component, 'searchPokemon').and.callThrough();
    spyOn(component, 'getPokemon').and.returnValue(of(mockPokemon));

    component.search = pokemonName;
    component.searchPokemon();
    fixture.detectChanges();

    const imgElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.src).toContain(mockPokemon.sprites.front_default);
    expect(imgElement.alt).toEqual(mockPokemon.name);
  });


});
