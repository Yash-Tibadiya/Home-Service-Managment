
# Home Service Management System

A Node.js/Express-based service management system, with MongoDB as the database, to manage users, service providers, and services. This system allows users to request services from providers, rate services, and manage service histories.

## Features

- **User Authentication:** Users can sign up, log in, and authenticate with JWT tokens.
- **Service Providers:** Service providers can register, list their services, and manage their availability.
- **Service Requests:** Users can request services from providers and track service history.
- **Ratings & Feedback:** Users can provide feedback and ratings for services.
- **Service Types:** The system supports multiple service types, such as plumbing, gardening, cleaning, etc.

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Yash-Tibadiya/Home-Service-Managment.git
   cd Home-Service-Managment
   ```

2. **Install Dependencies**

   Run the following command to install all necessary dependencies.

   ```bash
   npm install
   ```

3. **Create `.env` File**

   Create a `.env` file in the root directory and add the following variables:

    ```env
    PORT=8000
    MONGO_URI=

    CORS_ORIGIN=*

    ACCESS_TOKEN_SECRET=
    ACCESS_TOKEN_EXPIRY=1d

    REFRESH_TOKEN_SECRET=
    REFRESH_TOKEN_EXPIRY=7d
    ```

4. **Run the Application**

   To start the server in development mode, use the following command:

   ```bash
   npm run start
   ```

   This will start the server on `http://localhost:8000`.

## Models

### User

```typescript
export interface IUser extends Document {
  username: string;
  email: string;
  fullName: string;
  password: string;
  refreshToken: string;
  contact: string;
  address: string;
  serviceHistory: mongoose.Types.ObjectId[];
  isPasswordCorrect(password: string): Promise<boolean>;
  generateAccessToken(): string;
  generateRefreshToken(): string;
}
```

### Service Provider

```typescript
export interface IServiceProvider extends Document {
  name: string;
  email: string;
  password: string;
  contact: string;
  address: string;
  skill: string;
  description: string;
  rating: number;
  availability: boolean;
  servicesOffered: ServiceType[];
  serviceHistory: mongoose.Types.ObjectId[];
}
```

### Service

```typescript
export interface IService extends Document {
  serviceType: ServiceType;
  description: string;
  createdBy: IUser;
  providedBy: IServiceProvider;
  isCompleted: boolean;
  charge: number;
  startTime: Date;
  endTime: Date;
}
```

### Feedback

```typescript
export interface IFeedback extends Document {
  rating: Rating;
  feedback: string;
  createdBy: IUser;
  service: IService;
}
```

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Please ensure your changes are well-tested and documented.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
