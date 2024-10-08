import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useAuthCheck = () => {
  const navigate = useNavigate();

  console.log("auth check ran")


  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.post('http://localhost:9000/authenticate/check-auth', {},
          {
            withCredentials: true,
            headers: {
              'Cache-Control': 'no-cache',            }
          },

        ); // Endpoint to check authentication status
        if (response.status === 200) {
          // User is authenticated
          navigate('/dashboard'); // Redirect to Dashboard
        } else {
          // User is not authenticated
          navigate('admin/login'); // Redirect to Login page
        }
      } catch (error) {
        // Handle error or assume user is not authenticated
        navigate('admin/login');
      }
    };

    checkAuth();
  }, [navigate]);
};

export default useAuthCheck;
