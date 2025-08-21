
# 🏫 School Backend API

<p align="center">
  <b> Effortless School Management & Proximity Search</b><br>
  <i>Node.js • Express • MySQL • Render Ready</i>
</p>

---


##  Features
- **Add School**: Register new schools with name, address, and coordinates.
- **List Schools by Proximity**: Get all schools sorted by distance from your location.
- **Robust Validation**: Uses Joi to validate all input data for safety and correctness.
- **Modular Code**: Clean separation of concerns (controllers, services, DB).

---

##  Setup & Installation

1. **Clone the repo**
   ```sh
   git clone https://github.com/Sarish05/School-backend
   cd School_backend
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure environment**
   - Copy `.env.example` to `.env` and fill in your DB credentials:
     ```env
     DB_HOST=localhost
     DB_USER=db_user
     DB_PASS=db_password
     DB_NAME=school_db
     PORT=port
     ```

4. **Create the MySQL table**
   ```sql
   CREATE TABLE schools (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     address VARCHAR(255) NOT NULL,
     latitude FLOAT NOT NULL,
     longitude FLOAT NOT NULL
   );
   ```

5. **Seed sample data**
   ```sh
   node instance.js
   ```

6. **Start the server**
   ```sh
   npm start
   ```
   The server runs on `http://localhost:3000` 

---

## API Endpoints


### ➕ Add School
- **POST** `/addSchool`
- **Body (JSON):**
  ```json
  {
    "name": "Delhi Public School",
    "address": "Mathura Road, New Delhi",
    "latitude": 28.5826,
    "longitude": 77.2517
  }
  ```
- **Validation:**
  - `name` and `address`: Required, 2-255 characters
  - `latitude`: Required, number between -90 and 90
  - `longitude`: Required, number between -180 and 180
- **Response:**
  ```json
  { "message": "School added", "id": 1 }
  ```

### 📍 List Schools by Proximity
- **GET** `/listSchools?latitude=28.6&longitude=77.2`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Delhi Public School",
      "address": "Mathura Road, New Delhi",
      "latitude": 28.5826,
      "longitude": 77.2517,
      "distance": 0.0
    }
  ]
  ```
---

## 📁 Project Structure
```
School_backend/
├── controllers/
│   └── schoolController.js
├── instance.js
├── db.js
├── schoolService.js
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---