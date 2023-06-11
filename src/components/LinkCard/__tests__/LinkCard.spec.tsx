import { render, screen, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect } from '@jest/globals';
import { LinkCard } from "..";
import { LinkCardProps } from "@/types/type";

const link: LinkCardProps = {
  url: "https://assessoriavip.com.br/funnelFormLead/1d396804-ee97-4ca9-8318-7cfe1a1ed083",
  title: "Vamos conversar?"
};

describe("Component LinkCard", () => {
  it("deve renderizar título do link", () => {
    render(<LinkCard {...link} />);

    const titleLink = screen.getByText(link.title);

    expect(titleLink).toBeInTheDocument();
    expect(titleLink).toBeDefined();
  });

  it("deve clicar em link e abrir nova página", () => {
    render(<LinkCard {...link} />);

    const linkElement = screen.getByRole('link', { name: /Vamos conversar?/i });
    act(() => {
      userEvent.click(linkElement);
    })

    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(window.open).toMatchSnapshot();
  })
})