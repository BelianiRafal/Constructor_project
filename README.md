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

1. **Clone the repository**
   ```sh
   git clone https://github.com/BelianiRafal/Constructor_project.git
   cd Constructor_project
   ```

2. **Open `index.html` in your browser via Live Server**  
   [Live Server VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

3. **Configure your campaigns**  
   Add new campaigns in campaigns/ and export them
   Edit `app.js` to import campaigns.

4. **Customize templates**  
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