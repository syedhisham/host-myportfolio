## My-Portfolio

This is my personal portfolio showcasing my skills, projects, and experience as a Full Stack Developer. It includes sections for an introduction, my CV, projects, and contact information.

## Features

- Responsive Design:
  The portfolio is fully responsive, ensuring a great experience on desktop and mobile devices. sales.

- Projects:
  Displays a selection of projects I've worked on, including both frontend and backend development.

- CV:
  A downloadable version of my CV is available for viewing.

- Contact:
  A section with my contact details and social media links.

## Technologies Used

- Frontend:  
  - React.js  
  - Tailwind CSS  

- Backend:  
  - Node.js  
  - Express.js  

- Database:  
  - MongoDB  
  - Mongoose  

- Other Tools:
  - Nodemailer (for email notifications)

## Installation

To run this project locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB (local or remote instance)

### Clone the Repository

```bash
git clone https://github.com/syedhisham/My-Portfolio.git
cd Portfolio
```

### Install Dependencies

For both frontend and backend, run the following commands:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd frontend
npm install
```

### Set Up Environment Variables

Create a `.env` file in the backend directory and add the following environment variables:

#### Backend `.env` file:

```env
PORT=<Your Server Port>
MONGODB_URI=<Your MongoDB URI>
CORS_ORIGIN=<Your Frontend URL >
SMTP_EMAIL=<Your SMTP Email>
SMTP_PASSWORD=<Your SMTP Password>
CLIENT_URL=<Your Frontend URL>
```

### Key Points:

- The Backend and Frontend directories should be treated separately for installation.
- The `.env` files are required to store sensitive keys like MongoDB URI, JWT Secret, and Cloudinary URL.
- You can run both servers locally using `npm run dev`.

### Running the Application

After setting up the environment variables, you can run the application locally:

```bash
# Start the backend server
cd backend
npm run dev

# In a new terminal window, start the frontend server
cd frontend
npm run dev
```

## Hosting

This portfolio is hosted on GitHub Pages. You can view the live version at:  
[https://syedhisham.github.io/My-Portfolio](https://syedhisham.github.io/My-Portfolio)

## Contact

For any inquiries, feel free to reach out at [syedhishamshah27@gmail.com].

## Contributing

Feel free to fork this repository and submit pull requests for any improvements or fixes. If you find any issues or bugs, please open an issue in the repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Email: syedhishamshah27@gmail.com
- GitHub: [https://github.com/syedhisham](https://github.com/syedhisham)
- LinkedIn: [https://www.linkedin.com/in/syed-hisham-shah-676985186/](https://www.linkedin.com/in/syed-hisham-shah-676985186/)
