import { render, screen } from "@testing-library/react";
import HeaderComponent from "../../components/header/HeaderComponent";

test("Page title is rendered", () => {
  render(<HeaderComponent />);
});
