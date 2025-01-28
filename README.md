
# Dashboard Mock

In this challenge, I aimed to mock a [dashboard](https://www.figma.com/community/file/1020707462188017225) within a 2-hour timeframe. Given the limited time, it was not realistic to implement all components and pages from the design.

## Scope of Work
I decided to focus on two main pages:
1. **Dashboard Page**
2. **Table Page**


## Key Considerations
- **Responsive Design**: Ensuring that the layout works well across different screen sizes.
- **Flexibility**: Mocked dynamic behaviors such as data fetching instead of hardcoding static value


## Library
- **Chakra UI**: To mock up UIs on the original dashboard.



## How to Run the Application
1. Install the dependencies:
```bash
npm install  
# or  
yarn install  
# or  
pnpm install  
# or  
bun install  
```

2. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
3. Check http://localhost:3000  
## Project Structure
The project structure follows the standard Next.js application setup, so no detailed explanation is necessary. However, the mocks directory deserves some attention:

### `mocks` directory
The mocks directory contains mock fetch functions designed to simulate data fetching. These functions mimic API calls to keep the app flexible and closer to real-world scenarios.

- Purpose: To provide mock data for the dashboard and table pages without hardcoding it directly into components.
- Output: Each mock function ultimately returns an array of data.
