# NeoTour

NeoTour is a web application designed to provide users with information about available tours, categorized for easy navigation, and offer personalized tour recommendations. Users can explore tour details, read reviews, and book tours directly from the platform.

## Table of Contents

- Features
- Technologies Used
- Setup and Installation
- Usage

## Features

### Main Page

Tour Categories (Discover):

- Categories are visually distinguished upon selection.
- Tours in the selected category are displayed in a carousel format, allowing users to scroll through using arrows.

Recommended Tours:

- Displayed in a vertical list for easy browsing.

Interactive Elements:

- Let’s Go! button smoothly scrolls the page down to the tours section.
- Selecting a tour redirects to the detailed tour page with more comprehensive information.
- Tour titles are highlighted with a darkened background for readability.

### Detailed Tour Page

Tour Information:

- Displays the main information including photo, name, location, and description.

Reviews:

- Users can scroll vertically to read reviews.

Navigation:

- Go Back button in the top left corner returns to the main page.

Booking:

- Book Now button opens a modal for booking details.
- Dynamic counter for the number of people, with a minimum of 1 and a maximum of 6.
- Mandatory phone number input field, with a pre-filled country code (+996).
- Submission is only possible once the phone number is entered.

### Modals and Popups

Booking Modal:

- Allows users to input booking information.
- Plus and minus buttons dynamically update the number of people.

Notification Popup:

- Confirms booking submission and returns users to the main page upon clicking Ok.

## Technologies Used

- React
- React Router DOM
- React Hooks
- Axios
- React Modal
- React Phone Number Input

## Setup and Installation

1. Clone the Repository:

- git clone https://github.com/yourusername/neotour.git
- cd neotour

2. Install Dependencies:

- npm install

3. Start the Development Server:

- npm start

4. Build for Production:

- npm run build

## Usage

1. Main Page:

- Browse tours by categories using the carousel.
- Check out recommended tours in the vertical list.
- Click on Let’s Go! to navigate to the tours section.

2. Detailed Tour Page:

- Review the detailed information and user reviews for the selected tour.
- Use the Go Back button to return to the main page.
- Click Book Now to initiate the booking process.

3. Booking:

- Input the number of people and phone number.
- Submit the booking and receive a confirmation.
