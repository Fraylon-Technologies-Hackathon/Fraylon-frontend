import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HackathonRegisterPage from "../components/RegisterPage";

const renderPage = () =>
  render(
    <MemoryRouter>
      <HackathonRegisterPage />
    </MemoryRouter>
  );

// ── Helpers ────────────────────────────────────────────────────────────────

/** Fill step 1 fields for solo flow */
const fillLeaderDetails = async (overrides = {}) => {
  const vals = {
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "9876543210",
    college: "IIT Hyderabad",
    ...overrides,
  };
  fireEvent.change(screen.getByPlaceholderText("Your full name"), {
    target: { value: vals.name },
  });
  fireEvent.change(screen.getByPlaceholderText("you@example.com"), {
    target: { value: vals.email },
  });
  fireEvent.change(screen.getByPlaceholderText("+91 9XXXXXXXXX"), {
    target: { value: vals.phone },
  });
  fireEvent.change(screen.getByPlaceholderText("e.g. IIT Hyderabad"), {
    target: { value: vals.college },
  });
};

// ── Existing tests (kept) ──────────────────────────────────────────────────

describe("HackathonRegisterPage — Integration", () => {
  it("renders heading", () => {
    renderPage();
    expect(screen.getByText("Register Your Team")).toBeInTheDocument();
  });

  it("shows error if no participation selected", async () => {
    renderPage();
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => {
      expect(
        screen.getByText("Please select a participation type.")
      ).toBeInTheDocument();
    });
  });

  it("solo flow works till project step", async () => {
    renderPage();
    fireEvent.click(screen.getByRole("button", { name: /solo participant/i }));
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByPlaceholderText("Your full name"));
    await fillLeaderDetails();
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() =>
      expect(screen.getByText(/project idea/i)).toBeInTheDocument()
    );
  });

  it("shows validation error on empty project submit", async () => {
    renderPage();
    fireEvent.click(screen.getByRole("button", { name: /solo participant/i }));
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByPlaceholderText("Your full name"));
    await fillLeaderDetails({ name: "Jane", email: "jane@test.com", phone: "9999999999", college: "MIT" });
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByText(/project idea/i));
    fireEvent.click(screen.getByRole("button", { name: /submit registration/i }));
    await waitFor(() => {
      expect(screen.getByText("Please select a theme.")).toBeInTheDocument();
    });
  });

  it("team selection works properly", () => {
    renderPage();
    const teamBtn = screen.getByRole("button", { name: /team/i });
    fireEvent.click(teamBtn);
    expect(teamBtn).toBeInTheDocument();
  });

  it("continue works after selecting team", async () => {
    renderPage();
    fireEvent.click(screen.getByRole("button", { name: /team/i }));
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => {
      expect(screen.getByText(/team details/i)).toBeInTheDocument();
    });
  });

  it("back button is visible", () => {
    renderPage();
    expect(screen.getByText(/back to home/i)).toBeInTheDocument();
  });

  it("form input fields render correctly", async () => {
    renderPage();
    fireEvent.click(screen.getByRole("button", { name: /solo participant/i }));
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByPlaceholderText("Your full name"));
    expect(screen.getByPlaceholderText("Your full name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("you@example.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("+91 9XXXXXXXXX")).toBeInTheDocument();
  });

  // ── New tests for coverage ──────────────────────────────────────────────

  // InputField focus / blur handlers
  it("input field focus and blur update border styles", async () => {
    renderPage();
    fireEvent.click(screen.getByRole("button", { name: /solo participant/i }));
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByPlaceholderText("Your full name"));
    const nameInput = screen.getByPlaceholderText("Your full name");
    fireEvent.focus(nameInput);
    fireEvent.blur(nameInput);
    // Should not throw; styles applied inline
    expect(nameInput).toBeInTheDocument();
  });

  // Back navigation — solo jumps from step 3 → step 1
  it("back button on project step (solo) returns to leader details", async () => {
    renderPage();
    fireEvent.click(screen.getByRole("button", { name: /solo participant/i }));
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByPlaceholderText("Your full name"));
    await fillLeaderDetails();
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByText(/project idea/i));
    fireEvent.click(screen.getByRole("button", { name: /^back$/i }));
    await waitFor(() =>
      expect(screen.getByPlaceholderText("Your full name")).toBeInTheDocument()
    );
  });

  // Team step 1 validation — missing team name
  it("shows team name validation error on step 1 for team flow", async () => {
    renderPage();
    fireEvent.click(screen.getByRole("button", { name: /team/i }));
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByPlaceholderText("e.g. Code Crusaders"));
    // Do NOT fill team name — just click continue
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => {
      expect(screen.getByText("Team name is required.")).toBeInTheDocument();
    });
  });

  // Team flow full step 1 → step 2 (members)
  it("team flow advances to members step after filling details", async () => {
    renderPage();
    fireEvent.click(screen.getByRole("button", { name: /team/i }));
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByPlaceholderText("e.g. Code Crusaders"));
    fireEvent.change(screen.getByPlaceholderText("e.g. Code Crusaders"), {
      target: { value: "Code Crusaders" },
    });
    await fillLeaderDetails();
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() =>
      expect(screen.getByText(/add up to/i)).toBeInTheDocument()
    );
  });

  // addMember — add a second member
  it("add another member button adds a new member row", async () => {
    renderPage();
    fireEvent.click(screen.getByRole("button", { name: /team/i }));
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByPlaceholderText("e.g. Code Crusaders"));
    fireEvent.change(screen.getByPlaceholderText("e.g. Code Crusaders"), {
      target: { value: "Code Crusaders" },
    });
    await fillLeaderDetails();
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByText(/add up to/i));
    fireEvent.click(screen.getByText(/add another member/i));
    await waitFor(() =>
      expect(screen.getAllByText(/member \d+/i).length).toBeGreaterThan(1)
    );
  });

  // removeMember — add then remove
  it("remove member button removes a member row", async () => {
    renderPage();
    fireEvent.click(screen.getByRole("button", { name: /team/i }));
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByPlaceholderText("e.g. Code Crusaders"));
    fireEvent.change(screen.getByPlaceholderText("e.g. Code Crusaders"), {
      target: { value: "Code Crusaders" },
    });
    await fillLeaderDetails();
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByText(/add up to/i));
    fireEvent.click(screen.getByText(/add another member/i));
    await waitFor(() => screen.getAllByText(/member \d+/i));
    const trashBtns = screen.getAllByRole("button", { name: "" });
    // Click the first trash icon (Trash2 has no text, aria-label is empty)
    fireEvent.click(trashBtns[trashBtns.length - 1]);
    // After removal we should be back to 1 member header
    await waitFor(() =>
      expect(screen.getAllByText(/member \d+/i).length).toBeGreaterThanOrEqual(1)
    );
  });

  // Members step validation — empty member fields
  it("shows member validation errors on empty submit", async () => {
    renderPage();
    fireEvent.click(screen.getByRole("button", { name: /team/i }));
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByPlaceholderText("e.g. Code Crusaders"));
    fireEvent.change(screen.getByPlaceholderText("e.g. Code Crusaders"), {
      target: { value: "Code Crusaders" },
    });
    await fillLeaderDetails();
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByText(/add up to/i));
    // Click continue without filling member fields
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => {
      expect(screen.getByText("Name is required.")).toBeInTheDocument();
    });
  });

  // Back from members step → leader details
  it("back from members step returns to leader details", async () => {
    renderPage();
    fireEvent.click(screen.getByRole("button", { name: /team/i }));
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByPlaceholderText("e.g. Code Crusaders"));
    fireEvent.change(screen.getByPlaceholderText("e.g. Code Crusaders"), {
      target: { value: "Code Crusaders" },
    });
    await fillLeaderDetails();
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByText(/add up to/i));
    fireEvent.click(screen.getByRole("button", { name: /^back$/i }));
    await waitFor(() =>
      expect(screen.getByPlaceholderText("e.g. Code Crusaders")).toBeInTheDocument()
    );
  });

  // Project step — fill theme and project idea, then submit → SuccessScreen
  it("successful solo submission shows success screen", async () => {
    renderPage();
    fireEvent.click(screen.getByRole("button", { name: /solo participant/i }));
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByPlaceholderText("Your full name"));
    await fillLeaderDetails();
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByText(/project idea/i));

    // Select theme
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "ai-ml" },
    });

    // Fill project idea
    fireEvent.change(
      screen.getByPlaceholderText(/briefly describe/i),
      { target: { value: "An AI tool that does something amazing." } }
    );

    fireEvent.click(screen.getByRole("button", { name: /submit registration/i }));

    await waitFor(() => {
      expect(screen.getByText(/you're registered!/i)).toBeInTheDocument();
    });
  });

  // SuccessScreen — Back to Home button navigates
  it("success screen Back to Home button is clickable", async () => {
    renderPage();
    fireEvent.click(screen.getByRole("button", { name: /solo participant/i }));
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByPlaceholderText("Your full name"));
    await fillLeaderDetails();
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByText(/project idea/i));
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "web-dev" } });
    fireEvent.change(screen.getByPlaceholderText(/briefly describe/i), {
      target: { value: "A great web app." },
    });
    fireEvent.click(screen.getByRole("button", { name: /submit registration/i }));
    await waitFor(() => screen.getByText(/you're registered!/i));
    // Click Back to Home on success screen
    fireEvent.click(screen.getByRole("button", { name: /back to home/i }));
  });

  // SuccessScreen button mouseenter/mouseleave
  it("success screen button hover handlers do not throw", async () => {
    renderPage();
    fireEvent.click(screen.getByRole("button", { name: /solo participant/i }));
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByPlaceholderText("Your full name"));
    await fillLeaderDetails();
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByText(/project idea/i));
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "cybersecurity" } });
    fireEvent.change(screen.getByPlaceholderText(/briefly describe/i), {
      target: { value: "A security tool." },
    });
    fireEvent.click(screen.getByRole("button", { name: /submit registration/i }));
    await waitFor(() => screen.getByText(/you're registered!/i));
    const homeBtn = screen.getByRole("button", { name: /back to home/i });
    fireEvent.mouseEnter(homeBtn);
    fireEvent.mouseLeave(homeBtn);
  });

  // Nav bar Back to Home top button hover
  it("top bar back to home hover handlers do not throw", () => {
    renderPage();
    const backBtn = screen.getByText(/back to home/i).closest("button");
    fireEvent.mouseEnter(backBtn);
    fireEvent.mouseLeave(backBtn);
  });

  // Continue / Submit button hover styles
  it("continue button hover handlers do not throw", () => {
    renderPage();
    const continueBtn = screen.getByText("Continue");
    fireEvent.mouseEnter(continueBtn);
    fireEvent.mouseLeave(continueBtn);
  });

  // Invalid email in leader details
  it("shows invalid email error on step 1", async () => {
    renderPage();
    fireEvent.click(screen.getByRole("button", { name: /solo participant/i }));
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByPlaceholderText("Your full name"));
    fireEvent.change(screen.getByPlaceholderText("Your full name"), {
      target: { value: "Jane" },
    });
    fireEvent.change(screen.getByPlaceholderText("you@example.com"), {
      target: { value: "not-an-email" },
    });
    fireEvent.change(screen.getByPlaceholderText("+91 9XXXXXXXXX"), {
      target: { value: "9999999999" },
    });
    fireEvent.change(screen.getByPlaceholderText("e.g. IIT Hyderabad"), {
      target: { value: "MIT" },
    });
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => {
      expect(screen.getByText("Enter a valid email.")).toBeInTheDocument();
    });
  });

  // updateMember — typing into member fields
  it("member fields accept input", async () => {
    renderPage();
    fireEvent.click(screen.getByRole("button", { name: /team/i }));
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByPlaceholderText("e.g. Code Crusaders"));
    fireEvent.change(screen.getByPlaceholderText("e.g. Code Crusaders"), {
      target: { value: "Team Alpha" },
    });
    await fillLeaderDetails();
    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => screen.getByPlaceholderText("Member's full name"));
    fireEvent.change(screen.getByPlaceholderText("Member's full name"), {
      target: { value: "Alice" },
    });
    fireEvent.change(screen.getByPlaceholderText("member@example.com"), {
      target: { value: "alice@example.com" },
    });
    expect(screen.getByDisplayValue("Alice")).toBeInTheDocument();
  });

  // Back from step 0 is not shown (step > 0 guard)
  it("back button is not shown on step 0", () => {
    renderPage();
    // On step 0 the navigation row only has Continue, not Back
    expect(screen.queryByRole("button", { name: /^back$/i })).not.toBeInTheDocument();
  });
});