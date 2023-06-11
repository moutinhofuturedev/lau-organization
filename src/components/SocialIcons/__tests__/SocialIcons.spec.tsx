import { render, screen } from '@testing-library/react';
import { WhatsAppIcon } from '..';

describe('WhatsAppIcon', () => {
    it('should render the WhatsAppIcon component', () => {
        // Arrange
        render(<WhatsAppIcon />);
        const svgElement = screen.getByTestId('svg-whatsapp');

        // Assert
        expect(svgElement).toBeInTheDocument();
        expect(svgElement.tagName).toBe('svg');
    });

    it('should have the correct attributes and styles', () => {
        // Arrange
        render(<WhatsAppIcon />);
        const svgElement = screen.getByTestId('svg-whatsapp');

        // Assert
        expect(svgElement).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
        expect(svgElement).toHaveAttribute('width', '48');
        expect(svgElement).toHaveAttribute('height', '49');
        expect(svgElement).toHaveAttribute('fill', 'none');
        expect(svgElement).toHaveAttribute('viewBox', '0 0 48 49');
    });
})      
