import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

// returns component so needs to be cap
// style App using div
const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      {/* GlobalStyles component gets added to component tree as sibling of StyledApp and cannot accept any children. */}
      <GlobalStyles />
      <StyledApp>
        {/* <Row type="vertical"> // vertical set as default*/}
        <Row>
          <Row type="horizontal">
            {/* 'type' is own prop. 'as' is built in and will display as given element in HTML */}
            {/* <Heading type="h1">The Wild Oasis</Heading> */}
            <Heading as="h1">The Wild Oasis</Heading>

            <div>
              <Heading as="h2">Check in and out</Heading>
              {/* <Button variation="primary" size="medium" onClick={() => alert("Check in")} >  // default*/}
              <Button onClick={() => alert("Check in")}>Check in</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("Check out")}
              >
                Check out
              </Button>
            </div>
          </Row>

          {/* <Row type="vertical"> // vertical set as default*/}
          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
