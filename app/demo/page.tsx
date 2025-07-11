"use client";
import Image from "next/image";

export default function DemoPage() {
  return (
    <main className="container sub-container">
      {/* Sidebar */}
      <div className="sidebar left-sidebar">Left Sidebar</div>
      <div className="sidebar right-sidebar">Right Sidebar</div>

      {/* Header */}
      <h1 className="header">Header Title</h1>
      <h2 className="sub-header">Sub Header</h2>
      <p className="clip-text bg-image">Clipped Text Over Image</p>

      {/* Admin Section */}
      <section className="admin-header">Admin Header</section>
      <section className="admin-main">
        <div className="admin-stat">Admin Stat Block</div>
      </section>

      {/* Success Section */}
      <section className="success-img">
        <p>Success Image Content</p>
      </section>
      <section className="request-details">Request Details</section>

      {/* Form */}
      <label className="checkbox-label">
        <input type="checkbox" className="peer" />
        Check me
      </label>
      <div className="radio-group">Radio Group</div>

      {/* File Upload */}
      <div className="file-upload">
        <label className="file-upload_label">Upload file</label>
      </div>

      {/* Typography */}
      <div className="text-36-bold">36 Bold</div>
      <div className="text-32-bold">32 Bold</div>
      <div className="text-24-bold">24 Bold</div>
      <div className="text-18-bold">18 Bold</div>
      <div className="text-16-semibold">16 Semibold</div>
      <div className="text-16-regular">16 Regular</div>
      <div className="text-14-medium">14 Medium</div>
      <div className="text-14-regular">14 Regular</div>
      <div className="text-12-semibold">12 Semibold</div>
      <div className="text-12-regular">12 Regular</div>

      {/* ShadCN Overrides */}
      <div className="flex flex-col gap-2">
        <button className="shad-primary-btn">Primary</button>
        <button className="shad-danger-btn">Danger</button>
        <button className="shad-gray-btn">Gray</button>
        <label className="shad-input-label">Label</label>
        <input className="shad-input" placeholder="Input" />
        <input className="shad-input-icon" placeholder="With Icon" />
        <textarea className="shad-textArea" placeholder="Textarea" />
        <div className="shad-combobox-item">Combobox Item</div>
        <div className="shad-combobox-trigger">Combobox Trigger</div>
        <div className="shad-select-trigger">Select Trigger</div>
        <div className="shad-select-content">Select Content</div>
        <div className="shad-dialog">Dialog Content</div>
        <div className="shad-dialog">

        <button className="shad-dialog">Dialog Button</button>
        </div>
        <p className="shad-error">Error Message</p>
        <div className="shad-table">Table</div>
        <div className="shad-table-row-header">Header Row</div>
        <div className="shad-table-row">Row</div>
        <div className="shad-otp">OTP Container</div>
        <div className="shad-otp-slot">9</div>
        <div className="shad-alert-dialog">Alert Dialog</div>
        <div className="shad-sheet-content">
          <button>Sheet Button</button>
        </div>
      </div>

      {/* Input overrides */}
      <input className="input-phone" placeholder="Phone input" />
      <input className="date-picker" placeholder="Date picker" />

      {/* Utility alignment */}
      <div className="flex-center h-20 bg-dark-300 text-white">Center</div>
      <div className="flex-between h-20 bg-dark-400 text-white px-4">
        <span>Left</span>
        <span>Right</span>
      </div>

      {/* Data table */}
      <section className="data-table">
        <div className="table-actions">
          <button>Action 1</button>
          <button>Action 2</button>
        </div>
      </section>

      {/* Side image and copyright */}
      <Image
        src="/assets/images/onboarding-img.png"
        alt="Side"
        className="side-img"
        height={1000}
        width={1000}
      />
      <footer className="copyright">© 2025 All rights reserved</footer>
    </main>
  );
}
