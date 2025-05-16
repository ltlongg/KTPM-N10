"use client";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 40,
  },
  {
    name: 'Tue',
    present: 70,
    absent: 60,
  },
  {
    name: 'Wed',
    present: 90,
    absent: 75,
  },
  {
    name: 'Thu',
    present: 90,
    absent: 75,

  },
  {
    name: 'Fri',
    present: 65,
    absent: 55,
  },

];

const AttendanceChart = () => {
    return (
        <div className="">AttendanceChart</div>
    )
}

export default AttendanceChart