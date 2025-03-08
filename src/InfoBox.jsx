import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./InfoBox.css"

export default function InfoBox({info}) {
    const Winter = "https://img.freepik.com/free-photo/girl-with-colourful-umbrella-row-tree-nami-island-south-korea-winter-south-korea_335224-269.jpg?ga=GA1.1.996151427.1741431986&semt=ais_hybrid"
    const Rain = "https://img.freepik.com/free-photo/photorealistic-view-tree-nature-with-branches-trunk_23-2151478106.jpg?ga=GA1.1.996151427.1741431986&semt=ais_hybrid"
    const Sunny = "https://img.freepik.com/free-photo/natural-landscape-sunflowers-field-sunny-day_2829-9257.jpg?ga=GA1.1.996151427.1741431986&semt=ais_hybrid"
    const ClearSky = "https://img.freepik.com/free-photo/beautiful-trees-grass-covered-hill-clouds-sky_181624-10598.jpg?t=st=1741435982~exp=1741439582~hmac=1e3431f089efca0f2a02b6029337e6a61e65746619d25685a537b5c5b5e5acb4&w=1380"
    return (
    <div className="infoBox">
      <div className="Card"><Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={info.humidity > 80 && info.temp< 20 ? Winter: info.humidity > 70 ? Rain: info.temp > 30 ? Sunny: ClearSky}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
              <div>
                <p>Temprature: {info.temp}&deg;C</p>
                <p>Humidity: {info.humidity}</p>
                <p>Max Temperature: {info.max_temp}&deg;C</p>
                <p>Min Temperature: {info.min_temp}&deg;C</p>
                <p>Feels like: {info.feelsLike}&deg;C with  <i>{info.description}</i></p>
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
    </div>
  );
}
