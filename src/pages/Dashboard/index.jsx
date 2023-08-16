import { ButtonPrimary } from "../../components/Buttons";
import Title from "../../components/Titles";
import 'style.scss'
const Dashboard = () => {
  const userName = localStorage.getItem('userName');
  const userImage = localStorage.getItem('userImg');
  
  return (
    <div className="box-dashboard">
      <img src={userImage} />
      <Title>{userName}</Title>
      {/* <ButtonPrimary onCLick={}>Logout</ButtonPrimary> */}
  </div>
  )
 
}

export default Dashboard;