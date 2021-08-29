import styled from 'styled-components'
const config = require('./../../config.json')
const COLORS = config.thehubpub.colors

export const StyledContactForm = styled.div`
width: 20rem;
display: flex;
flex-flow: column wrap;
form {
    display: flex;
    flex-flow: column wrap;
    input {
        margin: .5rem 0;
        padding: .5rem;
        border: .05rem solid #e2e2e2;
        border-radius: .4em;
    }
    label {
        margin: auto .25rem;
        font-family: 'Newsreader', serif;
        letter-spacing: .25rem;
        text-transform: uppercase;
    }
    textarea {
        border: .05rem solid #e2e2e2;
        border-radius: .4rem;
    }
}
h2 {
    font-size: 1.5rem;
}
h3 {
    padding: .25rem;
    font-size: .5rem;
    color: ${COLORS.black};
    font-family: 'Newsreader', serif;
    text-transform: uppercase;
}
.stateZip {
    display: flex;
    flex-flow: row nowrap;
    form {
        input {
            margin: 0 .25em;
        }
    }
}
.billingAddress {
    font-family: gotham-medium;
    font-size: .75em;
    font-style: italic;
}
`
