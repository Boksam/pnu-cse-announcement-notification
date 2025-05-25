# 📢 PNU CSE Announcement Notifier

A Node.js + TypeScript application that regularly checks the **Pusan National University Computer Science and Engineering (PNU CSE)** announcements page and sends an email notification if new announcements are posted.

## 🚀 Overview

This project is designed to help PNU CSE students stay updated with department announcements without having to manually check the website. It works by scraping the PNU CSE announcement page at scheduled intervals and emailing any new content it finds.

Built using:

- **Node.js**
- **TypeScript**
- **Express.js** (for potential API or health check endpoint)
- **pnpm** (as the package manager)

## ✨ Features

- Periodic polling of the PNU CSE announcement board
- Detection of newly posted announcements
- Automated email notifications for new posts
- Lightweight and configurable

## 🛠 Prerequisites

Before you begin, ensure you have the following:

- Node.js (v20 or higher recommended)
- pnpm (`npm install -g pnpm`)
- An SMTP-compatible email account (e.g. Gmail, Outlook, custom SMTP)

## 🔧 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/pnu-cse-announcement-notifier.git
cd pnu-cse-announcement-notifier

```

2. ** Install dependencies:**

```bash
pnpm install
```

3. **Set up environment variables:**
   Create an `.env` file in the root directory and configure your email settings:

```
GMAIL_USER=YOUR_SMTP_EMAIL
GMAIL_PASSWORD=YOUR_SMTP_PASSWORD
RECEIVER_EMAIL=YOUR_RECEIVER_EMAIL
```

4. **Run the application:**

```bash
pnpm start
```
