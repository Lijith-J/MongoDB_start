// import express from 'express';
// import mongoose from 'mongoose';

// const app = express();

// const uri = "mongodb+srv://LijithDB:129109208@cluster0.l3by5fp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Mongoose connection
// mongoose.connect(uri, {})
//     .then(() => {
//         console.log("Connected to MongoDB with Mongoose!");
//     }).catch(error => {
//         console.error("Error connecting to MongoDB with Mongoose:", error);
//     });

// // Define a Mongoose schema and model for the 'staffs' collection
// const staffSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     // Add other fields as necessary
// });

// const userModel = mongoose.model('staffs', staffSchema);

// // Define a route to fetch data from MongoDB using Mongoose
// app.get('/data', (req, res) => {
//     try {
//         // Fetch data from the 'staffs' collection
//         userModel.find({})
//             .then(staffs => {
//                 res.json(staffs);
//                 console.log(staffs)
//             })
//             .catch(err => {
//                 console.error(err);
//             });

//     } catch (error) {
//         console.error("Error fetching data from MongoDB:", error);
//         res.status(500).json({ error: "Failed to fetch data from MongoDB" });
//     }
// });

// // Start the Express server
// const PORT = 4000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
























import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
  });

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const userModel = mongoose.model('staffs', userSchema);

app.get('/data', (req, res) => {
  userModel.find({})
    .then(staffs => {
      res.json(staffs);
      console.log(staffs);
    })
    .catch(err => {
      console.error('Error retrieving data:', err);
      res.status(500).send('Error retrieving data');
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

