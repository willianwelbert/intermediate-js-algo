//batch generate newsletters
const pageHTML = document.getElementsByTagName("html")[0];
const guideName = document.getElementById("guideName");
const guideAddress = document.getElementById("guideAddress");
const guidePhone = document.getElementById("guidePhone");
const guideHours = document.getElementById("guideHours");
const guideImage = document.getElementById("guideImage");
//objects are variables

const guideShops = {
  analia : {
    name: "Anália Franco",
    img: "http://via.placeholder.com/600x600",
    endereco: "Av. Reg. Feijó, 1739, Tatuapé, São Paulo - SP, 03342-000 [3° piso - piso Lírio]",
    telefone: "+55 11 3995 7605",
    horario: "SEG a SAB: 10h - 22h - DOM: 14h - 20h"
  },
  pamplona : {
    name: "Jardim Pamplona",
    img: "http://via.placeholder.com/600x600",
    endereco: "R. Pamplona, 1704 - Jardim Paulista, São Paulo - SP, 01405-002 [2°PISO]",
    telefone: "+55 11 3995 7609",
    horario: "SEG a SAB: 10h - 22h - DOM: 14h - 20h"
  },
  morumbi : {
    name: "Morumbi Town",
    img: "http://via.placeholder.com/600x600",
    endereco: "Av. Giovanni Gronchi, 5930, Vila Andrade, São Paulo - SP, 05724-002 [146.147 / Piso 1°pavimento]",
    telefone: "+55 11 3995 7607",
    horario: "SEG a SAB: 10h - 22h - DOM: 14h - 20h"
  },
  oscar : {
    name: "Rua Oscar Freire",
    img: "http://via.placeholder.com/600x600",
    endereco: "R. Oscar Freire, 978, Cerqueira César, São Paulo - SP, 01426-002",
    telefone: "+55 11 4810 6140",
    horario: "SEG a SAB: 10h - 21h - DOM: 11h - 19h"
  },
  higienopolis : {
    name: "Higienópolis",
    img: "http://via.placeholder.com/600x600",
    endereco: "Av. Higienópolis, 618, Higienópolis, São Paulo - SP, 01238-000 [2002-2003, Piso:  Pacaembu]",
    telefone: "+55 11 3995 7602",
    horario: "SEG a SAB: 10h - 22h - DOM: 14h - 20h"
  },
  paulista : {
    name: "Pátio Paulista",
    img: "http://via.placeholder.com/600x600",
    endereco: "R. Treze de Maio, 1947, Bela Vista, São Paulo - SP, 01327-001 [E3041/42/43 Piso Paulista]",
    telefone: "+55 11 3995 7604",
    horario: "SEG a SAB: 10h - 22h - DOM: 14h - 20h"
  },
  olimpia : {
    name: "Vila Olímpia",
    img: "http://via.placeholder.com/600x600",
    endereco: "R. Olimpíadas, 360, Vila Olímpia, São Paulo - SP, 04551-000 [130/131 Piso Térreo ]",
    telefone: "+55 11 3995 7608",
    horario: "SEG a SAB: 10h - 22h - DOM: 12h - 20h"
  },
  lobos : {
    name: "Villa Lobos",
    img: "http://via.placeholder.com/600x600",
    endereco: "Av. das Nações Unidas, 4777, Alto de Pinheiros, São Paulo - SP, 05477-000 [SVLQT003 ]",
    telefone: "+55 11 3995 7606",
    horario: "SEG a SAB: 10h - 22h - DOM: 14h - 20h"
  },
  anibal : {
    name: "Rua Aníbal de Mendonça",
    img: "http://via.placeholder.com/600x600",
    endereco: "R. Aníbal de Mendonça, 135, Ipanema, Rio de Janeiro - RJ, 22410-050 [Loja B]",
    telefone: "+55 21 3995 9650",
    horario: "SEG a SEX: 9h - 21h - SAB: 10h - 16h"
  },
  barra : {
    name: "Barra Shopping",
    img: "http://via.placeholder.com/600x600",
    endereco: "Av. das Américas, 4666, Barra da Tijuca, Rio de Janeiro - RJ, 22640-102 [Loja 167 / 168]",
    telefone: "+55 21 3995 9640",
    horario: "SEG a SAB: 10h - 22h - DOM: 13h - 21h - Feriados: 15h - 21h"
  },
  tijuca : {
    name: "Shopping Tijuca",
    img: "http://via.placeholder.com/600x600",
    endereco: "Av. Maracanã, 987 - Tijuca - RJ - Cep 20511-000 / Andar 1",
    telefone: "+55 21 3995 9942",
    horario: "SEG a SAB: 10h - 22h - DOM: 15h - 21h"
  },
  batel : {
    name: "Pátio Batel",
    img: "http://via.placeholder.com/600x600",
    endereco: "Av. do Batel, 1868, Batel, Curitiba - PR, 80420-090 [Loja 157 Piso L1]",
    telefone: "+55 41 3195 0155",
    horario: "SEG a SAB: 10h - 22h - DOM: 12h - 20h"
  }
};

const guidesLength = Object.keys(guideShops).length;


//create a function with a loop
function generateBatch() {
  for (i=0;i<guidesLength;i+=1){
    //loop inserts each key:value to its place
    const guideShopKey = Object.keys(guideShops)[i];
    guideName.textContent = guideShops[guideShopKey].name;
    guideAddress.textContent = guideShops[guideShopKey].endereco;
    guideHours.textContent = guideShops[guideShopKey].horario;
    guidePhone.textContent = guideShops[guideShopKey].telefone;
    guideImage.setAttribute("src", guideShops[guideShopKey].img);
    //the loop generates a new tab to insert the HTML + variables
    const newsletterNewTab = window.open();
    const newsletterContent = document.write();
  }
}


