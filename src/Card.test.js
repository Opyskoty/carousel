import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

//smoke test
it("renders without crashing", function () {
  const { getByText } = render(<Card caption="Photo by Richard Pasquarella on Unsplash" src="image1" alt="Photo by Richard Pasquarella on Unsplash" currNum={1} totalNum= {3}/>);
  const card = getByText("Image 1 of 3.")

  //expect <small> to have class of Card-small
  expect(card).toHaveClass("Card-small");
});


//snapshot test

it("matches snapshot", function() {
  const {asFragment} = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});

it("shows caption", function() {
  const {asFragment} = render(<Card caption="Photo by Josh Post on Unsplash"/>);
  expect(asFragment()).toMatchSnapshot();
})