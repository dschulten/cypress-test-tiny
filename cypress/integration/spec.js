const username = "dietrich.schulten@gmail.com"
const password = "a4pUDVvW69jBBzZ#"
const startPage = 'https://dev.service-bw.de/prozessstart'

const login = () => {
    cy.visit(startPage)
    cy.get('.sp-m-loginBox-Text').click()
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('.btn-primary').click()
}

describe('Request for building permit', () => {
    before(() => {
        login();
    })

    it('should allow to upload site plan', function () {
        cy.visit('https://dev.service-bw.de/web/guest/prozessstart/-/prozessstart/m40191.bau')
        cy.get('#formNaviSection_7 > .sectiontext').click({force: true})
        cy.get('[id$=LageplanAkkordeon_0_lageplanUpload]')
            .then(function (controls) {
                cy.log(controls)
            });
        cy.get('.controls[id$=LageplanAkkordeon_0_lageplanUpload]')
            .scrollIntoView()
            .then(function (dropzone) {
                cy.log('has attachFile function', typeof dropzone.attachFile === 'function')
                // dropzone.attachFile('cypress/fixtures/minimal.pdf')
            });
        cy.get('.dz-clickable[id$=LageplanAkkordeon_0_lageplanUpload]')
            .then(function (dropzone) {
                cy.log('has attachFile function', typeof dropzone.attachFile === 'function')
                // dropzone.attachFile('cypress/fixtures/minimal.pdf')
            });
        cy.get('.controls[id$=LageplanAkkordeon_0_lageplanUpload] .uploadCrlContainer')
            .then(function (dropzone) {
                cy.log('has attachFile function', typeof dropzone.attachFile === 'function')
                // dropzone.attachFile('cypress/fixtures/minimal.pdf')
            });
        cy.get('.controls[id$=LageplanAkkordeon_0_lageplanUpload] #sp-js-upload-dropzone')
            .then(function (dropzone) {
                cy.log('has attachFile function', typeof dropzone.attachFile === 'function')
                // dropzone.attachFile('cypress/fixtures/minimal.pdf')
            });
    });
});
