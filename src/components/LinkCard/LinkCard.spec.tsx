import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { LinkCard } from ".";
import { LinkCardProps } from "@/types/type";

const link: LinkCardProps = {
  url: "https://assessoriavip.com.br/funnelFormLead/1d396804-ee97-4ca9-8318-7cfe1a1ed083",
  title: "Vamos conversar?"
};

describe("Component LinkCard", () => {
  it("deve renderizar link", () => {
    render(<LinkCard {...link} />);

    const titleLink = screen.getByText(link.title);

    expect(titleLink).toBeInTheDocument();
  });
})