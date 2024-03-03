Version 1.0.0 - Initial Release:
- Project setup and backend infrastructure establishment.
- Entity creation: User, Booking, Showtime, Movie, and Theater.
- Implemented user roles via UserType enum with "Admin" and "User" roles.
- Basic user registration, booking, and showtime scheduling functionalities added.
- Database schema designed to support core functionalities.

Version 2.0.0 - Database Refinement:
- Separate tables created for User and Admin roles for better role management.
- Database schema refactored to accommodate User and Admin entities.
- Continued development of Movie, Booking, Showtime, and Theater entities.
- Improved data integrity and database structure for scalability.

Version 3.0.0 - Resolving Circular Dependencies:
- Circular dependency issue resolved by adding @JsonIgnoreProperties annotations.
- @JsonIgnoreProperties("showtime") added to Movie and Theater entities to prevent circular references during serialization.
- @JsonIgnoreProperties("booking") applied to User and Showtime entities to address circular dependency.
- Improved data serialization and deserialization.

Version 4.0.0 - Introduction of Basic Frontend:
- Basic functional frontend introduced, enabling user interaction.
- User-friendly interface added for booking and showtime scheduling.
- Integration of frontend with backend services.

Version 5.0.0 - Complex Frontend:
- Enhanced frontend introduced for an improved user experience.
- Improved visual design and user interface elements.
- Integration of advanced features for movie booking.

Version 6.0.0 - Menu Bar:
- Implementation of a menu bar for easy navigation within the application.
- Enhanced frontend navigation for better usability.

Version 7.0.0 - Backend Validation and Error Handling:
- Backend updated with null value handling and robust validations.
- Improved error handling and data validation to enhance data integrity.

Version 8.0.0 - User Login:
- Added user login functionality for both Admin and User roles in the frontend.
- Users can now log in to access personalized features and bookings.

Version 9.0.0 - Admin Movie and Theater Management:
- Expanded functionality for Admin users.
- Added features for managing Movies, Theaters, and Showtimes.
- Users can book tickets for available movies.

Version 10.0.0 - Visual Enhancements:
- Made visual modifications to improve the frontend's aesthetics.
- Enhanced the overall user interface for a more engaging experience.

Version 11.0.0 - Seat Selection:
- Introduced seat selection via buttons during the booking process.
- Users can now conveniently select their seats.
- Enhanced the interactive booking experience.
