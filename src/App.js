import React, { useState } from 'react';
import './App.css';

function App() {
  const handleLogin = () => {
    alert('Welcome to KG Cinemas');
  };

  const [selectedMovie, setSelectedMovie] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setSelectedDate] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [showTiming, setSelectedShowTiming] = useState('');
  const [price, setSelectedPrice] = useState('');
  const [password, setPassword] = useState('');

  const movies = ['Vaalai', 'Goat', 'Thangalan', 'KottuKaali'];
  const dateOptions = ['02-Sep', '03-Sep', '04-Sep'];
  const showTimings = ['4:00 AM', '9:30 AM', '12:00 PM', '3:00 PM', '6:30 PM', '9:30 PM', '1:00 AM'];
  const prices = ['(1-2) : 190', '(3-4) : 140', '(5-6) : 90'];

  const rows = 6;
  const columns = 10;

  const handleSeatClick = (row, col) => {
    const seatId = `${row}-${col}`;
    if (selectedSeats.some(seat => seat.id === seatId)) {
      setSelectedSeats(selectedSeats.filter(seat => seat.id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, { id: seatId, row, col }]);
    }
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  const renderSeats = () => {
    const seats = [];
    for (let row = 1; row <= rows; row++) {
      const rowSeats = [];
      for (let col = 1; col <= columns; col++) {
        const seatId = `${row}-${col}`;
        const isSelected = selectedSeats.some(seat => seat.id === seatId);
        rowSeats.push(
          <div
            key={seatId}
            className={`seat ${isSelected ? 'selected' : ''}`}
            onClick={() => handleSeatClick(row, col)}
          >
            {seatId}
          </div>
        );
      }
      seats.push(<div className="row" key={row}>{rowSeats}</div>);
    }
    return seats;
  };

  return (
    <div className="App">
      <h1>Theater Ticket Booking</h1>
      {!bookingConfirmed ? (
        <form onSubmit={handleBooking}>
          <div>
            <label>Email: </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" onClick={handleLogin}>Login</button>
          </div>
          <div>
            <h2>KG Cinemas</h2>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Mobile Number: </label>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Date: </label>
            <select
              value={date}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            >
              <option value="">Select a date</option>
              {dateOptions.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Movie: </label>
            <select
              value={selectedMovie}
              onChange={(e) => setSelectedMovie(e.target.value)}
              required
            >
              <option value="">Select a movie</option>
              {movies.map((movie) => (
                <option key={movie} value={movie}>
                  {movie}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Show Timing: </label>
            <select
              value={showTiming}
              onChange={(e) => setSelectedShowTiming(e.target.value)}
              required
            >
              <option value="">Select a Time</option>
              {showTimings.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Price: </label>
            <select
              value={price}
              onChange={(e) => setSelectedPrice(e.target.value)}
              required
            >
              <option value="">Select a Price</option>
              {prices.map((price) => (
                <option key={price} value={price}>
                  {price}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Select Seats: </label>
            <div className="seat-container">
              {renderSeats()}
            </div>
          </div>
          <button type="submit">Confirm Booking</button>
        </form>
      ) : (
        <div>
          <h2>Booking Confirmed!</h2>
          <p>Name: {name}</p>
          <p>Movie: {selectedMovie}</p>
          <p>Date: {date}</p>
          <p>Show Timing: {showTiming}</p>
          <p>Price: {price}</p>
          <p>Seats: {selectedSeats.map(seat => `${seat.row}-${seat.col}`).join(', ')}</p>
          <h2>Thank You!</h2>
        </div>
      )}
    </div>
  );
}

export default App;