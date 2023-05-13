import { Component, OnInit } from '@angular/core';
import {ClientPar} from "../client-particulier/client-par";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientParService} from "../client-particulier/client-par.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-informations-perso',
  templateUrl: './informations-perso.page.html',
  styleUrls: ['./informations-perso.page.scss'],
})
export class InformationsPersoPage implements OnInit {
  currentPays = undefined;
pays= [
    {
    id: 1,
    nationnalite: "afghane",
    libelle: "Afghanistan"
  },
    {
      id: 2,
      nationnalite: "sudafricaine",
      libelle: "Afrique du Sud"
    },
    {
      id: 3,
      nationnalite: "albanaise",
      libelle: "Albanie"
    },
    {
      id: 4,
      nationnalite: "algérienne",
      libelle: "Algérie"
    },
    {
      id: 5,
      nationnalite: "allemande",
      libelle: "Allemagne"
    },
    {
      id: 6,
      nationnalite: "andorrane",
      libelle: "Andorre"
    },
    {
      id: 7,
      nationnalite: "angolaise",
      libelle: "Angola"
    },
    {
      id: 8,
      nationnalite: "antiguayenne",
      libelle: "Antigua-et-Barbuda"
    },
    {
      id: 9,
      nationnalite: "saoudienne",
      libelle: "Arabie saoudite"
    },
    {
      id: 10,
      nationnalite: "argentine",
      libelle: "Argentine"
    },
    {
      id: 11,
      nationnalite: "arménienne",
      libelle: "Arménie"
    },
    {
      id: 12,
      nationnalite: "australienne",
      libelle: "Australie"
    },
    {
      id: 13,
      nationnalite: "autrichienne",
      libelle: "Autriche"
    },
    {
      id: 14,
      nationnalite: "azerbaïdjanaise",
      libelle: "Azerbaïdjan"
    },
    {
      id: 15,
      nationnalite: "bahaméenne",
      libelle: "Bahamas"
    },
    {
      id: 16,
      nationnalite: "bahreïnienne",
      libelle: "Bahreïn"
    },
    {
      id: 17,
      nationnalite: "bangladaise",
      libelle: "Bangladesh"
    },
    {
      id: 18,
      nationnalite: "barbadienne",
      libelle: "Barbade"
    },
    {
      id: 19,
      nationnalite: "belge",
      libelle: "Belgique"
    },
    {
      id: 20,
      nationnalite: "bélizienne",
      libelle: "Belize"
    },
    {
      id: 22,
      nationnalite: "bhoutanaise",
      libelle: "Bhoutan"
    },
    {
      id: 24,
      nationnalite: "birmane",
      libelle: "Birmanie"
    },
    {
      id: 23,
      nationnalite: "biélorusse",
      libelle: "Biélorussie"
    },
    {
      id: 25,
      nationnalite: "bolivienne",
      libelle: "Bolivie"
    },
    {
      id: 26,
      nationnalite: "bosnienne",
      libelle: "Bosnie-Herzégovine"
    },
    {
      id: 27,
      nationnalite: "botswanaise",
      libelle: "Botswana"
    },
    {
      id: 29,
      nationnalite: "brunéienne",
      libelle: "Brunei"
    },
    {
      id: 28,
      nationnalite: "brésilienne",
      libelle: "Brésil"
    },
    {
      id: 30,
      nationnalite: "bulgare",
      libelle: "Bulgarie"
    },
    {
      id: 31,
      nationnalite: "burkinabé",
      libelle: "Burkina"
    },
    {
      id: 32,
      nationnalite: "burundaise",
      libelle: "Burundi"
    },
    {
      id: 21,
      nationnalite: "béninoise",
      libelle: "Bénin"
    },
    {
      id: 33,
      nationnalite: "cambodgienne",
      libelle: "Cambodge"
    },
    {
      id: 34,
      nationnalite: "camerounaise",
      libelle: "Cameroun"
    },
    {
      id: 35,
      nationnalite: "canadienne",
      libelle: "Canada"
    },
    {
      id: 36,
      nationnalite: "cap-verdienne",
      libelle: "Cap-Vert"
    },
    {
      id: 144,
      nationnalite: "centrafricaine",
      libelle: "Centrafrique"
    },
    {
      id: 37,
      nationnalite: "chilienne",
      libelle: "Chili"
    },
    {
      id: 38,
      nationnalite: "chinoise",
      libelle: "Chine"
    },
    {
      id: 39,
      nationnalite: "chypriote",
      libelle: "Chypre"
    },
    {
      id: 40,
      nationnalite: "colombienne",
      libelle: "Colombie"
    },
    {
      id: 41,
      nationnalite: "comorienne",
      libelle: "Comores"
    },
    {
      id: 42,
      nationnalite: "congolaise",
      libelle: "Congo"
    },
    {
      id: 43,
      nationnalite: "nord-coréenne",
      libelle: "Corée du Nord"
    },
    {
      id: 44,
      nationnalite: "sud-coréenne",
      libelle: "Corée du Sud"
    },
    {
      id: 45,
      nationnalite: "costaricienne",
      libelle: "Costa Rica"
    },
    {
      id: 47,
      nationnalite: "croate",
      libelle: "Croatie"
    },
    {
      id: 48,
      nationnalite: "cubaine",
      libelle: "Cuba"
    },
    {
      id: 46,
      nationnalite: "ivoirienne",
      libelle: "Côte d'Ivoire"
    },
    {
      id: 49,
      nationnalite: "danoise",
      libelle: "Danemark"
    },
    {
      id: 50,
      nationnalite: "djiboutienne",
      libelle: "Djibouti"
    },
    {
      id: 51,
      nationnalite: "dominiquaise",
      libelle: "Dominique"
    },
    {
      id: 52,
      nationnalite: "egyptienne",
      libelle: "Egypte"
    },
    {
      id: 53,
      nationnalite: "emirienne",
      libelle: "Emirats arabes unis"
    },
    {
      id: 54,
      nationnalite: "equatorienne",
      libelle: "Equateur"
    },
    {
      id: 55,
      nationnalite: "erythréenne",
      libelle: "Erythrée"
    },
    {
      id: 56,
      nationnalite: "espagnole",
      libelle: "Espagne"
    },
    {
      id: 57,
      nationnalite: "estonienne",
      libelle: "Estonie"
    },
    {
      id: 58,
      nationnalite: "américaine",
      libelle: "Etats-Unis"
    },
    {
      id: 59,
      nationnalite: "ethiopienne",
      libelle: "Ethiopie"
    },
    {
      id: 60,
      nationnalite: "fidjienne",
      libelle: "Fidji"
    },
    {
      id: 61,
      nationnalite: "finlandaise",
      libelle: "Finlande"
    },
    {
      id: 62,
      nationnalite: "française",
      libelle: "France"
    },
    {
      id: 63,
      nationnalite: "gabonaise",
      libelle: "Gabon"
    },
    {
      id: 64,
      nationnalite: "gambienne",
      libelle: "Gambie"
    },
    {
      id: 66,
      nationnalite: "ghanéenne",
      libelle: "Ghana"
    },
    {
      id: 68,
      nationnalite: "grenadienne",
      libelle: "Grenade"
    },
    {
      id: 67,
      nationnalite: "grecque",
      libelle: "Grèce"
    },
    {
      id: 69,
      nationnalite: "guatémaltèque",
      libelle: "Guatemala"
    },
    {
      id: 70,
      nationnalite: "guinéenne",
      libelle: "Guinée"
    },
    {
      id: 71,
      nationnalite: "equatoguinéenne",
      libelle: "Guinée équatoriale"
    },
    {
      id: 72,
      nationnalite: "bissaoguinéenne",
      libelle: "Guinée-Bissao"
    },
    {
      id: 73,
      nationnalite: "guyanienne",
      libelle: "Guyana"
    },
    {
      id: 65,
      nationnalite: "géorgienne",
      libelle: "Géorgie"
    },
    {
      id: 74,
      nationnalite: "haïtienne",
      libelle: "Haïti"
    },
    {
      id: 75,
      nationnalite: "hondurienne",
      libelle: "Honduras"
    },
    {
      id: 77,
      nationnalite: "hongroise",
      libelle: "Hongrie"
    },
    {
      id: 79,
      nationnalite: "indienne",
      libelle: "Inde"
    },
    {
      id: 80,
      nationnalite: "indonésienne",
      libelle: "Indonésie"
    },
    {
      id: 81,
      nationnalite: "irakienne",
      libelle: "Irak"
    },
    {
      id: 82,
      nationnalite: "iranienne",
      libelle: "Iran"
    },
    {
      id: 83,
      nationnalite: "irlandaise",
      libelle: "Irlande"
    },
    {
      id: 84,
      nationnalite: "islandaise",
      libelle: "Islande"
    },
    {
      id: 85,
      nationnalite: "israélienne",
      libelle: "Israël"
    },
    {
      id: 86,
      nationnalite: "italienne",
      libelle: "Italie"
    },
    {
      id: 87,
      nationnalite: "jamaïquaine",
      libelle: "Jamaïque"
    },
    {
      id: 88,
      nationnalite: "japonaise",
      libelle: "Japon"
    },
    {
      id: 90,
      nationnalite: "jordanienne",
      libelle: "Jordanie"
    },
    {
      id: 89,
      nationnalite: "palestinienne",
      libelle: "Jérusalem - Territoires palestiniens"
    },
    {
      id: 91,
      nationnalite: "kazakhstanais",
      libelle: "Kazakhstan"
    },
    {
      id: 92,
      nationnalite: "kényane",
      libelle: "Kenya"
    },
    {
      id: 93,
      nationnalite: "kirghize",
      libelle: "Kirghizstan"
    },
    {
      id: 94,
      nationnalite: "kiribatienne",
      libelle: "Kiribati"
    },
    {
      id: 198,
      nationnalite: "kosovare",
      libelle: "Kosovo"
    },
    {
      id: 95,
      nationnalite: "koweïtienne",
      libelle: "Koweït"
    },
    {
      id: 96,
      nationnalite: "laotienne",
      libelle: "Laos"
    },
    {
      id: 97,
      nationnalite: "lesothienne",
      libelle: "Lesotho"
    },
    {
      id: 98,
      nationnalite: "lettone",
      libelle: "Lettonie"
    },
    {
      id: 99,
      nationnalite: "libanaise",
      libelle: "Liban"
    },
    {
      id: 100,
      nationnalite: "libérienne",
      libelle: "Liberia"
    },
    {
      id: 101,
      nationnalite: "libyenne",
      libelle: "Libye"
    },
    {
      id: 102,
      nationnalite: "liechtensteinoise",
      libelle: "Liechtenstein"
    },
    {
      id: 103,
      nationnalite: "lituanienne",
      libelle: "Lituanie"
    },
    {
      id: 104,
      nationnalite: "luxembourgeoise",
      libelle: "Luxembourg"
    },
    {
      id: 105,
      nationnalite: "macédonienne",
      libelle: "Macédoine"
    },
    {
      id: 106,
      nationnalite: "malgache",
      libelle: "Madagascar"
    },
    {
      id: 107,
      nationnalite: "malaisienne",
      libelle: "Malaisie"
    },
    {
      id: 108,
      nationnalite: "malawienne",
      libelle: "Malawi"
    },
    {
      id: 109,
      nationnalite: "maldivienne",
      libelle: "Maldives"
    },
    {
      id: 110,
      nationnalite: "malienne",
      libelle: "Mali"
    },
    {
      id: 111,
      nationnalite: "maltaise",
      libelle: "Malte"
    },
    {
      id: 112,
      nationnalite: "marocaine",
      libelle: "Maroc"
    },
    {
      id: 113,
      nationnalite: "marshallaise",
      libelle: "Marshall"
    },
    {
      id: 114,
      nationnalite: "mauricienne",
      libelle: "Maurice"
    },
    {
      id: 115,
      nationnalite: "mauritanienne",
      libelle: "Mauritanie"
    },
    {
      id: 116,
      nationnalite: "mexicaine",
      libelle: "Mexique"
    },
    {
      id: 117,
      nationnalite: "micronésienne",
      libelle: "Micronésie"
    },
    {
      id: 118,
      nationnalite: "moldave",
      libelle: "Moldavie"
    },
    {
      id: 119,
      nationnalite: "monégasque",
      libelle: "Monaco"
    },
    {
      id: 120,
      nationnalite: "mongole",
      libelle: "Mongolie"
    },
    {
      id: 197,
      nationnalite: "monténégrine",
      libelle: "Monténégro"
    },
    {
      id: 121,
      nationnalite: "mozambicaine",
      libelle: "Mozambique"
    },
    {
      id: 122,
      nationnalite: "namibienne",
      libelle: "Namibie"
    },
    {
      id: 123,
      nationnalite: "nauruane",
      libelle: "Nauru"
    },
    {
      id: 125,
      nationnalite: "nicaraguayenne",
      libelle: "Nicaragua"
    },
    {
      id: 126,
      nationnalite: "nigérienne",
      libelle: "Niger"
    },
    {
      id: 127,
      nationnalite: "nigériane",
      libelle: "Nigeria"
    },
    {
      id: 128,
      nationnalite: "norvégienne",
      libelle: "Norvège"
    },
    {
      id: 129,
      nationnalite: "néo-zélandaise",
      libelle: "Nouvelle-Zélande"
    },
    {
      id: 124,
      nationnalite: "népalaise",
      libelle: "Népal"
    },
    {
      id: 130,
      nationnalite: "omanaise",
      libelle: "Oman"
    },
    {
      id: 131,
      nationnalite: "ougandaise",
      libelle: "Ouganda"
    },
    {
      id: 132,
      nationnalite: "ouzbèke",
      libelle: "Ouzbékistan"
    },
    {
      id: 133,
      nationnalite: "pakistanaise",
      libelle: "Pakistan"
    },
    {
      id: 134,
      nationnalite: "palaoise",
      libelle: "Palaos"
    },
    {
      id: 135,
      nationnalite: "panaméenne",
      libelle: "Panama"
    },
    {
      id: 136,
      nationnalite: "papouasienne",
      libelle: "Papouasie-Nouvelle-Guinée"
    },
    {
      id: 137,
      nationnalite: "paraguayenne",
      libelle: "Paraguay"
    },
    {
      id: 138,
      nationnalite: "néerlandaise",
      libelle: "Pays-Bas"
    },
    {
      id: 140,
      nationnalite: "philippine",
      libelle: "Philippines"
    },
    {
      id: 141,
      nationnalite: "polonaise",
      libelle: "Pologne"
    },
    {
      id: 142,
      nationnalite: "portugaise",
      libelle: "Portugal"
    },
    {
      id: 139,
      nationnalite: "péruvienne",
      libelle: "Pérou"
    },
    {
      id: 143,
      nationnalite: "qatarienne",
      libelle: "Qatar"
    },
    {
      id: 148,
      nationnalite: "roumaine",
      libelle: "Roumanie"
    },
    {
      id: 149,
      nationnalite: "britannique",
      libelle: "Royaume-Uni"
    },
    {
      id: 150,
      nationnalite: "russe",
      libelle: "Russie"
    },
    {
      id: 151,
      nationnalite: "rwandaise",
      libelle: "Rwanda"
    },
    {
      id: 146,
      nationnalite: "dominicaine",
      libelle: "République dominicaine"
    },
    {
      id: 145,
      nationnalite: "congolaise (RDC)",
      libelle: "République démocratique du Congo"
    },
    {
      id: 147,
      nationnalite: "tchèque",
      libelle: "République tchèque"
    },
    {
      id: 152,
      nationnalite: "christophienne",
      libelle: "Saint-Christophe-et-Niévès"
    },
    {
      id: 154,
      nationnalite: "marinaise",
      libelle: "Saint-Marin"
    },
    {
      id: 155,
      nationnalite: null,
      libelle: "Saint-Siège"
    },
    {
      id: 156,
      nationnalite: "vincentaise",
      libelle: "Saint-Vincent-et-les Grenadines"
    },
    {
      id: 153,
      nationnalite: "lucienne",
      libelle: "Sainte-Lucie"
    },
    {
      id: 157,
      nationnalite: "salomonaise",
      libelle: "Salomon"
    },
    {
      id: 158,
      nationnalite: "salvadorienne",
      libelle: "Salvador"
    },
    {
      id: 159,
      nationnalite: "samoene",
      libelle: "Samoa"
    },
    {
      id: 160,
      nationnalite: "santoméenne",
      libelle: "Sao Tomé-et-Principe"
    },
    {
      id: 162,
      nationnalite: "serbe",
      libelle: "Serbie"
    },
    {
      id: 163,
      nationnalite: "seychelloise",
      libelle: "Seychelles"
    },
    {
      id: 164,
      nationnalite: "sierraléonaise",
      libelle: "Sierra Leone"
    },
    {
      id: 165,
      nationnalite: "singapourienne",
      libelle: "Singapour"
    },
    {
      id: 166,
      nationnalite: "slovaque",
      libelle: "Slovaquie"
    },
    {
      id: 167,
      nationnalite: "slovène",
      libelle: "Slovénie"
    },
    {
      id: 168,
      nationnalite: "somalienne",
      libelle: "Somalie"
    },
    {
      id: 169,
      nationnalite: "soudanaise",
      libelle: "Soudan"
    },
    {
      id: 170,
      nationnalite: "srilankaise",
      libelle: "Sri Lanka"
    },
    {
      id: 172,
      nationnalite: "suisse",
      libelle: "Suisse"
    },
    {
      id: 173,
      nationnalite: "surinamaise",
      libelle: "Suriname"
    },
    {
      id: 171,
      nationnalite: "suédoise",
      libelle: "Suède"
    },
    {
      id: 174,
      nationnalite: "swazie",
      libelle: "Swaziland"
    },
    {
      id: 175,
      nationnalite: "syrienne",
      libelle: "Syrie"
    },
    {
      id: 161,
      nationnalite: "sénégalaise",
      libelle: "Sénégal"
    },
    {
      id: 176,
      nationnalite: "tadjike",
      libelle: "Tadjikistan"
    },
    {
      id: 178,
      nationnalite: "tanzanienne",
      libelle: "Tanzanie"
    },
    {
      id: 177,
      nationnalite: "taïwanaise",
      libelle: "Taïwan"
    },
    {
      id: 179,
      nationnalite: "tchadienne",
      libelle: "Tchad"
    },
    {
      id: 180,
      nationnalite: "thaïlandaise",
      libelle: "Thaïlande"
    },
    {
      id: 181,
      nationnalite: "timoraise",
      libelle: "Timor oriental"
    },
    {
      id: 182,
      nationnalite: "togolaise",
      libelle: "Togo"
    },
    {
      id: 183,
      nationnalite: "tongienne",
      libelle: "Tonga"
    },
    {
      id: 184,
      nationnalite: "trinidadienne",
      libelle: "Trinité-et-Tobago"
    },
    {
      id: 185,
      nationnalite: "tunisienne",
      libelle: "Tunisie"
    },
    {
      id: 186,
      nationnalite: "turkmène",
      libelle: "Turkménistan"
    },
    {
      id: 187,
      nationnalite: "turque",
      libelle: "Turquie"
    },
    {
      id: 188,
      nationnalite: "tuvaluane",
      libelle: "Tuvalu"
    },
    {
      id: 189,
      nationnalite: "ukrainienne",
      libelle: "Ukraine"
    },
    {
      id: 190,
      nationnalite: "uruguayenne",
      libelle: "Uruguay"
    },
    {
      id: 191,
      nationnalite: "vanuataise",
      libelle: "Vanuatu"
    },
    {
      id: 192,
      nationnalite: "vénézuélienne",
      libelle: "Venezuela"
    },
    {
      id: 193,
      nationnalite: "vietnamienne",
      libelle: "Viêt Nam"
    },
    {
      id: 194,
      nationnalite: "yéménite",
      libelle: "Yémen"
    },
    {
      id: 195,
      nationnalite: "zambienne",
      libelle: "Zambie"
    },
    {
      id: 196,
      nationnalite: "zimbabwéenne",
      libelle: "Zimbabwe"
    }
    ];

categProf = [
  "Agriculteur",
  "Artisan",
  "Banquier",
  "Cadre Supérieur",
  "Commerçant",
  "Fonction Libèrale",
  "Fonctionnaire",
  "Gérant/PDG",
  "Haut Fonctionnaire",
  "Ouvrier",
  "Postier",
  "Salarié",
  "Startupper",
]
  compareWith(o1:any, o2:any) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  handleChange(ev:any) {
    this.currentPays = ev.target.value;
  }

  clientPar = new ClientPar();
  clientParForm !: FormGroup;
  constructor(private fb : FormBuilder , private _service : ClientParService , private router:Router) { }

  ngOnInit() {
    this.clientParForm = this.fb.group({
      nationalité : this.fb.control('' ,[Validators.required]),
      paysdeResi : this.fb.control('' , [Validators.required]),
      adresse: this.fb.control('' , [Validators.required]),
      status : this.fb.control('', [Validators.required , Validators.email]),
      nbEnf: this.fb.control('', [Validators.required , Validators.maxLength(8)]),
      CatégPro : this.fb.control('' , [Validators.required]),
    })
  }
  RegisterClientPar() {
    this._service.RegisterFromClientPar(this.clientPar).subscribe({
        next:data=>console.log(data),
        error:err => console.log(err)
      }
    );}

}
