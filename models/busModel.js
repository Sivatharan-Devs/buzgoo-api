import mongoose from 'mongoose';

const busSchema = new mongoose.Schema(
  {
    busNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
    },
    registrationNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
    },
    // operator: {
    //   type: String,
    //   required: true,
    //   trim: true,
    //   // Consider referencing an Operator collection instead:
    //   // type: Schema.Types.ObjectId, ref: 'Operator', required: true,
    // },
    // busType: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'BusType',
    //   required: true,
    // },
    // seatLayout: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'SeatLayout',
    //   required: true,
    // },
    totalSeats: {
      type: Number,
      required: true,
      min: 1,
    },
    facilities: {
      type: [String],
      enum: [
        'AC',
        'WIFI',
        'USB_CHARGING',
        'TOILET',
        'TV',
        'BLANKET',
        'WATER_BOTTLE',
        'READING_LIGHT',
        'CCTV',
        'GPS_TRACKING',
      ],
      default: [],
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'maintenance', 'retired'],
      default: 'active',
    },
    manufactureYear: {
      type: Number,
      min: 1990,
      max: new Date().getFullYear() + 1,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
);
