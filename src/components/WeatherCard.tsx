import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WeatherCard(props: { data: WeatherData }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weather</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{new Date(props.data.date).toLocaleDateString()}</p>
        <p>{props.data.temp}°C</p>
        <p>{props.data.description}</p>
      </CardContent>
    </Card>
  );
}