# Law List Project Guidelines

This document provides essential information for developers working on the Law List project.

## Build/Configuration Instructions

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm (comes with Node.js)

### Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
   Note: The `--legacy-peer-deps` flag is required due to dependency conflicts between React 19 and some Radix UI components.

### Development
To start the development server:
```bash
npm run dev
```
This will start the Next.js development server at http://localhost:3000.

### Production Build
To create a production build:
```bash
npm run build
```

To start the production server:
```bash
npm run start
```

## Testing Information

### Testing Framework
This project uses Playwright for end-to-end testing.

### Running Tests
To run all tests:
```bash
npm run test
```

To view the HTML test report after running tests:
```bash
npx playwright show-report
```

### Test Structure
- Tests are located in the `tests` directory
- The Playwright configuration is in `playwright.config.ts`

### Adding New Tests
1. Create a new test file in the `tests` directory with the `.spec.ts` extension
2. Import the necessary Playwright modules:
   ```typescript
   import { test, expect } from '@playwright/test';
   ```
3. Write your test using the Playwright API:
   ```typescript
   test('test description', async ({ page }) => {
     // Test code here
   });
   ```

### Example Test
Here's a simple test that checks if the homepage loads correctly:

```typescript
import { test, expect } from '@playwright/test';

test('homepage has title and loads correctly', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  // Check that the page has a title
  const title = await page.title();
  expect(title).toBeTruthy();
  
  // Check that the page loads without errors
  const body = await page.locator('body');
  await expect(body).toBeVisible();
});
```

## Additional Development Information

### Project Structure
- `src/app`: Next.js App Router pages and layouts
- `src/components`: React components
  - `src/components/ui`: Reusable UI components
- `public`: Static assets
- `tests`: Playwright tests

### UI Components
This project uses a combination of:
- Tailwind CSS for styling
- Radix UI for accessible components
- Framer Motion for animations

### Code Style
- TypeScript is used throughout the project
- ESLint is configured for linting
- Use the `npm run lint` command to check for linting issues

### State Management
The project uses React's built-in state management with hooks. No external state management library is used.

### Performance Considerations
- Use Next.js Image component for optimized images
- Implement code splitting where appropriate
- Minimize the use of client-side JavaScript where possible

### Troubleshooting
- If you encounter dependency issues, try using `--legacy-peer-deps` flag with npm commands
- For Playwright test failures, check the HTML report for detailed information