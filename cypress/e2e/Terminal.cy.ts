//Reference: https://docs.cypress.io/guides/core-concepts/interacting-with-elements

//TODO - When more familiar with cypress, see this link for reference on creating your own command with drag and drop
// Reference: https://stackoverflow.com/questions/55361499/how-to-implement-drag-and-drop-in-cypress-test-when-using-angular-material-drag
// OR
// Reference: https://reflect.run/articles/testing-drag-and-drop-workflows-using-cypress/#:~:text=You%20can%20add%20drag%2Dand,cypress%2Ddrag%2Ddrop%20plugin.&text=require(%22%404tw%2Fcypress,drag%2Dand%2Ddrop%20elements.

describe("Terminal Testing and Interactivity for Landing Page", () => {

  beforeEach(() => { 
    //NOTE - does this action before each test, ideal for refreshing the test to ensure no state is carried over
    // Reference: https://docs.cypress.io/api/commands/visit
    cy.visit("/");
  });

  it("Should show the terminal", () => {
    cy.get(".overflow-y-auto").should("be.visible");
    //NOTE - if the terminal is not visible, the test will fail. 
    // although these should assertions feel very loose at the start, once you read the document over,  
    // you will understand its capabilities
    // Reference: https://docs.cypress.io/api/commands/should
  });

  it("Should be interactive", () => {
    cy.get(".foto-mono").type("help").type("{enter}");
    //NOTE - this {enter} acts as a return button click on the mac, this is useful as my terminal reacts exactly to that and could be 
    //useful depending on the route you take however a key note here is how cypress handles this and the typing in general
    //Reference: https://docs.cypress.io/api/commands/type
    cy.get(".overflow-y-auto > :nth-child(1) > :nth-child(4)")
      .should("be.visible")
      .and(
        "contain",
        "Available commands: about, projects, contact, clear, experience, reset-color, keep-color, help",
      );
      //NOTE - You will see this and a good amount, this is because in cypress' best practices you should chain a 'should' or 
      // a 'contains' with an 'and' if you want to check multiple things that originate from sources like those. 
      // Reference: https://docs.cypress.io/api/commands/and
  });

  it("Should throw an error for invalid input", () => {
    cy.get(".foto-mono").type("idk").type("{enter}");
    cy.get(".overflow-y-auto > :nth-child(1) > :nth-child(4)")
      .should("be.visible")
      .and("contain", "Command not found");
  });

  it("Should clear the terminal", () => {
    cy.get(".foto-mono").type("help").type("{enter}");
    cy.get(".foto-mono").type("clear").type("{enter}");
    cy.get(".overflow-y-auto > :nth-child(1) > :nth-child(4)").should(
      "not.exist",
      //NOTE - there are cases where elements exist but simply do not render, this exist/not.exist checks for that very use case 
    );
  });
  
  it("Should click the color picker button and pick a color", () => {
    cy.contains("button", "Show Color Picker").click();
    cy.get("div.react-colorful__saturation-pointer").should("be.visible");
    cy.get(".react-colorful__saturation > .react-colorful__interactive").click(
      "center",
    );
  });
      
  //NOTE - This is a more complex test, however the key thing to note is that you can select css properties to check them for 
  // changes due to your cypress implementation
  // Reference: https://docs.cypress.io/api/commands/should
  it("Should not keep the color then save it", () => {
    cy.contains("button", "Show Color Picker").click();
    cy.contains("h1", "Terminal").should(
      "have.css",
      "background-image",
      "linear-gradient(to right, rgb(132, 22, 22), rgb(220, 38, 38), rgb(132, 22, 22))",
    );
    cy.get(".react-colorful__saturation > .react-colorful__interactive").click(
      "center",
    );
    cy.contains("h1", "Terminal").should(
      "have.css",
      "background-image",
      "linear-gradient(to right, rgb(76, 38, 38), rgb(128, 64, 64), rgb(76, 38, 38))",
    );
    cy.get(".foto-mono").type("keep-color").type("{enter}");
    cy.getCookie("userToken").should("exist");
    //NOTE - in my code I store the users kept color in a cookie, this is how I check for it
    // in my cypress test, getting its name using cypress' getCookie method
  });

  it("Should redirect you to a new page", () => {
    cy.get(".foto-mono").type("help").type("{enter}");
    cy.get(".foto-mono").type("about").type("{enter}");
    cy.get(".foto-mono")
      .type("y")
      .type("{enter}")
      .url()
      .should("eq", "http://localhost:3000/about");
        //NOTE - this is how you check your url with cypress
    cy.wait(2000)
    //NOTE - unnecessary but put in to show how wait works 
    // most commands by default wait a certain amount of time
    // Reference: https://docs.cypress.io/api/commands/wait#:~:text=This%20duration%20is%20configured%20by,a%20default%20of%205000%20ms.&text=Once%20Cypress%20detects%20that%20a,to%20the%202nd%20waiting%20period.
  });

});
