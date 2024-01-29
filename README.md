INTRANET FWD
Our centralized data platform where administrators manage internal communications, relevant news.

Facility
Clone the repository:
``bash git clone https://github.com/Portian02/IntranetFWD-FE.git
Navigate to repository:
bash
Intranet cdFWD-FE
cd frontend_intranet_fwd

Install Dependencies:
npm install

To run the application:
npm start

Contribution
If you want to contribute to this project, follow these steps:

1-Fork the project.
2-Create a new branch (git checkout -b feature/new-feature).
3-Commit your changes (git commit -m ‘Changes’).
4-Upload your branch (git push origin feature/new-feature).
5-Open a Pull Request.

##### Project Structure
IntranetFWD-FE\frontend_intranet_fwd
|- public/
| |- …
|
|- src/
| |- components/

| | |- Admonitions/
Admonition displays and manages admonitions in a web application. Allows users to view, delete, and update admonitions, based on their roles. Additionally, administrators and teachers can add new reprimands.
| | |- AdmonitionsForm /
Allows users to add new warnings through an interactive form. It integrates data validation and selection of users and types of admonitions, in addition to interacting with API services to send data.

| | | |- Announcement/
Shows ads and allows their management. Retrieves ads from the database via an API, allowing administrators to delete and update existing ads. Additionally, administrators can add new ads.

/

| | | |- CalendarList
Displays a list of calendar events and allows them to be managed. Retrieves calendar events from the database via an API. Administrators have the ability to delete and update existing events, as well as add new events to the calendar.
/

| | | |- DocumentsStorage
Displays a list of stored documents and allows them to be managed. Retrieves documents from the database through an API, including their name, description and type. Administrators have the ability to delete and update existing documents, as well as add new documents.
/

| | |-Internalcommunications component
They are internal communications and allow their management. Retrieves internal communications from the database through an API, including its title and content. Administrators have the ability to delete and update existing communications, as well as add new communications.
/

| | |- Internalcommunications component | | |- Internalcommunications component
They are internal communications and allow their management. Retrieves internal communications from the database through an API, including its title and content. Administrators have the ability to delete and update existing communications, as well as add new communications.
/

| | | Login Component
The login form for users. Allows users to enter their credentials (email and password) to authenticate to the application. Once authenticated, the user’s information is stored in the browser’s local storage and redirected to the corresponding home page based on the user’s role.
/

| | | -Navbar
Represents the main navigation bar of the application. Provides links to different sections of the application, such as the home page, user profile, user management (for administrators), communications, regulations, calendars and other additional functionality.

The component also includes an “Others” drop-down button that displays links to additional sections, such as admonitions, justifications, announcements, and documents, when activated.
Additionally, it provides a logout button that allows users to log out of their current session.
/

| | | -Routing
Defines application routes and decides which component to display based on the URL and whether the user is authenticated. Here is a summary:

If the user is not authenticated and is not on the home page, it redirects them to the login page.
If the user is authenticated, it shows different components depending on the route:

| | |- HomePage/ | | |- HomePage/
It represents the main page of the application and contains the following structure:

Includes a Navbar component for the navigation bar.
Displays an image carousel with the ControlledCarousel component.
Presents information about Forward Costa Rica, including study programs and reasons for choosing them.
Includes a Footer component at the bottom of the page for contact information and additional navigation.
In summary, Home offers an overview of Forward Costa Rica and its study programs, along with reasons for choosing the platform, and provides navigation and contact with a footer.

| |- Services
For example

| | | ApiAdmonitions: | | | ApiAdmonitions:
These services allow you to interact with the Admonitions API:

fetchAdmonitions: Retrieves all available admonitions.
deleteAdmonition: Delete a specific admonition.
updateAdmonition: Updates the data of an existing admonition.
fetchAdmonitionstypes: Gets the available admonition types.

|- .gitignore
|- package.json
|- README.md

Used technology
-React
-ReactDOM
-React-Router
-Boostrat
-Sweet-Alert
