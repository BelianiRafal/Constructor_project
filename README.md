# Constructor Project

> **README & Wiki are W.I.P.**  
> Contributions and suggestions are welcome!

## Project Structure

```
├── app.js                # Our entry point, you import campaigns here
├── config.js
├── index.html
├── assets/               # CSS and static assets
├── api/                  # Data fetching utilities
├── campaigns/
├── components/           # Template components eg. Freebie, Matrix, Timer
├── config/               # Shop/language configs
├── entities/             # Data/entity definitions
├── helpers/              # Helper functions
├── main/                 # Data sources
├── services/             # Service integrations (e.g., Google Auth)
├── templates/            # Newsletter & Landing Page templates, eg. mondayRegularNSLT
├── utils/                # Utility functions and types
└── README.md
```

## Getting Started

### 1. **Install [Node.js](https://nodejs.org/) using [fnm](https://github.com/Schniz/fnm)**
JavaScript runtime environment

```sh
# Install fnm using winget:
winget install Schniz.fnm

# Restart your terminal, then install Node.js LTS:
fnm install lts-latest
fnm use lts-latest
fnm default lts-latest
```

### 2. **Install [pnpm](https://pnpm.io/pnpm-vs-npm)**
Fast, disk space efficient package manager
```sh
corepack enable
corepack prepare pnpm@latest --activate
```

### 3. **Clone the repository**
```sh
git clone https://github.com/BelianiRafal/Constructor_project.git
cd Constructor_project
```

### 4. **Install dependencies**
```sh
pnpm install
```

### 5. **Start the development server**
```sh
pnpm start
```
#### This will launch the Vite server:

```sh
VITE v6.3.5  ready in 152 ms

➜  Local:   http://localhost:5500/
➜  Network: use --host to expose
➜  press h + enter to show help
```


## Configure Your Campaigns

- Add new campaigns in `campaigns/` and export them.
- Edit `app.js` to import campaigns.

## Customize Templates

- Add new templates in [`templates/`](templates/)
- Extend or copy components from [`components/`](components/)
- Update data in [`main/data/`](main/data/)

## Libraries

- [Iconify](https://iconify.design/)
- [js-confetti](https://github.com/loonywizard/js-confetti)

## Contributing

- PRs and issues are welcome!
- See [Wiki](https://github.com/BelianiRafal/Constructor_project/wiki) (W.I.P.) for more documentation.

---

> _README and Wiki are work in progress. For questions, see code comments or open an issue._