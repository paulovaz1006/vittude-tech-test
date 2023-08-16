import Title from "../../components/Titles";
import './style.scss'
const Dashboard = () => {
  const userName = localStorage.getItem('userName');
  const userImage = localStorage.getItem('userImg');
  
  return (
    <div className="box-dashboard">
      <img src={userImage} alt="user" />
      <Title>{userName}</Title>
  </div>
  )
 
}

export default Dashboard;