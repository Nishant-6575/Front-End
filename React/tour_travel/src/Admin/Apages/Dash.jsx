import React from 'react'
import {
  FaTachometerAlt,
  FaPlane,
  FaServicestack,
  FaBlog,
  FaMoneyBill,
  FaUsers,
  FaSignOutAlt,
  FaPlaneDeparture,
  FaMoneyBillWave,
  FaClipboardList,
  FaChartLine,
  FaGlobeAsia,
} from "react-icons/fa";
import AdminHeader from '../Acommon/AdminHeader';

export default function Dash() {
  const cards = [
    {
      title: "Total Packages",
      value: "128",
      icon: <FaPlaneDeparture />,
      bg: "bg-primary",
    },
    {
      title: "Total Users",
      value: "3,540",
      icon: <FaUsers />,
      bg: "bg-success",
    },
    {
      title: "Bookings",
      value: "876",
      icon: <FaClipboardList />,
      bg: "bg-warning",
    },
    {
      title: "Revenue",
      value: "₹4.8L",
      icon: <FaMoneyBillWave />,
      bg: "bg-danger",
    },
  ];

  const recentBookings = [
    {
      id: "#GT1021",
      user: "Nishant Patel",
      package: "Goa Tour",
      status: "Confirmed",
    },
    {
      id: "#GT1022",
      user: "Rahul Sharma",
      package: "Kashmir Trip",
      status: "Pending",
    },
    {
      id: "#GT1023",
      user: "Priya Mehta",
      package: "Dubai Tour",
      status: "Confirmed",
    },
    {
      id: "#GT1024",
      user: "Aman Verma",
      package: "Thailand Tour",
      status: "Cancelled",
    },
  ];
  return (
    <div>
      {/* <AdminHeader /> */}
      <div className="container-fluid py-4 px-4 bg-light min-vh-100">

        {/* Cards */}
        <div className="row g-4">
          {cards.map((item, index) => (
            <div className="col-xl-3 col-md-6" key={index}>
              <div
                className="card border-0 shadow-sm rounded-4 overflow-hidden"
                style={{ transition: "0.3s" }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="text-muted fw-semibold mb-1">
                        {item.title}
                      </p>
                      <h2 className="fw-bold">{item.value}</h2>
                    </div>

                    <div
                      className={`${item.bg} text-white d-flex align-items-center justify-content-center rounded-circle`}
                      style={{
                        width: "60px",
                        height: "60px",
                        fontSize: "22px",
                      }}
                    >
                      {item.icon}
                    </div>
                  </div>
                </div>

                <div
                  className={`${item.bg}`}
                  style={{ height: "6px" }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Middle Section */}
        <div className="row mt-4 g-4">
          {/* Analytics */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="fw-bold mb-0">
                    Booking Analytics
                  </h5>

                  <span className="badge bg-success px-3 py-2">
                    +18% This Month
                  </span>
                </div>

                <div
                  className="bg-light rounded-4 d-flex align-items-center justify-content-center"
                  style={{ height: "320px" }}
                >
                  <div className="text-center">
                    <FaChartLine
                      size={70}
                      className="text-primary mb-3"
                    />
                    <h5 className="fw-bold">
                      Analytics Graph Area
                    </h5>
                    <p className="text-muted">
                      Add Chart.js or ApexCharts here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Cards */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "55px",
                      height: "55px",
                    }}
                  >
                    <FaGlobeAsia size={24} />
                  </div>

                  <div>
                    <h6 className="mb-1 fw-bold">
                      Top Destination
                    </h6>
                    <p className="text-muted mb-0">
                      Bali, Indonesia
                    </p>
                  </div>
                </div>

                <div className="progress rounded-pill">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "75%" }}
                  >
                    75%
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body">
                <h5 className="fw-bold mb-3">
                  Quick Actions
                </h5>

                <div className="d-grid gap-3">
                  <button className="btn btn-outline-primary rounded-3">
                    Manage Packages
                  </button>

                  <button className="btn btn-outline-success rounded-3">
                    View Bookings
                  </button>

                  <button className="btn btn-outline-dark rounded-3">
                    Manage Users
                  </button>

                  <button className="btn btn-outline-danger rounded-3">
                    Add Blog
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="card border-0 shadow-sm rounded-4 mt-4">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold mb-0">
                Recent Bookings
              </h5>

              <button className="btn btn-sm btn-dark">
                View All
              </button>
            </div>

            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Booking ID</th>
                    <th>User</th>
                    <th>Package</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {recentBookings.map((item, index) => (
                    <tr key={index}>
                      <td className="fw-semibold">{item.id}</td>

                      <td>{item.user}</td>

                      <td>{item.package}</td>

                      <td>
                        <span
                          className={`badge ${item.status === "Confirmed"
                            ? "bg-success"
                            : item.status === "Pending"
                              ? "bg-warning text-dark"
                              : "bg-danger"
                            }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


