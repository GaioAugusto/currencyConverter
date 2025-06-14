# Currency Converter Web App

A full-stack web application that lets users convert between global currencies using up-to-date exchange rates. Powered by a React + TypeScript frontend and a Python Flask backend connected to a MySQL database.

---

## Video Demo (APP no longer deployed because of monthly costs)

[🔗 https://drive.google.com/file/d/1g0drUF8_HsytvFovyNgYlL9P6HWmYpoc/view?usp=sharing](#)

---

## 🧩 Tech Stack

| Layer       | Technology             |
|-------------|------------------------|
| Frontend    | React + TypeScript     |
| Backend     | Flask (Python)         |
| Database    | MySQL                  |
| Data Source | European Central Bank  |
| Deployment  | Vercel and render      |

---

## 🚀 Features

- Real-time currency conversion
- Automatic daily updates from ECB
- Mobile-friendly, clean UI

---

## 🧭 Architecture Overview

```mermaid
graph TD
A[ECB XML API] --> B[Python Script]
B --> C[MySQL Database]
D[User] --> E[React Frontend]
E --> F[Flask API]
F --> C
