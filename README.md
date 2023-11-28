# Mini Job Portal

Mini Job Portal is a web application designed for both recruiters and job seekers. Recruiters can search for candidates based on their skills, and job seekers can create profiles to showcase their skills and interests.

## Features

- **Candidate Registration:** Job seekers can register on the website by providing their name, email, role, and skills. The email must be unique, and at least one skill is required for registration.

- **Recruiter Access:** Recruiters can view the list of registered candidates, search for candidates based on skills, and access candidate profiles.

## Pages

### Home Page

- Route: '/'
- Navbar with the heading "Job Portal."
- Buttons for Candidate List and Candidate Registration.

### Candidate Registration Page

- Route: "/candidate/registration"
- Navbar with the heading "Job Portal."
- Form for candidate registration with fields for name, role, email, and skills. Ability to add multiple skills. Submit and Reset buttons.

### Candidate List Page

- Route: "/candidate/list"
- Navbar with the heading "Job Portal."
- List of candidate profile cards with details such as name, role, email, and skills.
- Search bar for recruiters to search candidates based on skills.
- Total number of profiles found after search.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mini-job-portal.git
   cd mini-job-portal

2. Install dependencies

    npm install

3. Start the server

    node server.js

4. Technologies used

    - front-end: HTML, CSS, Javascript, Vue
    - Backend: Node.js, Express
    - Database: Not implemented in this version(In-memory data store)

## Contributing

If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them.
Push your changes to your fork.
Submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

