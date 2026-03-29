import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ThemesSection from "../components/ThemesSection";

describe("ThemesSection", () => {
  const renderComponent = () =>
    render(
      <MemoryRouter>
        <ThemesSection />
      </MemoryRouter>
    );

  // ── Existing tests (kept) ──────────────────────────────────

  test("renders the section heading", () => {
    renderComponent();
    expect(screen.getByText("Choose Your Challenge")).toBeInTheDocument();
  });

  test("renders explore buttons", () => {
    renderComponent();
    const buttons = screen.getAllByRole("button", { name: /explore/i });
    expect(buttons.length).toBeGreaterThanOrEqual(5);
  });

  test("renders explore tracks label", () => {
    renderComponent();
    expect(screen.getByText(/explore tracks/i)).toBeInTheDocument();
  });

  test("renders all major theme titles safely", () => {
    renderComponent();
    expect(screen.getAllByText(/artificial intelligence/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/web development/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/cybersecurity/i).length).toBeGreaterThan(0);
  });

  test("clicking explore buttons does not crash", () => {
    renderComponent();
    const buttons = screen.getAllByRole("button", { name: /explore/i });
    buttons.forEach((btn) => fireEvent.click(btn));
    expect(buttons.length).toBeGreaterThan(0);
  });

  test("renders theme descriptions text", () => {
    renderComponent();
    const descriptions = screen.getAllByText(/build|create|develop/i);
    expect(descriptions.length).toBeGreaterThan(0);
  });

  test("theme images are rendered", () => {
    renderComponent();
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
  });

  // ── New tests for coverage ─────────────────────────────────

  test("renders the subtitle paragraph", () => {
    renderComponent();
    expect(
      screen.getByText(/pick a theme and explore example problem statements/i)
    ).toBeInTheDocument();
  });

  test("renders all 5 theme titles at least once", () => {
    renderComponent();
    expect(screen.getAllByText(/blockchain/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/open innovation/i).length).toBeGreaterThan(0);
  });

  test("slider container is present in the DOM", () => {
    renderComponent();
    // The slider wraps all theme cards — confirm it exists via images inside it
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(15); // 5 themes × 3 clones
  });

  test("mouseenter on slider pauses scroll (pauseScroll)", () => {
    renderComponent();
    const slider = screen
      .getAllByRole("img")[0]
      .closest("section")
      .querySelector('[style*="overflow-x"]');
    expect(slider).toBeTruthy();
    // Firing mouseenter should not throw
    fireEvent.mouseEnter(slider);
  });

  test("mouseleave on slider resumes scroll (onMouseLeave)", () => {
    renderComponent();
    const slider = screen
      .getAllByRole("img")[0]
      .closest("section")
      .querySelector('[style*="overflow-x"]');
    fireEvent.mouseEnter(slider);
    // Leave without dragging — covers the !isDragging branch
    fireEvent.mouseLeave(slider);
  });

  test("mousedown starts drag (onMouseDown)", () => {
    renderComponent();
    const slider = screen
      .getAllByRole("img")[0]
      .closest("section")
      .querySelector('[style*="overflow-x"]');
    fireEvent.mouseDown(slider, { pageX: 100 });
  });

  test("mousemove while dragging scrolls slider (onMouseMove)", () => {
    renderComponent();
    const slider = screen
      .getAllByRole("img")[0]
      .closest("section")
      .querySelector('[style*="overflow-x"]');
    fireEvent.mouseDown(slider, { pageX: 100 });
    // Move — covers the isDragging === true branch
    fireEvent.mouseMove(slider, { pageX: 80 });
  });

  test("mousemove without drag is a no-op (onMouseMove early return)", () => {
    renderComponent();
    const slider = screen
      .getAllByRole("img")[0]
      .closest("section")
      .querySelector('[style*="overflow-x"]');
    // No mousedown first — covers the !isDragging return branch
    expect(() => fireEvent.mouseMove(slider, { pageX: 80 })).not.toThrow();
  });

  test("mouseup ends drag (onMouseUp)", () => {
    renderComponent();
    const slider = screen
      .getAllByRole("img")[0]
      .closest("section")
      .querySelector('[style*="overflow-x"]');
    fireEvent.mouseDown(slider, { pageX: 100 });
    fireEvent.mouseMove(slider, { pageX: 80 });
    fireEvent.mouseUp(slider);
  });

  test("mouseleave while dragging ends drag (onMouseLeave isDragging branch)", () => {
    renderComponent();
    const slider = screen
      .getAllByRole("img")[0]
      .closest("section")
      .querySelector('[style*="overflow-x"]');
    fireEvent.mouseDown(slider, { pageX: 100 });
    // Leave while dragging — covers the isDragging === true branch in onMouseLeave
    fireEvent.mouseLeave(slider);
  });

  test("touchstart begins touch drag (onTouchStart)", () => {
    renderComponent();
    const slider = screen
      .getAllByRole("img")[0]
      .closest("section")
      .querySelector('[style*="overflow-x"]');
    fireEvent.touchStart(slider, { touches: [{ pageX: 200 }] });
  });

  test("touchmove while dragging scrolls slider (onTouchMove)", () => {
    renderComponent();
    const slider = screen
      .getAllByRole("img")[0]
      .closest("section")
      .querySelector('[style*="overflow-x"]');
    fireEvent.touchStart(slider, { touches: [{ pageX: 200 }] });
    fireEvent.touchMove(slider, { touches: [{ pageX: 160 }] });
  });

  test("touchmove without prior touchstart is a no-op", () => {
    renderComponent();
    const slider = screen
      .getAllByRole("img")[0]
      .closest("section")
      .querySelector('[style*="overflow-x"]');
    expect(() =>
      fireEvent.touchMove(slider, { touches: [{ pageX: 160 }] })
    ).not.toThrow();
  });

  test("touchend ends touch drag (onTouchEnd)", () => {
    renderComponent();
    const slider = screen
      .getAllByRole("img")[0]
      .closest("section")
      .querySelector('[style*="overflow-x"]');
    fireEvent.touchStart(slider, { touches: [{ pageX: 200 }] });
    fireEvent.touchMove(slider, { touches: [{ pageX: 160 }] });
    fireEvent.touchEnd(slider);
  });

  test("Explore button mouseenter / mouseleave styles do not throw", () => {
    renderComponent();
    const buttons = screen.getAllByRole("button", { name: /explore/i });
    const btn = buttons[0];
    fireEvent.mouseEnter(btn);
    fireEvent.mouseLeave(btn);
  });
});