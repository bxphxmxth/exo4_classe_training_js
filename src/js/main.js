// ## EXO4

// ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).

class Lieu{
    constructor(nom,personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}
// ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison

let molengeek = new Lieu ("Molengeek", []);
let snack = new Lieu ("Snack", []);
let maison = new Lieu ("Maison", []);

// ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus ou en y allant à pieds.
class Personne{
    constructor(nom,prenom,argent){
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
        this.seDeplacer = (depart, arrivee, transport) =>{
            if(transport == "pieds"){
                arrivee.personnes.push(this);
                depart.personnes.splice(depart.personnes.indexOf(this,1));
                console.log(`je vais à pieds`);
            }else if(transport.embarquer(this) == true){
                arrivee.personnes.push(this);
                depart.personnes.splice(depart.personnes.indexOf(this,1));
                console.log("vé en bus");
            }else{
                arrivee.personnes.push(this);
                depart.personnes.splice(depart.personnes.indexOf(this,1));
                console.log("g pas assez jvé pas en bus");
            }

        }
    }
}

// ### Puis créez une instance de votre personnage.

let naz = new Personne("Aala","Naz", 80);
// ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.
// Sinon, il faut y aller à pied.
class Bus{
    constructor(personnes, caisse){
        this.personnes = personnes,
        this.caisse = caisse;
        this.embarquer = (passager) =>{
            if(passager.argent >= 2.80){
                passager.argent -= 2.80;
                this.caisse += 2.80;
                this.personnes.push(passager);
                this.personnes.splice(this.personnes.indexOf(passager,1));
                console.log("jss ds lbus");
                return true;
            }else{
                console.log("no money honey sorry");
                return false;
            }
        }

    }
}

// ### Créez une instance de Bus. 

let bus = new Bus([],0);
bus.embarquer(naz);

// ### 8h00 Vous êtes à la maison.
maison.personnes.push(naz);
console.log(maison);
// ### 8h30 Vous prennez le bus vers MolenGeek.

naz.seDeplacer(maison,molengeek,bus);
console.log(`je prends le bus pour aller à molengeek`);

// ### 8h45 Vous êtes à MolenGeek.

// ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.

naz.seDeplacer(molengeek,snack,bus);
console.log(`je prends le bus pour aller manger un durum falafel au snack`);
console.log(snack);

// ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.

naz.seDeplacer(snack,molengeek,"pieds");
console.log(snack);
console.log(molengeek);

// ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.

naz.seDeplacer(molengeek,maison,bus)
console.log("vé en bus chez wam");

// ### Faites un console.log() de votre argent, ainsi que l'argent du Bus(modifié)

console.log(naz.argent);
console.log(bus.caisse);

