-- =====
-- Schema Creation
-- =====

-- Movie
CREATE TABLE Movie (
    movieID INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    rating VARCHAR(10),
    runtimeMinutes INT,
    posterPath VARCHAR(255),
    status ENUM('now_showing', 'coming_soon') DEFUALT 'now_showing'
);

-- Theater
CREATE TABLE Theater (
    theaterID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    assignedSeats BOOLEAN,
    numSeats INT,
    theaterType ENUM('normal','IMAX')
);

--Auditorium
CREATE TABLE Auditorium (
    auditoriumID INT AUTO_INCREMENT PRIMARY KEY,
    theaterID INT,
    name VARCHAR(100),
    FOREIGN KEY (theaterID) REFERENCES Theater(theaterID)
);

--Showing
CREATE TABLE Showing (
    showingID INT AUTO_INCREMENT PRIMARY KEY,
    movieID INT NOT NULL,
    startTime DATETIME NOT NULL,
    theaterID INT,
    format VARCHAR(50),
    soldOut BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (movieID) REFERENCES Movie(movieID),
    FOREIGN KEY (theaterID) REFERENCES Theater(theaterID)
);

--Seat
CREATE TABLE Seat (
    seatID INT AUTO_INCREMENT PRIMARY KEY,
    theaterID INT NOT NULL,
    seatLabel VARCHAR(20),
    isAccessible BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (theaterID) REFERENCES Theater(theaterID)
);

--Seat Inventory
CREATE TABLE SeatInventory (
    seatInventoryID INT AUTO_INCREMENT PRIMARY KEY,
    showingID INT NOT NULL,
    seatID INT NOT NULL,
    status ENUM('AVAILABLE','HELD','RESERVED') DEFAULT 'AVAILABLE',
    holdExpiresAt DATETIME NULL,
    FOREIGN KEY (showingID) REFERENCES Showing(showingID),
    FOREIGN KEY (seatID) REFERENCES Seat(seatID)
);

--Customer Account
CREATE TABLE CustomerAccount (
    accountID INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    username VARCHAR(255),
    passwordHash VARCHAR(255),
    streetNum VARCHAR(255),
    apartmentNum VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(255)
);

--Order Table
CREATE TABLE OrderTable (
    orderID INT AUTO_INCREMENT PRIMARY KEY,
    accountID INT NOT NULL,
    status ENUM('Pending','Paid','Cancelled') DEFAULT 'Pending',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (accountID) REFERENCES CustomerAccount(accountID)
);

--Payment
CREATE TABLE Payment (
    paymentID INT AUTO_INCREMENT PRIMARY KEY,
    orderID INT NOT NULL,
    method VARCHAR(255),
    amount DECIMAL(8,2),
    status ENUM('Completed','Pending','Cancelled'),
    FOREIGN KEY (orderID) REFERENCES OrderTable(orderID)
);

--Refund
CREATE TABLE Refund (
    refundID INT AUTO_INCREMENT PRIMARY KEY,
    paymentID INT NOT NULL,
    amount DECIMAL(8,2),
    refundedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (paymentID) REFERENCES Payment(paymentID)
);

--Ticket
CREATE TABLE Ticket (
    ticketID INT AUTO_INCREMENT PRIMARY KEY,
    orderID INT NOT NULL,
    showingID INT NOT NULL,
    seatID INT,
    code VARCHAR(255),
    status ENUM('paid','cancelled','refunded'),
    FOREIGN KEY (orderID) REFERENCES OrderTable(orderID),
    FOREIGN KEY (showingID) REFERENCES Showing(showingID),
    FOREIGN KEY (seatID) REFERENCES Seat(seatID)
);

--Report
CREATE TABLE Report (
    reportID INT AUTO_INCREMENT PRIMARY KEY,
    reportType VARCHAR(255),
    startDate DATE,
    daysCovered INT,
    reportContent TEXT
);