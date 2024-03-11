import privacyData from './privacyData';
import '../../../styles/css/Privacy/Privacy.css'
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useContext } from 'react';
import UserContext from '../../../context/UserContext';

const Privacy = () => {
  const  {navigate} = useContext(UserContext);
  return (
    <div className="privacy-container">
      <h2>{privacyData.title}</h2>
      {privacyData.content.map((section) => (
        <p key={section.id}>{section.text}</p>
      ))}
      <Button onClick={()=> navigate('/')}>
        <ArrowBackIcon />Back
      </Button>
    </div>
  );
};

export default Privacy;