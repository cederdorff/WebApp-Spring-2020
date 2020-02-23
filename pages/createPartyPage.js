export default class CreatePartyPage {

    constructor() {
        this.template();

    }

    template() {



        document.querySelector('#content').innerHTML += /*html*/ `
        <article id="createPartyPage" class="page">
        <section class="collectionOfItems">
        <h2>Spilmester: opret gruppe</h2>
    
        <button class="btn" name="settingsPage" onclick="navigateTo(this.name);createParty()">Få et gruppe ID</button>
        </section>
        <section class="collectionOfItems">
        <h2>Spillere: Tilslut jer gruppen</h2>
        <input id="joinPartyId" type="text" placeholder="Indtast gruppeID">
        <br>
        <button class="btn" type="button" name="addPlayers" onclick="joinParty(this.name)">GOGOGO!</button>
        </section>
        </article>
        `;

    }
}