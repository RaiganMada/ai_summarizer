# ai_summarizer

A small personal project I did one afternoon. Here I am also writing my first README.

## Overview

This project utilizes an API powered by GPT-4 to generate summaries of articles based on user-provided links. It not only creates summaries on demand but also maintains a session history of all generated articles. Users can conveniently review this history and copy saved links to their clipboard. The session history is stored locally, ensuring easy access and management.

## Quick Start

### Prerequisites

Make sure you have the following installed on your machine:

- Git
- Node.js
- npm (Node Package Manager)


### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/RaiganMada/ai_summarizer.git
cd ai_summarizer
```

2. Install dependencies:

```bash
npm install @reduxjs/toolkit
npm install -D tailwindcss postcss autoprefixer
```

3. Set up .env file:

Create a .env file in the root directory of your project. Add the following variables to it:

```Properties
VITE_RAPID_API_ARTICLE_KEY=
```

Replace API_KEY= with your actual API key.

Note: Ensure .env file is added to .gitignore to prevent it from being tracked by version control.

## Obtaining API Key

To obtain the API key required for the .env file:

- Create an account on RapidAPI's website.
- Navigate to the specific API endpoint at: Article Extractor and Summarizer.
- Choose the Free Subscription option for testing purposes.
- Click the "Playground" button and select the /summarize endpoint from the left sidebar.
- Test the endpoint to confirm its functionality.
- Upon success, navigate to the "Code Snippets" tab on the right sidebar.
- Choose "Node.js" as the target language and "Axios" as the client.
- Locate the API key within the options constant under the 'x-rapidapi-key' parameter.

### Usage

To start the project, run the following command:

```bash
npm run dev
```

Open http://localhost:5173 in your browser to view the project.
