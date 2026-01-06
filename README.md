# SafariDesk Frontend

A modern, responsive helpdesk and ticketing system frontend built with React, TypeScript, and Tailwind CSS. SafariDesk provides an intuitive interface for managing support tickets, tasks, knowledge base articles, and team collaboration.

## 🚀 Features

### Ticket Management
- **Unified Dashboard**: View and manage all tickets in one place
- **Multiple View Modes**: Detailed, Card, and List views
- **Advanced Filtering**: Filter by status, priority, assignee, department, category, and date
- **Real-time Updates**: Live ticket updates and notifications
- **Inline Editing**: Quick edit ticket properties without leaving the page
- **Bulk Actions**: Perform actions on multiple tickets simultaneously
- **Ticket Merging**: Combine related tickets with ease
- **Rich Text Editor**: Format ticket descriptions and comments
- **File Attachments**: Upload and manage ticket attachments
- **Activity Stream**: Complete audit trail of all ticket activities

### SLA Management
- **Visual SLA Status**: Color-coded indicators for SLA health
- **Breach Alerts**: Immediate notifications for SLA breaches
- **Configuration Panel**: Easy enable/disable SLA tracking
- **Policy Management**: Create and manage SLA policies with different targets
- **Business Hours**: Configure operational hours and holidays
- **SLA Timeline**: Visual representation of SLA progress

### Task Management
- **Task Linking**: Associate tasks with tickets
- **Task Board**: Kanban-style task visualization
- **Status Tracking**: Monitor task progress
- **Comments & Collaboration**: Discuss tasks with team members
- **Task Assignment**: Assign tasks to team members

### Knowledge Base
- **Category Organization**: Hierarchical category structure
- **Rich Article Editor**: WYSIWYG editor for creating articles
- **Search Functionality**: Full-text search across all articles
- **Public Portal**: Customer-facing knowledge base
- **Analytics Dashboard**: Track article views and engagement
- **Featured Articles**: Highlight important content

### User Interface
- **Dark Mode**: System-wide dark mode support
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Accessibility**: WCAG 2.1 compliant
- **Customizable Views**: Save your preferred view settings
- **Toast Notifications**: Non-intrusive success/error messages
- **Loading States**: Skeleton screens for better UX

### Team Collaboration
- **@Mentions**: Tag team members in comments
- **Watchers**: Follow tickets for updates
- **Internal Notes**: Private comments for team members
- **Department Views**: Filter by department
- **Agent Profiles**: View agent workload and statistics

## 🛠️ Technology Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form + Zod
- **Date Handling**: date-fns
- **Icons**: Lucide React
- **Rich Text**: TipTap / Quill
- **Charts**: Recharts (for analytics)

## 📋 Prerequisites

- Node.js 16.x or higher
- npm 8.x or higher (or yarn/pnpm)
- SafariDesk Backend running (see backend README)

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/SafariDesk-Front.git
cd SafariDesk-Front
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Configuration

Create a `.env` file in the project root:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:8000/api/v1
VITE_WS_URL=ws://localhost:8000

# App Configuration
VITE_APP_NAME=SafariDesk
VITE_APP_VERSION=1.0.0

# Feature Flags (Optional)
VITE_ENABLE_DARK_MODE=true
VITE_ENABLE_ANALYTICS=false
```

### 4. Start Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
SafariDesk-Front/
├── src/
│   ├── assets/              # Static assets (images, fonts)
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Base UI components (Button, Modal, etc.)
│   │   ├── layout/         # Layout components (Navbar, Sidebar)
│   │   ├── tickets/        # Ticket-specific components
│   │   └── forms/          # Form components
│   ├── pages/               # Page components
│   │   ├── ticket/         # Ticket management pages
│   │   ├── task/           # Task management pages
│   │   ├── sla/            # SLA management pages
│   │   ├── kb/             # Knowledge base pages
│   │   └── settings/       # Settings pages
│   ├── services/            # API services
│   │   ├── apis.ts         # API endpoint definitions
│   │   └── http.ts         # HTTP client configuration
│   ├── stores/              # Zustand state stores
│   │   ├── authStore.ts    # Authentication state
│   │   └── themeStore.ts   # Theme/UI state
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   │   ├── helper.ts       # General helpers
│   │   └── displayHelpers.ts # Display/formatting helpers
│   ├── hooks/               # Custom React hooks
│   ├── routes/              # Route definitions
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                  # Public static files
├── .env                     # Environment variables
├── .env.example            # Environment template
├── index.html              # HTML entry point
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## 🎨 Styling & Theming

### Tailwind CSS

The project uses Tailwind CSS with custom configuration:

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {...},
        secondary: {...},
      },
    },
  },
};
```

### Dark Mode

Toggle dark mode:

```typescript
import { useThemeStore } from './stores/themeStore';

const { theme, toggleTheme } = useThemeStore();
```

## 🔒 Authentication

The app uses JWT-based authentication:

```typescript
// Login
import { useAuthStore } from './stores/authStore';

const { login } = useAuthStore();
await login(email, password);

// Protected Routes
<PrivateRoute>
  <TicketList />
</PrivateRoute>
```

## 📡 API Integration

API calls are centralized in the `services/` directory:

```typescript
// services/apis.ts
export const APIS = {
  LIST_TICKETS: `${BASE_URL}/ticket/list/`,
  CREATE_TICKET: `${BASE_URL}/ticket/create/`,
  // ... more endpoints
};

// Usage in components
import http from '../services/http';
import { APIS } from '../services/apis';

const tickets = await http.get(APIS.LIST_TICKETS);
```

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run e2e tests
npm run test:e2e
```

## 🏗️ Building for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

The built files will be in the `dist/` directory.

## 🚀 Deployment

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/SafariDesk-Front/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### Docker Deployment

```bash
# Build Docker image
docker build -t safariDesk-front .

# Run container
docker run -p 80:80 safariDesk-front
```

### Vercel/Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables

## 🔌 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API URL | `http://localhost:8000/api/v1` |
| `VITE_WS_URL` | WebSocket URL | `ws://localhost:8000` |
| `VITE_APP_NAME` | Application name | `SafariDesk` |
| `VITE_ENABLE_DARK_MODE` | Enable dark mode | `true` |

## 🎯 Key Features Implementation

### Ticket Views

```typescript
// Multiple view modes
const [viewMode, setViewMode] = useState<'detailed' | 'card' | 'list'>('list');

// Filtering
const filteredTickets = tickets.filter(ticket => {
  if (statusFilter !== 'all' && ticket.status !== statusFilter) return false;
  if (priorityFilter !== 'all' && ticket.priority !== priorityFilter) return false;
  return true;
});
```

### Real-time Updates

```typescript
// WebSocket connection
const ws = new WebSocket(VITE_WS_URL);

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  // Update UI based on message
};
```

### Bulk Actions

```typescript
// Select multiple tickets
const [selectedTickets, setSelectedTickets] = useState<Set<string>>(new Set());

// Perform bulk action
const handleBulkArchive = async () => {
  await http.post('/ticket/bulk/archive/', {
    ticket_ids: Array.from(selectedTickets)
  });
};
```

## 🎨 Components

### Reusable UI Components

- **Button**: Customizable button with variants
- **Modal**: Accessible modal dialogs
- **Toast**: Non-intrusive notifications
- **Dropdown**: Dropdown menus with keyboard navigation
- **Input**: Form inputs with validation
- **Select**: Dropdown selects
- **Tooltip**: Helpful tooltips
- **Badge**: Status indicators
- **Skeleton**: Loading placeholders

### Usage Example

```tsx
import Button from './components/ui/Button';
import { Modal } from './components/ui/Modal';

<Button variant="primary" onClick={handleClick}>
  Create Ticket
</Button>

<Modal isOpen={isOpen} onClose={onClose} title="New Ticket">
  {/* Modal content */}
</Modal>
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Follow the TypeScript style guide
- Use functional components with hooks
- Write meaningful component and function names
- Add JSDoc comments for complex functions
- Ensure all components are accessible
- Write tests for new features

### Commit Message Convention

```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Format code
refactor: Refactor code
test: Add tests
chore: Update dependencies
```

## 🐛 Bug Reports

Please report bugs by opening an issue on GitHub. Include:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)
- Browser and OS information

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React and the amazing React ecosystem
- Tailwind CSS for the utility-first approach
- All open source contributors
- The community for feedback and support

## 📞 Support

- Documentation: [https://docs.safariDesk.com](https://docs.safariDesk.com)
- GitHub Issues: [https://github.com/yourusername/SafariDesk-Front/issues](https://github.com/yourusername/SafariDesk-Front/issues)
- Email: support@safariDesk.com

## 🗺️ Roadmap

- [ ] PWA support for offline functionality
- [ ] Mobile app with React Native
- [ ] Advanced search with filters
- [ ] Custom dashboard widgets
- [ ] Keyboard shortcuts
- [ ] Multi-language support (i18n)
- [ ] Accessibility improvements
- [ ] Performance optimizations
- [ ] Component library documentation

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Bundle Size: < 500KB (gzipped)

## 🔐 Security

- XSS Protection
- CSRF Protection
- Secure HTTP-only cookies
- Input sanitization
- Content Security Policy

---

Made with ❤️ by the SafariDesk Team
