export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  tag: string;
  readTime: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "web-development-trends-2026",
    title: "Web Development Trends in 2026: What Every Developer Should Know",
    excerpt: "Discover the latest technologies and practices shaping modern web development, from AI-assisted coding to edge computing.",
    image: "/blog/blog1.png",
    date: "June 10, 2026",
    tag: "Development",
    readTime: "7 min read",
    author: "M. Maaz",
    content: `
# Web Development Trends in 2026: What Every Developer Should Know

The landscape of web development continues to evolve at a rapid pace. As we progress through 2026, several key trends have emerged that are reshaping how developers build, deploy, and maintain web applications.

## The Rise of AI-Assisted Development

Artificial Intelligence has become an integral part of the development workflow. Tools powered by large language models are now used for:

- **Code Generation**: AI can generate boilerplate code, reducing development time significantly
- **Bug Detection**: Automated analysis helps identify potential issues before they reach production
- **Documentation**: AI tools can automatically generate comprehensive documentation
- **Testing**: Intelligent test case generation and coverage analysis

## Server-Side Rendering and Edge Computing

The debate between client-side and server-side rendering has evolved. In 2026, we're seeing a hybrid approach:

- Next.js and similar frameworks now prioritize server components
- Edge computing brings processing closer to users for better performance
- Streaming responses reduce Time to First Byte (TTFB)
- Functions-as-a-Service (FaaS) architectures are becoming standard

## Type Safety Across the Stack

TypeScript adoption has reached critical mass, and the trend continues with:

- End-to-end type safety from database to frontend
- tRPC and similar frameworks eliminating the need for REST API contracts
- Type generation tools that create TypeScript definitions from databases
- Improved tooling and faster compilation times

## The Jamstack Evolution

Jamstack has evolved beyond static site generation:

- Real-time capabilities with serverless functions
- On-demand rendering replacing static generation in many cases
- Hybrid caching strategies for optimal performance
- Improved DX with local development that mirrors production

## Component-Driven Architecture

React continues to dominate, but the ecosystem has matured:

- Server Components are becoming the default
- Framework consolidation around Next.js and similar solutions
- Micro-frontends for large-scale applications
- Component composition patterns that prioritize reusability

## Web Performance Metrics

Core Web Vitals remain crucial, with 2026 bringing new emphasis on:

- Interaction to Next Paint (INP) replacing FID
- Optimizing for real-world usage patterns
- Performance budgeting in CI/CD pipelines
- Automated performance regression detection

## Security First Approach

Security is no longer an afterthought:

- Supply chain security takes priority
- Zero-trust architecture principles in web applications
- Automated security scanning in every commit
- OWASP compliance becomes standard practice

## Conclusion

The web development landscape in 2026 demands continuous learning and adaptation. By staying informed about these trends and implementing best practices, developers can build faster, more secure, and more maintainable applications.
    `,
  },
  {
    id: 2,
    slug: "nextjs-performance-optimization",
    title: "Next.js Performance Optimization: Building Lightning-Fast Applications",
    excerpt: "Learn proven techniques to optimize your Next.js applications for maximum performance and user experience.",
    image: "/blog/blog2.png",
    date: "May 25, 2026",
    tag: "React",
    readTime: "9 min read",
    author: "M. Maaz",
    content: `
# Next.js Performance Optimization: Building Lightning-Fast Applications

Performance is a critical factor in web applications. Users expect fast, responsive experiences, and search engines reward fast-loading sites. In this guide, we'll explore practical techniques to optimize your Next.js applications.

## Understanding Core Web Vitals

Before optimizing, understand what matters:

### Largest Contentful Paint (LCP)
- Target: < 2.5 seconds
- Measure: Time when the largest content element appears
- Impact: Directly affects user perception of load speed

### First Input Delay (FID) / Interaction to Next Paint (INP)
- Target: < 100ms (FID) or < 200ms (INP)
- Measure: Response time to user interaction
- Impact: Critical for user experience

### Cumulative Layout Shift (CLS)
- Target: < 0.1
- Measure: Visual instability as elements load
- Impact: Prevents user frustration from unexpected layout changes

## Image Optimization Strategies

Images typically consume 50% of page bandwidth:

### Using Next.js Image Component
\`\`\`tsx
import Image from 'next/image';

export default function OptimizedImage() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero"
      width={1200}
      height={600}
      priority // For LCP images
      placeholder="blur"
      blurDataURL="..."
    />
  );
}
\`\`\`

### WebP Format with Fallbacks
- Next.js automatically serves WebP to modern browsers
- Reduces file size by 25-35%
- Fallback to JPEG for older browsers

### Responsive Images
- Use srcSet and sizes attributes
- Serve appropriately sized images for each device
- Reduce unnecessary bandwidth usage

## Code Splitting and Lazy Loading

Reduce initial JavaScript bundle:

### Dynamic Imports
\`\`\`tsx
const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <p>Loading...</p>
});
\`\`\`

### Route-Based Code Splitting
- Next.js automatically splits code by route
- Each page only loads required JavaScript
- Dramatic reduction in initial bundle size

## Caching Strategies

Implement effective caching:

### HTTP Caching
\`\`\`tsx
// next.config.js
headers: async () => [
  {
    source: '/static/:path*',
    headers: [
      { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
    ]
  }
]
\`\`\`

### Database Query Caching
- Use getStaticProps with revalidation
- Implement ISR (Incremental Static Regeneration)
- Cache frequent queries at database level

## Font Optimization

Fonts significantly impact performance:

### Self-Hosted Fonts
- Reduce external requests
- Faster load times
- Better control over font delivery

### Font Display Strategy
\`\`\`css
@font-face {
  font-display: swap; /* Show fallback font immediately */
}
\`\`\`

## Bundle Analysis

Monitor and reduce bundle size:

### Analyzing Your Bundle
\`\`\`bash
npm install --save-dev @next/bundle-analyzer
\`\`\`

### Identifying Large Dependencies
- Use bundle-analyzer to visualize dependencies
- Find and replace heavy packages
- Consider lighter alternatives

## Database Query Optimization

The backend matters too:

### Efficient Queries
- Use pagination for large datasets
- Index frequently queried fields
- Implement query caching strategies

### Connection Pooling
- Reduce overhead of creating new connections
- Improve response times
- Essential for serverless environments

## Monitoring and Metrics

Track performance continuously:

### Tools to Use
- Google PageSpeed Insights
- Vercel Analytics
- Web Vitals library for custom monitoring
- Sentry for error tracking

## Conclusion

Performance optimization is an ongoing process. By implementing these techniques and continuously monitoring metrics, you can ensure your Next.js applications deliver exceptional user experiences while maintaining competitive SEO rankings.
    `,
  },
  {
    id: 3,
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices: Writing Scalable and Maintainable Code",
    excerpt: "Master TypeScript to write more reliable, maintainable code. Learn best practices used by top development teams.",
    image: "/blog/blog3.png",
    date: "May 15, 2026",
    tag: "TypeScript",
    readTime: "10 min read",
    author: "M. Maaz",
    content: `
# TypeScript Best Practices: Writing Scalable and Maintainable Code

TypeScript has become the standard for JavaScript development, especially in larger projects. Learning TypeScript best practices will make you a more effective developer and help you build more robust applications.

## Setting Up Your TypeScript Environment

### Configuration Best Practices

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
\`\`\`

These settings enable strict type checking and catch many potential bugs at compile time.

## Type Safety Fundamentals

### Avoid 'any' Type

The 'any' type defeats the purpose of TypeScript:

\`\`\`tsx
// ❌ Bad
const value: any = getData();

// ✅ Good
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = getData();
\`\`\`

### Use Union Types Effectively

\`\`\`tsx
type Status = 'pending' | 'success' | 'error';

function handleStatus(status: Status) {
  switch(status) {
    case 'pending':
      return 'Loading...';
    case 'success':
      return 'Done!';
    case 'error':
      return 'Something went wrong';
  }
}
\`\`\`

### Leverage Type Inference

TypeScript can often infer types, reducing boilerplate:

\`\`\`tsx
// TypeScript infers the type
const numbers = [1, 2, 3]; // number[]
const result = numbers.map(n => n * 2); // number[]
\`\`\`

## Advanced Type Patterns

### Generic Types

\`\`\`tsx
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: number;
  name: string;
}

const response: ApiResponse<User> = {
  data: { id: 1, name: 'John' },
  status: 200,
  message: 'Success'
};
\`\`\`

### Conditional Types

\`\`\`tsx
type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>; // true
type B = IsString<123>; // false
\`\`\`

### Utility Types

\`\`\`tsx
interface User {
  id: number;
  name: string;
  email: string;
}

// Partial - all properties optional
type UserPreview = Partial<User>;

// Pick - select specific properties
type UserBasic = Pick<User, 'id' | 'name'>;

// Omit - exclude specific properties
type UserWithoutEmail = Omit<User, 'email'>;

// Record - create object type
type Permissions = Record<'read' | 'write' | 'delete', boolean>;
\`\`\`

## React with TypeScript

### Proper Component Typing

\`\`\`tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary'
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={variant}
    >
      {children}
    </button>
  );
};
\`\`\`

### Type-Safe Hooks

\`\`\`tsx
interface User {
  id: number;
  name: string;
  email: string;
}

const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState(false);

// Type-safe effect
useEffect(() => {
  fetchUser().then(data => setUser(data));
}, []);
\`\`\`

## Error Handling with Types

### Custom Error Classes

\`\`\`tsx
class ApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string
  ) {
    super(message);
  }
}

try {
  throw new ApiError(404, 'User not found');
} catch (error) {
  if (error instanceof ApiError) {
    console.log(error.statusCode); // Fully typed
  }
}
\`\`\`

## Testing with TypeScript

### Type-Safe Tests

\`\`\`tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick}>Click me</Button>
    );
    
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
\`\`\`

## Performance Considerations

### Tree Shaking with TypeScript

\`\`\`tsx
// ESM syntax enables tree shaking
export function usedFunction() {}
export function unusedFunction() {}

// Only usedFunction is included in the bundle
\`\`\`

## Conclusion

TypeScript expertise comes with practice. Start by enabling strict mode and gradually adopt advanced patterns as your project grows. The investment in type safety pays dividends through fewer runtime errors and easier refactoring.
    `,
  },
];