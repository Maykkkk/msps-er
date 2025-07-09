import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';

export default function CreateStudent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    fatherName: '',
    motherName: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate('/students');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Add New Student</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <Input
          label="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          required
        />
        <Input
          label="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          required
        />
        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        <Input
          label="Father's Name"
          value={formData.fatherName}
          onChange={(e) => setFormData({...formData, fatherName: e.target.value})}
          required
        />
        <Input
          label="Mother's Name"
          value={formData.motherName}
          onChange={(e) => setFormData({...formData, motherName: e.target.value})}
          required
        />
        <Button type="submit" variant="primary">
          Create Student
        </Button>
      </form>
    </div>
  );
}