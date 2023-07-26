### Django and React.js Article Management App

This is a web application built with Django (backend) and React.js (frontend) for managing articles. Users can log in, view, insert, update, and delete articles.

### Features:

- User Authentication: Users can register and log in to the application. Authentication is handled using JWT (JSON Web Tokens).
- View Articles: Logged-in users can view a list of articles fetched from the backend API.
- Insert Article: Users can insert new articles by providing a title and description.
- Update Article: Users can update existing articles by editing the title and description.
- Delete Article: Users can delete articles they no longer need.

### Technologies Used:

- Django: A high-level Python web framework for building the backend API.
- Django Rest Framework (DRF): A powerful and flexible toolkit for building Web APIs in Django.
- React.js: A JavaScript library for building user interfaces.
- React Router: A routing library for React.js applications.
- React Cookies: A library for handling cookies in React.js.
- Bootstrap: A popular CSS framework for styling the frontend.
- Axios: A promise-based HTTP client for making API requests.

### Setup Instructions:

1. Clone the repository:
   git clone https://github.com/Craigryy/django-react-system-login.git
   cd django-react-article-app

2. Backend Setup:
   - Create a virtual environment (recommended) and activate it.
   - Install the required Python packages from the requirements.txt file:
     pip install -r requirements.txt
   - Run database migrations:
     python manage.py migrate
   - Create a superuser to access the Django admin panel:
     python manage.py createsuperuser
   - Start the Django development server:
     python manage.py runserver

3. Frontend Setup:
   - Navigate to the frontend directory:
     cd frontend
   - Install the required Node.js packages:
     npm install
   - Start the React development server:
     npm start

4. Access the Application:
   - The backend API will be available at http://127.0.0.1:8000/.
   - The React frontend will be available at http://localhost:3000/.

5. Create API Endpoints:
   - Create API endpoints for logging in, inserting, updating, and deleting articles using Django Rest Framework.

6. Implement React Components:
   - Create React components for login, article list, article form, etc., to interact with the API endpoints.

7. User Authentication:
   - Use JWT for user authentication. After successful login, store the token in cookies for subsequent API requests.

8. Styling:
   - Use Bootstrap classes to style the frontend components for a better user experience.
