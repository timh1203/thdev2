import React from 'react'
import styled from 'styled-components'

const Contact = () => (
  <Section1 id="contact">
    <H1a>Contact</H1a>
    <Hr />
    <Form1 action="https://formspree.io/timh1203@gmail.com" method="POST">
      <Ul1>
        <li>
          <input
            type="hidden"
            name="From"
            value="timh1203.com"
          />
        </li>
        <li>
          <input type="hidden" name="_gotcha" />
        </li>
        <li>
          <Input1
            type="text"
            name="First Name"
            placeholder="First Name"
            required
          />
        </li>
        <li>
          <Input1
            type="text"
            name="Last Name"
            placeholder="Last Name"
            required
          />
        </li>
        <li>
          <Input1
            type="email"
            name="Email"
            placeholder="Email"
            required
          />
        </li>
        <li>
          <Textarea1
            type="text"
            name="Message"
            placeholder="Message"
            required
          >
          </Textarea1>
        </li>
        <li>
          <Button1 type="submit">Send</Button1>
        </li>
      </Ul1>
    </Form1>
  </Section1>
)

const Section1 = styled.section`
  color: ${props => props.theme.textColor};
`
const Form1 = styled.form`
  text-align: center;
  margin: 2% auto;
  width: 60%;
  border-radius: 5px;
  border: 2px solid ${props => props.theme.textColor};
  box-shadow: 0 0 5px gray;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    margin: 2rem auto;
  }
`
// const H1a = styled.h1`
//   font-size: 3.6rem;
//   font-family: 'Lato';
//   text-shadow: 1px 1px 2px gray;
//   text-align: center;
//   margin-top: 1rem;
// `
const Ul1 = styled.ul`
`
// const Li1 = styled.ul`
//   line-height: 2;
//   @media (max-width: 400px) {
//     width: 100%;
//     margin: 0 auto;
//     line-height: 1.6;
//   }
// `
const Input1 = styled.input`
  width: 60%;
  font-size: 1.6rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 2px;
  font-family: 'Quicksand';
  &:focus {
    /* box-shadow: 0 0 20px #82DBFA; */
    box-shadow: 0 0 20px ${props => props.theme.themeToggleButton};
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`
const Textarea1 = styled.textarea`
  width: 60%;
  height: 200px;
  font-size: 1.6rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 2px;
  font-family: 'Quicksand';
  &:focus {
    /* box-shadow: 0 0 20px #82DBFA; */
    box-shadow: 0 0 20px ${props => props.theme.themeToggleButton};
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`
const Button1 = styled.button`
  width: 20%;
  font-size: 1.6rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  color: ${props => props.theme.themeToggleButton};
  background: ${props => props.theme.buttonBackground};
  border: 2px solid ${props => props.theme.buttonBorder};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.textColor};
    background: ${props => props.theme.themeToggleButton};
    border: 2px solid ${props => props.theme.textColor};
  }
  @media (max-width: 400px) {
    width: 40%;
  }
`
const H1a = styled.h1`
  text-align: left;
`
const Hr = styled.hr`
  border-color: ${ props => props.theme.textColor};
`
// const Span1 = styled.span`
//   text-decoration: underline;
//   font-weight: 600;
// `

export default Contact
