```markdown
# ListApp

## Overview
ListApp is a simple web application designed to provide an interactive user interface for selecting fruits using checkboxes. Built with Angular and styled using Bootstrap, it allows users to move selected fruits from one box to another seamlessly.

## Technologies Used
- **Frontend**: Angular (version 9.1.14), Typescript, Bootstrap (CSS)
- **Backend**: Not applicable for this project (Frontend only)
- **Database**: Not applicable (No SQL integration in this version)

## Features
- User-friendly interface with two boxes:
  - The first box contains a list of fruits represented as checkboxes.
  - The second box is initially empty and populates with selected fruits.
- Dynamic interaction: When a user clicks on a fruit name, it moves from the first box to the second.

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd list-app
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Development Server
Run the following command to start a development server:
```bash
ng serve
```
Navigate to `http://localhost:4200/` in your browser. The app will automatically reload if you make changes to any source files.

## File Structure
```
list-app/
└── src/
    └── app/
        ├── app.component.html   # Presentation file
        ├── app.component.ts      # Business Logic
        └── app.component.css     # CSS Stylesheet
```

## Build
To build the project for production, use the following command:
```bash
ng build --prod
```
The build artifacts will be stored in the `dist/` directory.
