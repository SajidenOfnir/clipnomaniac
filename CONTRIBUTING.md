# Contributing to ClipNoManiac

First off, thank you for considering contributing to ClipNoManiac! 🎉

## Code of Conduct

This project adheres to the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Screenshots** (if applicable)
- **Environment details** (OS, browser, Node version)

**Template:**
Describe the bug
A clear description of what the bug is.
To Reproduce

Go to '...'
Click on '...'
See error

Expected behavior
What you expected to happen.
Screenshots
If applicable, add screenshots.
Environment:

OS: [e.g. Windows 11]
Browser: [e.g. Chrome 120]
Node version: [e.g. 18.17.0]

### Suggesting Features

Feature suggestions are welcome! Please include:

- **Clear use case**
- **Expected behavior**
- **Mockups/examples** (if applicable)
- **Why this benefits the project**

### Pull Requests

1. **Fork the repo** and create your branch from `main`
2. **Make your changes**
   - Follow code style (see below)
   - Add tests if applicable
   - Update documentation
3. **Test your changes**
```bash
   npm run dev    # Test in development
   npm run build  # Ensure it builds
```
4. **Commit with clear messages**
feat: add movie filtering by genre
fix: resolve star rating display issue
docs: update installation instructions
style: format code with prettier
refactor: simplify movie card component

5. **Push to your fork** and submit a pull request

## Code Style Guidelines

### TypeScript/React
```typescript
// ✅ Good
interface MovieCardProps {
  movie: Movie
  onClick?: () => void
}

export const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  return <div>...</div>
}

// ❌ Bad
export default function MovieCard(props) {
  return <div>...</div>
}
```

### Naming Conventions

- **Components**: PascalCase (`MovieCard.tsx`)
- **Hooks**: camelCase with 'use' prefix (`useDebounce.ts`)
- **Utils**: camelCase (`formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)

### File Organization
src/<br>
├── components/<br>
│   └── movies/<br>
│       ├── MovieCard.tsx        # Component<br>
│       ├── MovieCard.test.tsx   # Tests<br>
│       └── index.ts             # Barrel export<br>

### CSS/Tailwind

- Use Tailwind utility classes
- Avoid inline styles unless dynamic
- Use custom colors from config
- Maintain responsive design
```tsx
// ✅ Good
<div className="flex items-center gap-4 p-4 rounded-xl bg-dark-surface">

// ❌ Bad
<div style={{ display: 'flex', padding: '16px' }}>
```

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructure
- `test:` Adding tests
- `chore:` Maintenance

## Testing

Before submitting:
```bash
# Lint code
npm run lint

# Type check
npm run type-check

# Build
npm run build
```

## Documentation

- Update README.md for user-facing changes
- Add JSDoc comments for complex functions
- Update relevant docs in `/docs` folder

## Questions?

Feel free to open an issue with the `question` label!

---

Thank you for contributing! 🚀
