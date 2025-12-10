# Security Best Practices

This document outlines security measures and best practices for the Loja Social IPCA project.

## Environment Variables

All sensitive configuration should be stored in `.env` files (NOT committed to git):

```
REACT_APP_API_URL=http://backend-api.example.com
REACT_APP_API_TIMEOUT=5000
```

See `.env.example` for the full list of required variables.

## Authentication

- **JWT Tokens**: Stored in `localStorage` after login
- **Interceptors**: All API requests include Bearer token automatically
- **Auto-logout**: If a 401 (Unauthorized) response is received, the user is logged out

Example:
```typescript
const token = localStorage.getItem("authToken");
// Token is added to headers automatically via interceptors
```

## Form Validation

All user inputs must be validated using the `validation.ts` utility:

```typescript
import { validateFormData, donationSchema } from "../utils/validation";

const { valid, errors } = validateFormData(donationSchema, formData);
if (!valid) {
  console.log("Validation errors:", errors);
}
```

## API Security

### Request Interceptors
- ✅ Automatically attach authentication tokens
- ✅ Validate request headers

### Response Interceptors
- ✅ Validate HTTP status codes
- ✅ Handle 401 (Unauthorized) responses
- ✅ Log errors for debugging

### HTTPS
- ✅ Always use HTTPS in production
- ✅ Set `REACT_APP_API_URL` to HTTPS endpoint

## CORS & CSP

Since this project is deployed on GitHub Pages (static hosting), CORS is handled at the backend:

1. **Backend must allow GitHub Pages origin**:
   ```
   Access-Control-Allow-Origin: https://Arianna-Cicero.github.io
   ```

2. **For local development**, proxy API calls or configure CORS appropriately

## Secrets Management

### ❌ Never commit:
- API keys
- Passwords
- JWT tokens
- Private keys
- Database credentials

### ✅ Use instead:
- Environment variables (`.env` files)
- GitHub Secrets (for CI/CD)
- Secure secret management services

## Input Sanitization

React automatically escapes JSX content, preventing XSS attacks:

```typescript
// ✅ Safe - React escapes the value
<p>{userInput}</p>

// ❌ Unsafe - DO NOT USE
<p dangerouslySetInnerHTML={{ __html: userInput }} />
```

## External Links

All external links use `noopener noreferrer` to prevent window.opener attacks:

```typescript
<a href="https://external.com" target="_blank" rel="noopener noreferrer">
  External Link
</a>
```

## Dependency Security

### Regular Updates
- Run `npm audit` to check for vulnerabilities
- Update packages with `npm update`
- Use `npm outdated` to find newer versions

### Minimal Dependencies
- Only include necessary packages
- Review `node_modules` size with `npm ls`

### Pinned Versions
For production, consider pinning major versions in `package-lock.json`

## Testing

- ✅ Write unit tests for validation logic
- ✅ Test API error handling
- ✅ Test form validation scenarios

Run tests with:
```bash
npm test
```

## Deployment Security

### GitHub Pages
- Automatic HTTPS (enforced)
- Static content only (no backend code exposed)
- No environment variables are visible in build

### Environment Variables
GitHub Actions secrets are used for deploying:
```yaml
env:
  REACT_APP_API_URL: ${{ secrets.API_URL }}
```

## Monitoring & Logging

- ✅ Console logs for debugging (removed in production)
- ✅ Error tracking for failed API calls
- ✅ Monitor browser DevTools for security warnings

## Reporting Security Issues

If you discover a security vulnerability, please:
1. **Do not** open a public issue
2. Contact the maintainers privately
3. Provide detailed steps to reproduce

## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [React Security](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Zod Validation](https://zod.dev/)
