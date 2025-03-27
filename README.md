# Video Compression Project using Cloudinary

This project leverages **Cloudinary** to upload, compress, and transform video files. It enables users to upload videos, which are then compressed and optimized for better performance.

---

## **Technologies Used**

- **Cloudinary**: Used for video upload, compression, and transformation.
- **Prisma**: ORM to interact with the database and manage video metadata.
- **Neon**: Cloud-based database solution for storing data.
- **Clerk**: Used for user authentication and sign-up functionality.
- **daisyUI**: A Tailwind CSS component library for UI styling.

---

## **Features**

- **Video Upload**: Users can upload video files through a simple form.
- **Compression**: The video is automatically compressed and optimized upon upload using Cloudinary.
- **Video Transformations**: Cloudinary allows for easy transformations like resizing, cropping, and more.
- **User Authentication**: Users can sign up and log in using Clerk for a secure authentication flow.
- **Database Integration**: Video metadata is stored in a Neon database using Prisma for easy retrieval.

---

## **Getting Started**

To get this project running locally, follow these steps:

### **Prerequisites**

Ensure you have the following installed:

- Node.js
- npm or yarn
- A valid **Cloudinary** account and API keys
- **Clerk** account and API keys
- **Prisma** and **Neon** setup for the database

### **Installation**

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
