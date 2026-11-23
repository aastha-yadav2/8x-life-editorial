# Contributing Guidelines

Thank you for your interest in improving the 8x editorial web experience. We welcome contributions that uphold high standards of design craft, accessibility, and code clarity.

---

## Development Standards

### 1. Design & Typography Integrity
* Maintain the established editorial palette: `#F5F3EC` (canvas), `#111111` (ink), `#D7FF45` (lime), and `#FF704D` (coral).
* Use fluid typography (`clamp()`) for all primary headings. Do not introduce generic gradients or arbitrary box-shadows.
* Ensure all interactive elements retain visible `:focus-visible` styling for keyboard accessibility.

### 2. Code Quality & Formatting
* Write clean, idiomatic TypeScript with strict type definitions.
* Avoid `any` types wherever possible.
* Structure components logically into presentational and data layers.
* Verify that changes introduce no horizontal scroll on viewports between 360px and 1440px.

---

## Contribution Workflow

1. **Fork & Branch:** Create a feature branch originating from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. **Implement Changes:** Keep edits modular and test locally across desktop and mobile screens.
3. **Verify Build:** Run the build pipeline before opening a pull request:
   ```bash
   npm run build
   ```
4. **Commit Conventions:** Follow clear imperative commit messages:
   * `feat: add new capability`
   * `fix: correct layout shift on mobile viewports`
   * `docs: update deployment guidelines`
   * `refactor: optimize component hierarchy`
5. **Submit Pull Request:** Provide a brief summary of visual or functional adjustments along with screenshots where applicable.
