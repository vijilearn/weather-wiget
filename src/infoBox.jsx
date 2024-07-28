
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function infoBox({Info}){
    let ini_URL="https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    const Hot_URL = "https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.jpg?s=2048x2048&w=is&k=20&c=GFLYF-pRw41qTUwGyU4V1J1qcI0ilFkKx0zuDPd_uqE=";
    const Cold_URl="https://images.unsplash.com/photo-1564314966935-6c2f60eb32a7?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Rainy_URl ="https://media.istockphoto.com/id/1164520030/photo/rain-on-umbrella-weather-concept.jpg?s=1024x1024&w=is&k=20&c=5PcfvP-jEzR39N57_Jn8Wcb-cRwkXR82s9o1dbF02YU=";
   
    return(
    <div className="infoBox">
      <br></br>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Info.humidity > 80 ? Rainy_URl : Info.temp > 15 ? Hot_URL :Cold_URl }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        { Info.city}
        {Info.humidity > 80 ? <ThunderstormIcon/> 
        : Info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div>Temperature :{ Info.temp}&deg;C</div>
          <div>Max_Temperature :{Info.temp_max}&deg;C</div>
          <div>Min_Temperature :{Info.temp_min}&deg;C</div>
          <div>Humidity :{Info.humidity}</div>
          <div>Feels_Like:{Info.feelsLike}&deg;C</div>
          <div>Today's Weather :{Info.weather}</div>
        </Typography>
      </CardContent>
      
    </Card>
  </div>)
}