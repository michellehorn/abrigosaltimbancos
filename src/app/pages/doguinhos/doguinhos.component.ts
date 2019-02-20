import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animais } from '../../core/models/animais';
@Component({
  selector: 'app-doguinhos',
  templateUrl: './doguinhos.component.html',
  styleUrls: ['./doguinhos.component.scss']
})
export class DoguinhosComponent implements OnInit {

  constructor(private http: HttpClient) { }

  listaDoguinhos = [
    {
      id: 0,
      nome: "Shenna",
      porte: "Grande",
      sexo: "Fêmea",
      idade: "Adulta",
      idade_aprox: "4 anos",
      data_resgate: "(?)",
      castrado: "Sim",
      vacinado: "Sim",
      vermifugado: "Sim",
      personalidade: "Tranquila, brincalhona, forte, sociável com adultos e crianças, depende do animal ela é sociável, é preciso verificar adaptação com o temperamento do outro animal.",
      imagem: "shenna.jpg"
    },
    {
      id: 1,
      nome: "Sheik",
      porte: "",
      sexo: "Macho",
      idade: "Adulto",
      idade_aprox: "5 anos",
      data_resgate: "(?)",
      castrado: "Sim",
      vacinado: "Sim",
      vermifugado: "Sim",
      personalidade: "Tranquilo, brincalhão, calmo, forte, sociável com adultos e crianças, sociável com outros animais.",
      imagem: "sheik.jpg"
    },
    {
      id: 2,
      nome: "Luna",
      porte: "Medio",
      sexo: "Fêmea",
      idade: "Adulta",
      idade_aprox: "4 anos",
      data_resgate: "Abril/2018",
      castrado: "Sim",
      vacinado: "Sim",
      vermifugado: "Sim",
      personalidade: "Tranquila, Fujona, calmo, forte, sociável com adultos e crianças, depende do animal ela é sociável, é preciso verificar adaptação com o temperamento do outro animal.",
      imagem: "luna.jpg"

    },
    {
      id: 3,
      nome: "Julie",
      porte: "Medio",
      sexo: "Fêmea",
      idade: "Jovem",
      idade_aprox: "1 ano",
      data_resgate: "(?)",
      castrado: "Sim",
      vacinado: "Sim",
      vermifugado: "Sim",
      personalidade: "Super ativa, brincalhona, ama brincadeiras ao ar livre e correr, sociável com adultos e crianças, sociável com outros animais.",
      imagem: "julie.jpg"
    },
    {
      id: 4,
      nome: "Beyonce",
      porte: "Medio",
      sexo: "Fêmea",
      idade: "Filhote",
      idade_aprox: "4 meses",
      data_resgate: "Setembro/2018",
      castrado: "Sim",
      vacinado: "Sim",
      vermifugado: "Sim",
      personalidade: "Tranquila, brincalhona, sociável com adultos e crianças, sociável com outros animais.",
      imagem: "beyonce.jpg"
    },
    {
      id: 5,
      nome: "Betinha",
      porte: "Medio",
      sexo: "Fêmea",
      idade: "Jovem",
      idade_aprox: "2 anos",
      data_resgate: "Março/2016",
      castrado: "Sim",
      vacinado: "Sim",
      vermifugado: "Sim",
      personalidade: "Tranquila, carinhosa, desconfiada, não se aproxima até ganhar confiança, sociável com adultos e crianças, sociável com outros animais.",
      imagem: "betinha.jpg"
    },
    {
      id: 6,
      nome: "Paulinha",
      porte: "Medio",
      sexo: "Fêmea",
      idade: "Jovem",
      idade_aprox: "2 anos",
      data_resgate: "Março/2016",
      castrado: "Sim",
      vacinado: "Sim",
      vermifugado: "Sim",
      personalidade: "Brincalhona, ativa, carinhosa, fujona, sociável com adultos e crianças, sociável com outros animais.",
    },
    {
      id: 7,
      nome: "Chorão",
      porte: "Grande",
      sexo: "Macho",
      idade: "Filhote",
      idade_aprox: "6 meses",
      data_resgate: "Abril/2018",
      castrado: "Sim",
      vacinado: "Sim",
      vermifugado: "Sim",
      personalidade: "Tranquilo, brincalhão, ativo como todo filhote, carente, chorão(por isso o nome, hahaha)",
      imagem: "chorao.jpg"
    },
    {
      id: 8,
      nome: "CupCake",
      porte: "Medio",
      sexo: "Fêmea",
      idade: "Filhote",
      idade_aprox: "6 meses",
      data_resgate: "Abril/2018",
      castrado: "Sim",
      vacinado: "Sim",
      vermifugado: "Sim",
      personalidade: "Tranquila, brincalhona, ama uma bagunça, correr, como todo filhote, alpinista, ama escalar as coisas hahahaha",
      imagem: "cupcake.jpg"
    },
    {
      id: 9,
      nome: "Tony",
      porte: "Medio",
      sexo: "Macho",
      idade: "Jovem",
      idade_aprox: "2 anos",
      data_resgate: "Março/2016",
      castrado: "Sim",
      vacinado: "Sim",
      vermifugado: "Sim",
      personalidade: "",
    }
  ];





  ngOnInit() {
  }


}
