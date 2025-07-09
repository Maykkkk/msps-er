interface User {
  id: string;
  email: string;
  password: string;
  role: string;
  firstName: string;
  lastName: string;
}

interface LoginResponse {
  access_token: string;
  user: Omit<User, 'password'>;
}

interface AuthCheckResponse {
  user: Omit<User, 'password'> | null;
}

const users: User[] = [
  {
    id: '1',
    email: 'admin@school.com',
    password: 'password123',
    role: 'admin',
    firstName: 'Admin',
    lastName: 'User'
  }
];

export const mockLogin = async (email: string, password: string): Promise<LoginResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        const { password: _, ...userWithoutPassword } = user;
        resolve({
          access_token: 'mock_token',
          user: userWithoutPassword
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

export const mockAuthCheck = async (token: string): Promise<AuthCheckResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (token === 'mock_token') {
        const { password: _, ...userWithoutPassword } = users[0];
        resolve({ user: userWithoutPassword });
      } else {
        resolve({ user: null });
      }
    }, 500);
  });
};