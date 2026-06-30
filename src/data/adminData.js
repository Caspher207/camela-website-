export const REVENUE_DATA = [
  { month: 'Jan', revenue: 42500, orders: 312, customers: 180 },
  { month: 'Feb', revenue: 38200, orders: 285, customers: 162 },
  { month: 'Mar', revenue: 51800, orders: 398, customers: 215 },
  { month: 'Apr', revenue: 49200, orders: 372, customers: 198 },
  { month: 'May', revenue: 63400, orders: 489, customers: 254 },
  { month: 'Jun', revenue: 58100, orders: 441, customers: 231 },
  { month: 'Jul', revenue: 71200, orders: 538, customers: 287 },
  { month: 'Aug', revenue: 68900, orders: 521, customers: 274 },
  { month: 'Sep', revenue: 55300, orders: 415, customers: 221 },
  { month: 'Oct', revenue: 74500, orders: 562, customers: 298 },
  { month: 'Nov', revenue: 89200, orders: 672, customers: 342 },
  { month: 'Dec', revenue: 95600, orders: 720, customers: 380 },
]

export const WEEKLY_REVENUE = [
  { day: 'Mon', revenue: 3200 },
  { day: 'Tue', revenue: 4800 },
  { day: 'Wed', revenue: 3900 },
  { day: 'Thu', revenue: 6100 },
  { day: 'Fri', revenue: 7400 },
  { day: 'Sat', revenue: 8900 },
  { day: 'Sun', revenue: 5600 },
]

export const CATEGORY_STATS = [
  { category: 'Vitamins & Supplements', sales: 32, color: '#10b981' },
  { category: 'Personal Care', sales: 24, color: '#3b82f6' },
  { category: 'Skincare', sales: 20, color: '#e11d48' },
  { category: 'Health Devices', sales: 14, color: '#8b5cf6' },
  { category: 'Fitness & Wellness', sales: 10, color: '#f59e0b' },
]

export const MOCK_CUSTOMERS = [
  { id: 'CUS-0001', name: 'Sarah Johnson', email: 'sarah.j@example.com', phone: '+1 (212) 555-0101', orders: 12, spent: 1847.50, status: 'active', joined: '2023-06-15', location: 'New York, US', address: '42 West 34th Street, Apt 8B, New York, NY 10001, United States' },
  { id: 'CUS-0002', name: 'Michael Chen', email: 'm.chen@example.com', phone: '+1 (415) 555-0182', orders: 8, spent: 1243.00, status: 'active', joined: '2023-08-22', location: 'San Francisco, US', address: '199 Fremont Street, Suite 1200, San Francisco, CA 94105, United States' },
  { id: 'CUS-0003', name: 'Emma Rodriguez', email: 'emma.r@example.com', phone: '+1 (305) 555-0147', orders: 5, spent: 762.00, status: 'active', joined: '2024-01-10', location: 'Miami, US', address: '1200 Brickell Avenue, Floor 3, Miami, FL 33131, United States' },
  { id: 'CUS-0004', name: 'David Kim', email: 'd.kim@example.com', phone: '+1 (312) 555-0193', orders: 3, spent: 459.20, status: 'inactive', joined: '2024-03-05', location: 'Chicago, US', address: '875 N Michigan Avenue, Chicago, IL 60611, United States' },
  { id: 'CUS-0005', name: 'Lisa Wang', email: 'l.wang@example.com', phone: '+1 (206) 555-0164', orders: 15, spent: 2318.75, status: 'active', joined: '2023-04-18', location: 'Seattle, US', address: '400 Broad Street, Seattle, WA 98109, United States' },
  { id: 'CUS-0006', name: 'James Brown', email: 'j.brown@example.com', phone: '+1 (512) 555-0138', orders: 7, spent: 934.60, status: 'active', joined: '2023-11-30', location: 'Austin, US', address: '301 Congress Avenue, Suite 500, Austin, TX 78701, United States' },
  { id: 'CUS-0007', name: 'Olivia Taylor', email: 'o.taylor@example.com', phone: '+1 (617) 555-0122', orders: 2, spent: 215.00, status: 'inactive', joined: '2024-05-20', location: 'Boston, US', address: '800 Boylston Street, Boston, MA 02199, United States' },
  { id: 'CUS-0008', name: 'Noah Martinez', email: 'n.martinez@example.com', phone: '+1 (720) 555-0175', orders: 11, spent: 1672.30, status: 'active', joined: '2023-07-08', location: 'Denver, US', address: '1700 Lincoln Street, Denver, CO 80203, United States' },
  { id: 'CUS-0009', name: 'Ava Thompson', email: 'a.thompson@example.com', phone: '+1 (404) 555-0156', orders: 6, spent: 892.00, status: 'active', joined: '2024-02-14', location: 'Atlanta, US', address: '3344 Peachtree Road NE, Atlanta, GA 30326, United States' },
  { id: 'CUS-0010', name: 'Liam Anderson', email: 'l.anderson@example.com', phone: '+1 (503) 555-0189', orders: 4, spent: 543.80, status: 'active', joined: '2024-04-01', location: 'Portland, US', address: '111 SW 5th Avenue, Suite 2000, Portland, OR 97204, United States' },
]

export const MOCK_ADMIN_ORDERS = [
  { id: 'ORD-7842361', customer: 'Sarah Johnson', email: 'sarah.j@example.com', items: 3, total: 247.50, status: 'delivered', date: '2024-11-28', payment: 'Credit Card' },
  { id: 'ORD-7842362', customer: 'Michael Chen', email: 'm.chen@example.com', items: 1, total: 89.99, status: 'shipped', date: '2024-11-29', payment: 'PayPal' },
  { id: 'ORD-7842363', customer: 'Emma Rodriguez', email: 'emma.r@example.com', items: 5, total: 412.00, status: 'processing', date: '2024-11-30', payment: 'Credit Card' },
  { id: 'ORD-7842364', customer: 'David Kim', email: 'd.kim@example.com', items: 2, total: 159.98, status: 'confirmed', date: '2024-12-01', payment: 'Apple Pay' },
  { id: 'ORD-7842365', customer: 'Lisa Wang', email: 'l.wang@example.com', items: 4, total: 338.50, status: 'delivered', date: '2024-11-27', payment: 'Credit Card' },
  { id: 'ORD-7842366', customer: 'James Brown', email: 'j.brown@example.com', items: 1, total: 54.99, status: 'cancelled', date: '2024-11-25', payment: 'PayPal' },
  { id: 'ORD-7842367', customer: 'Olivia Taylor', email: 'o.taylor@example.com', items: 2, total: 215.00, status: 'shipped', date: '2024-11-30', payment: 'Credit Card' },
  { id: 'ORD-7842368', customer: 'Noah Martinez', email: 'n.martinez@example.com', items: 6, total: 567.20, status: 'processing', date: '2024-12-01', payment: 'Google Pay' },
  { id: 'ORD-7842369', customer: 'Ava Thompson', email: 'a.thompson@example.com', items: 3, total: 312.00, status: 'confirmed', date: '2024-12-02', payment: 'Credit Card' },
  { id: 'ORD-7842370', customer: 'Liam Anderson', email: 'l.anderson@example.com', items: 1, total: 74.99, status: 'delivered', date: '2024-11-26', payment: 'PayPal' },
]

export const LOW_STOCK_ITEMS = [
  { id: 1, name: 'Vitamin C 1000mg (90 tablets)', category: 'Vitamins & Supplements', sku: 'SKU-001', stock: 3, threshold: 5 },
  { id: 2, name: 'Omega-3 Fish Oil (60 softgels)', category: 'Vitamins & Supplements', sku: 'SKU-002', stock: 2, threshold: 5 },
  { id: 3, name: 'Digital Blood Pressure Monitor', category: 'Health Devices', sku: 'SKU-003', stock: 1, threshold: 5 },
  { id: 4, name: 'Whey Protein Powder 1kg', category: 'Fitness & Wellness', sku: 'SKU-004', stock: 4, threshold: 5 },
]

export const ADMIN_STATS = {
  totalRevenue: { value: 758600, change: 12.5, label: 'Total Revenue' },
  totalOrders: { value: 5524, change: 8.2, label: 'Total Orders' },
  totalCustomers: { value: 2842, change: 18.7, label: 'Total Customers' },
  avgOrderValue: { value: 137.4, change: -2.1, label: 'Avg. Order Value' },
  conversionRate: { value: 3.24, change: 0.4, label: 'Conversion Rate' },
  returnRate: { value: 2.8, change: -0.3, label: 'Return Rate' },
}
