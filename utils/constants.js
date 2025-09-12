import calendar from '../src/assets/calendar.svg'
import premium from '../src/assets/premium.svg'
import edit from '../src/assets/edit.svg'
import notif from '../src/assets/notif.svg'

export const timePeriods = [
  {
    text: '1 Month',
  },
  {
    text: '3 Months',
  },
  {
    text: '1 Year',
    img: premium
  },
  {
    text: 'Custom',
    img: calendar
  }
]

export const invoices = [
  {
    name: 'Client Name',
    price: '₹1,25,000',
    status: '',
    isUpdated: false,
    due: '2024-06-15'
  },
  {
    name: 'Client Name',
    price: '₹1,25,000',
    status: 'unpaid',
    isUpdated: true,
    due: '2024-06-15'
  },
  {
    name: 'Income Trend',
    price: '₹1,25,000',
    status: 'disputed',
    isUpdated: true,
    due: '2024-06-15'
  },
  {
    name: 'Income Trend',
    price: '₹1,25,000',
    status: 'paid',
    isUpdated: true,
    due: '2024-06-15'
  },
  {
    name: 'Income Trend',
    price: '₹1,25,000',
    status: 'paid',
    isUpdated: true,
    due: '2024-06-15'
  },
  {
    name: 'Income Trend',
    price: '₹1,25,000',
    status: 'Partially Paid',
    isUpdated: true,
    due: '2024-06-15'
  }, {
    name: 'Income Trend',
    price: '₹1,25,000',
    status: 'overdue',
    img: notif,
    isUpdated: true,
    due: '2024-06-15'
  },
  {
    name: 'Income Trend',
    price: '₹1,25,000',
    status: 'Awaited',
    img: notif,
    isUpdated: true,
    due: '2024-06-15'
  },
  {
    name: 'Income Trend',
    price: '₹1,25,000',
    status: 'draft',
    img: edit,
    isUpdated: true,
    due: '2024-06-15'
  }, {
    name: 'Income Trend',
    price: '₹1,25,000',
    status: 'paid',
    isUpdated: true,
    due: '2024-06-15'
  },
]