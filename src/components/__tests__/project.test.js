import { render, screen, cleanup } from "@testing-library/react";
import { Projects } from "../Projects";

test('Testing ', () => {
    render(<Projects/>);
    const project = screen.getAllByTestId('project');
    expect(project).toBeInTheDocument;
})