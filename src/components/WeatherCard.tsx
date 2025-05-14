import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WeatherCard(props: { data: WeatherData, city: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Weather - {props.city}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Current</p>
            <p className="text-3xl font-bold">{props.data.temp}°C</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Low</p>
            <p className="text-xl font-semibold text-blue-600">{props.data.minTemp}°C</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">High</p>
            <p className="text-xl font-semibold text-red-600">{props.data.maxTemp}°C</p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Conditions</p>
          <p className="text-lg capitalize font-medium">{props.data.description}</p>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Date</p>
          <p className="text-sm">{props.data.date}</p>
        </div>
      </CardContent>
    </Card>
  );
}